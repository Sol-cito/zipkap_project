package com.zipgap.controller.testController;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest
public class TestControllerTest {

    @Autowired
    private MockMvc mvc; // 가짜 MVC를 Autowired로 bean 주입받은 후, API를 테스트하는 클래스

    @Test
    public void returnTest() throws Exception {
        String returnValue = "Dasol Test";

        mvc.perform(get("/test"))
                .andExpect(status().isOk()) // 결과가 200 인지
                .andExpect(content().string(returnValue));
    }
}
