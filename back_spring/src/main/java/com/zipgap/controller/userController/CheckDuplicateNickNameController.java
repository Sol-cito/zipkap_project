package com.zipgap.controller.userController;

import com.zipgap.service.userService.UserService;
import com.zipgap.vo.userVO.UserVO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class CheckDuplicateNickNameController {
    private final UserService userService;

    @PostMapping(value = "/api/user/checkDuplicateNickName")
    @ResponseBody
    public boolean checkDuplicateNickName(
            @RequestBody UserVO userVO) {
        return userService.checkDuplicateNickName(userVO);
    }
}
