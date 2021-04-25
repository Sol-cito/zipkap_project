package com.zipgap.controller.userController;

import com.zipgap.service.userService.UserService;
import com.zipgap.vo.userVO.LoginInfoVO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;

@RequiredArgsConstructor
@RestController
public class LoginController {
    private final UserService userService;

    @PostMapping(value = "/api/user/login")
    @ResponseBody
    public void loginRequest(
            @RequestBody LoginInfoVO loginInfoVO,
            HttpServletRequest request,
            HttpServletResponse response) {
        boolean result = userService.loginUser(loginInfoVO);

        Cookie[] cookies = request.getCookies();
        System.out.println("==========request 쿠키 정보 조회 : ");
        if (cookies == null) {
            System.out.println("쿠키 null --> 최초접속");
        } else {
            for (Cookie cookie : cookies) {
                System.out.println("key : " + cookie.getName() + "/ value : " + cookie.getValue());
            }
        }
        if (result) {
            Cookie cookie = new Cookie("storedIdCookie", loginInfoVO.getId()); // key / value로 쿠키를 설정함
            // expires in 7 days
            cookie.setMaxAge(7 * 24 * 60 * 60);
            // optional properties
            cookie.setSecure(true);
            cookie.setHttpOnly(true);
            cookie.setPath("/");
            // add cookie to response
            response.addCookie(cookie); // 쿠키를 담아서 response에 보냄
            String test = "test";
//            return new ResponseEntity<>(test, HttpStatus.OK);
        }
//        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
