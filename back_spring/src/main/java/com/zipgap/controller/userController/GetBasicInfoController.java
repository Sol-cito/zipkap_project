package com.zipgap.controller.userController;

import com.zipgap.dto.BasicInfoDTO;
import com.zipgap.entity.userEntity.User;
import com.zipgap.service.userService.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RequiredArgsConstructor
@RestController
public class GetBasicInfoController {

    private final UserService userService;

    @PostMapping(value = "/api/user/getBasicInfo")
    @ResponseBody
    public BasicInfoDTO withdrawalRequest(
            HttpServletRequest request
    ) {
        String userId = (String) request.getSession().getAttribute("id");
        User user = userService.getBasicInfo(userId);

        BasicInfoDTO basicInfoDTO = new BasicInfoDTO();
        basicInfoDTO.setEmail(user.getEmail());
        basicInfoDTO.setName(user.getName());
        basicInfoDTO.setNickName(user.getNickName());

        return basicInfoDTO;
    }
}
