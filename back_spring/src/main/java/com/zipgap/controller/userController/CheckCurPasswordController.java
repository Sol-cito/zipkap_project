package com.zipgap.controller.userController;

import com.zipgap.service.userService.UserService;
import com.zipgap.vo.userVO.UserVO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RequiredArgsConstructor
@RestController
public class CheckCurPasswordController {

    private final UserService userService;


    @PostMapping(value = "/api/user/checkCurPassword")
    @ResponseBody
    public boolean checkCurPasswordController(
            @RequestBody String inputPassword,
            HttpServletRequest request) {
        HttpSession httpSession = request.getSession();
        String passwordFromDB = userService.getBasicInfo((String) httpSession.getAttribute("id")).getPassword();
        System.out.println(inputPassword);
        System.out.println(passwordFromDB);
        System.out.println(inputPassword.equals(passwordFromDB));
        return inputPassword.equals(passwordFromDB);
    }
}
