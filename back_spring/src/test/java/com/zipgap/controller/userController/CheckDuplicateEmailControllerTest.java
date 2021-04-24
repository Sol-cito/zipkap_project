package com.zipgap.controller.userController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.zipgap.entity.userEntity.User;
import com.zipgap.entity.userEntity.UserRepository;
import com.zipgap.vo.userVO.UserVO;
import org.aspectj.lang.annotation.After;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Optional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/*
*
* 중복 Email을 검사하는 JPA findById 테스트 클래스이다.
*
*/
@SpringBootTest
public class CheckDuplicateEmailControllerTest {
    /* TEST용으로 집어넣을 USER데이터의 정보이다 --> Email 테스트이므로 정규식 지키지 않음. */
    private static String email = "emailTest@test.test";
    private String name = "testName";
    private String nickName = "testNick";
    private String password = "testPassword";

    private MockMvc mvc;

    @Autowired
    ObjectMapper objectMapper;
    @Autowired
    UserRepository userRepository;


    /*테스트 전 환경 세팅 */
    @BeforeEach
    void setMvc(@Autowired CheckDuplicateEmailController checkDuplicateEmailController) {
        /* 컨트롤러 빌드*/
        mvc = MockMvcBuilders.standaloneSetup(checkDuplicateEmailController).build();
    }

    /* 테스트가 끝나고 나서는 DB에서 테스트데이터를 지워야 한다 */
    @AfterEach
    public void cleanup() {
        userRepository.deleteById(email);
    }

    @Test
    public void insertAndSelectQueryTest() {
        userRepository.save(User.builder()
                .email(email)
                .name(name)
                .nickName(nickName)
                .password(password)
                .build());
        Optional<User> insertedUser = userRepository.findById(email);
        /* 아래 코드로 user의 존재를 확인함. findById로 조회되지 않으면 false를 리턴함 */
        Assertions.assertTrue(insertedUser.isPresent());

        System.out.println("테스트 이메일 : "+ email);
        Optional<User> selectedUser = userRepository.findById(email);
        Assertions.assertTrue(selectedUser.isPresent()); // 아이디 중복이 있기 때문에 true 이어야 한다.
    }
}
