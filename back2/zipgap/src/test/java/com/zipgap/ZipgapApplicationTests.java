package com.zipgap;

import com.zipgap.service.ListService;
import com.zipgap.entity.ListEntity;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.filter.CharacterEncodingFilter;

import javax.transaction.Transactional;
import java.util.Optional;

import static org.assertj.core.api.BDDAssertions.then;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.iterableWithSize;
import static org.hamcrest.core.Is.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

//@RunWith(SpringRunner.class) // ※ Junit4 사용시
@SpringBootTest(
        properties = {
                "testId=test_1",
                "testName=첫번째테스트"
        }
        //classes = {TestJpaRestController.class, ListService.class},
        ,webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT
)

@Transactional
@AutoConfigureMockMvc
@Slf4j
public class ZipgapApplicationTests {

    @Value("${testId}")
    private String testId;

    @Value("${testName}")
    private String testName;
    
    /*@MockBean
    private MemberRepository listRepository;*/

    @Autowired
    MockMvc mvc;

    @Autowired
    private TestRestTemplate restTemplate;

    // Service로 등록하는 빈
    @Autowired
    private ListService listService;

    @Autowired
    private WebApplicationContext ctx;

    @BeforeEach() //Junit4의 @Before
    public void setup() {
        this.mvc = MockMvcBuilders.webAppContextSetup(ctx)
                .addFilters(new CharacterEncodingFilter("UTF-8", true))  // 필터 추가
                .alwaysDo(print())
                .build();
    }

    @Test
    void getMember() throws Exception {
        log.info("##### Properties 테스트 #####");

        /******** START : MOC MVC test **********/
        log.info("******** START : MOC MVC test **********");
        mvc.perform(get("/listTest/1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.id", is("zipgap")))
                .andDo(print());
        log.info("******** END : MOC MVC test **********");
        /******** END : MOC MVC test **********/

        /******** START : TestRestTemplate test **********/
        log.info("******** START : TestRestTemplate test **********");
        ResponseEntity<ListEntity> response = restTemplate.getForEntity("/listTest/1", ListEntity.class);
        then(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        then(response.getBody()).isNotNull();
        log.info("******** END : TestRestTemplate test **********");
        /******** END : TestRestTemplate test **********/

        /******** START : MockBean test **********/
        log.info("******** START : MockBean test **********");
        /*
        ListEntity listVo = ListEntity.builder()
                .id(testId)
                .name(testName)
                .build();

        given(listRepository.findById(1L))
                .willReturn(Optional.of(listVo));*/

        Optional<ListEntity> list = listService.findById(1L);
        if (list.isPresent()) {
            // ※ Junit4 사용시
            // assertThat(listVo.getId()).isEqualTo(list.get().getId());
            // assertThat(listVo.getName()).isEqualTo(list.get().getName());

            // Junit5 BDD 사용시
            then("꿈에그린").isEqualTo(list.get().getApartment_name());
        }
        log.info("******** END : MockBean test **********");
        /******** END : MockBean test **********/
    }
}
