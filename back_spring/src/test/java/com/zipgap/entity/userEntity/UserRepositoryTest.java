package com.zipgap.entity.userEntity;


import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

/*
 * UserRepository JPA 를 테스트하는 클래스
 * 테스트 1) 테스트 데이터 insert 및 select 테스트
 *
 * */
@SpringBootTest
public class UserRepositoryTest {
    private String email = "test@test.com";
    private String name = "testName";
    private String nickName = "testNick";
    private String password = "testPassword";

    @Autowired
    UserRepository userRepository;

    @AfterEach
    public void cleanup() {
        userRepository.deleteById(email);
    }

    /* user insert 및 select 테스트 */
    @Test
    public void insertAndSelectUserTest() {
        userRepository.save(User.builder()
                .email(email)
                .name(name)
                .nickName(nickName)
                .password(password)
                .build());
        Optional<User> user = userRepository.findById(email);
        System.out.println("테스트-----------------------");
        user.ifPresent(selectUser -> {
            System.out.println("UserEmail : " + selectUser.getEmail());
            System.out.println("UserNickname : " + selectUser.getNickName());
        });
        /* 아래 코드로 user의 존재를 확인함. findById로 조회되지 않으면 false를 리턴함 */
        Assertions.assertTrue(user.isPresent());
    }
}