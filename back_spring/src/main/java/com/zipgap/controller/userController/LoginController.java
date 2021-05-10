package com.zipgap.controller.userController;

import com.zipgap.controller.userController.util.CookieGetter;
import com.zipgap.controller.userController.util.SessionGetter;
import com.zipgap.service.userService.UserService;
import com.zipgap.dto.LoginInfoDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@RequiredArgsConstructor
@RestController
public class LoginController {
    private final String LOGIN_SUCCESS = "LoginSuccess"; // 로그인 성공 시 body에 담을 메시지
    private final String LOGIN_FAIL = "LoginFail"; // 로그인 실패 시 body에 담을 메시지

    private final UserService userService;

    @PostMapping(value = "/api/user/login")
    @ResponseBody
    public ResponseEntity loginRequest(
            @RequestBody LoginInfoDTO loginInfoDTO,
            HttpServletRequest request,
            HttpServletResponse response) {
        System.out.println("로그인 컨트롤러");
        boolean isLoginSuccess = userService.loginUser(loginInfoDTO);

        if (!isLoginSuccess) { //로그인 실패 시 바로 리턴
            return new ResponseEntity<>(LOGIN_FAIL, null, HttpStatus.OK);
        }
        /* 세션 속성을 세팅한 후 response로 돌려줌 */
        SessionGetter sessionGetter = new SessionGetter(request);
        sessionGetter.setSessionAttribute("user", "login");
        return new ResponseEntity<>(LOGIN_SUCCESS, null, HttpStatus.OK);
    }
}
