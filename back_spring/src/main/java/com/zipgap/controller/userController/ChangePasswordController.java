package com.zipgap.controller.userController;

import com.zipgap.service.userService.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RequiredArgsConstructor
@RestController
public class ChangePasswordController {

    private final UserService userService;

    @PostMapping(value = "/api/user/changePassword")
    @ResponseBody
    public boolean changePasswordController(
            @RequestBody String newPassword,
            HttpServletRequest request) {
        HttpSession httpSession = request.getSession();
        boolean res = userService.changePassword((String) httpSession.getAttribute("id"), newPassword);
        System.out.println("결과 " + res);
        return res;
    }
}
