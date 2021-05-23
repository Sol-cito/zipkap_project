package com.zipgap.controller.userController;

import com.zipgap.controller.userController.util.SessionGetter;
import com.zipgap.dto.LoginInfoDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@RequiredArgsConstructor
@RestController
public class LogoutController {

    private final String LOGOUT_SUCCESS = "LogoutSuccess"; // 로그아웃 성공 시 body에 담을 메시지
    private final String LOGOUT_FAIL = "LogoutFail"; // 로그아웃 실패 시 body에 담을 메시지

    @PostMapping(value = "/api/user/logout")
    public ResponseEntity logoutRequest(LoginInfoDTO loginInfoDTO,
                                        HttpServletRequest request,
                                        HttpServletResponse response) {
        HttpSession httpSession = request.getSession();
        if (httpSession.getAttribute("id") == null) {
            System.out.println("로그아웃 실패");
            return new ResponseEntity<>(LOGOUT_FAIL, null, HttpStatus.OK);
        }
        httpSession.invalidate();
        System.out.println("로그아웃 성공");
        return new ResponseEntity<>(LOGOUT_SUCCESS, null, HttpStatus.OK);
    }
}
