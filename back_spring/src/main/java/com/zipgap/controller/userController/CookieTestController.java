package com.zipgap.controller.userController;

import com.zipgap.controller.userController.util.CookieGetter;
import com.zipgap.controller.userController.util.SessionGetter;
import com.zipgap.dto.LoginInfoDTO;
import com.zipgap.service.userService.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@RequiredArgsConstructor
@RestController
public class CookieTestController {
    @PostMapping(value = "/api/user/cookieTest")
    @ResponseBody
    public ResponseEntity cookieTestRequest(
            @RequestBody LoginInfoDTO loginInfoDTO,
            HttpServletRequest request,
            HttpServletResponse response) {
        System.out.println("====쿠키 테스트 =====");

        Cookie[] cookies = request.getCookies();
        HttpSession httpSession = request.getSession();
        for (Cookie cookie : cookies) {
            System.out.println("쿠키 확인---");
            System.out.println(cookie.getName());
            System.out.println(httpSession.getAttribute("user"));
        }
        return new ResponseEntity<>("CookieOK", null, HttpStatus.OK);
    }
}
