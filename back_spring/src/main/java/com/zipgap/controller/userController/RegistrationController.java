package com.zipgap.controller.userController;

import com.zipgap.service.userService.UserService;
import com.zipgap.vo.userVO.UserVO;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class RegistrationController {

    Logger logger = LoggerFactory.getLogger(RegistrationController.class);

    private final UserService userService;

    @PostMapping(value = "/api/user/registration")
    @ResponseBody
    public UserVO registration(
            @RequestBody UserVO userVO
    ) {
        logger.debug("==========로깅 테스트  !!!!!!!!!!!!");
        userService.userRegistration(userVO);
        return userVO;
    }
}
