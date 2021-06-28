package com.zipgap.controller.userController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zipgap.entity.userEntity.User;
import com.zipgap.entity.userEntity.UserRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.List;
import java.util.Optional;

/*
 *
 * 중복 NickName을 검사하는 JPA findById 테스트 클래스이다.
 *
 */
@SpringBootTest
public class CheckDuplicateNickNameControllerTest {
    /* TEST용으로 집어넣을 USER데이터의 정보이다  */
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
    void setMvc(@Autowired UserController userController) {
        /* 컨트롤러 빌드*/
        mvc = MockMvcBuilders.standaloneSetup(userController).build();
    }

    /* 테스트가 끝나고 나서는 DB에서 테스트데이터를 지워야 한다 */
    @AfterEach
    public void cleanup() {
        userRepository.deleteById(email);
    }

    @Test
    public void insertAndSelectNicknameQueryTest() {
        userRepository.save(User.builder() // 우선 user를 insert한다
                .email(email)
                .name(name)
                .nickName(nickName)
                .password(password)
                .build());

        List<User> userList = userRepository.findAll();
        int nickNameNum = 0;
        for (User user : userList) {
            if (user.getNickName().equals(nickName)) {
                nickNameNum++;
            }
        }
        Assertions.assertEquals(1, nickNameNum); // nickName이 중복되므로 단 하나 있어야 한다.
    }
}
