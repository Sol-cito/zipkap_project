package com.zipgap.controller.userController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.zipgap.service.userService.UserService;
import com.zipgap.vo.userVO.UserVO;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
public class RegistrationControllerTest {

    private MockMvc mvc; // 가짜 MVC를 Autowired로 bean 주입받은 후, API를 테스트하는 클래스

    @MockBean
    private UserService userService; // 가짜 service 빈

    @Autowired
    ObjectMapper objectMapper; // data를 JSON으로 바꿔주는 라이브러리

    /* 테스트를 위한 VO 생성 */
    UserVO userVO = UserVO.builder()
            .email("controllerTest@controllerTest.com")
            .name("test")
            .nickName("testNickname")
            .password("testPassword")
            .build();

    /*테스트 전 환경 세팅 */
    @BeforeEach
    void setMvc(@Autowired RegistrationController registrationController) {
        /* 컨트롤러 빌드*/
        mvc = MockMvcBuilders.standaloneSetup(registrationController).build();
    }

    /* objectMapper 를 이용해 VO를 jsonString으로 변환 */
    private String convertIntoString(UserVO userVO) throws JsonProcessingException {
        return objectMapper.writeValueAsString(userVO);
    }


    @Test
    public void returnTest() throws Exception {
        mvc.perform(post("/api/user/registration")
                .contentType(MediaType.APPLICATION_JSON) // JSON타입으로 헤더 설정
                .accept(MediaType.APPLICATION_JSON)
                .content(convertIntoString(userVO)) //jsonString으로 변환
        )
                .andExpect(status().isOk()); // 결과가 200 인지
////                .andExpect(content().string(returnValue));
    }
}
