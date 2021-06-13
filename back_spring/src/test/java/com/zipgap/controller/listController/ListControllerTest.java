package com.zipgap.controller.listController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.zipgap.service.listService.ListService;
import com.zipgap.vo.listVO.ListVO;
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
public class ListControllerTest {

    private MockMvc mvc;

    @MockBean
    private ListService listService;

    @Autowired
    ObjectMapper objectMapper;

    ListVO listVO = ListVO.builder()
            .build();

    @BeforeEach
    void setMvc(@Autowired ListController listController) {
        mvc = MockMvcBuilders.standaloneSetup(listController).build();
    }

    private String convertIntoString(ListVO listVO) throws JsonProcessingException {
        return objectMapper.writeValueAsString(listVO);
    }

    @Test
    public void returnTest() throws Exception {
        mvc.perform(post("/api/list/recent")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(convertIntoString(listVO))
        )
                .andExpect(status().isOk());
    }
}
