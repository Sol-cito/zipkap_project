package com.zipgap.controller.userController;

import com.zipgap.dto.BasicInfoDTO;
import com.zipgap.entity.userEntity.User;
import com.zipgap.service.userService.UserService;
import com.zipgap.dto.LoginInfoDTO;
import com.zipgap.vo.userVO.UserVO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@RequiredArgsConstructor
@RestController
public class UserController {
    private final String LOGIN_SUCCESS = "LoginSuccess"; // 로그인 성공 시 body에 담을 메시지
    private final String LOGIN_FAIL = "LoginFail"; // 로그인 실패 시 body에 담을 메시지
    private final String LOGOUT_SUCCESS = "LogoutSuccess"; // 로그아웃 성공 시 body에 담을 메시지
    private final String LOGOUT_FAIL = "LogoutFail"; // 로그아웃 실패 시 body에 담을 메시지
    private final String WITHDRAWAL_SUCCESS = "WithdrawalSuccess";


    private final UserService userService;

    @PostMapping(value = "/api/user/login")
    @ResponseBody
    public ResponseEntity loginRequest(
            @RequestBody LoginInfoDTO loginInfoDTO,
            HttpServletRequest request,
            HttpServletResponse response) {
        boolean isLoginSuccess = userService.loginUser(loginInfoDTO);

        if (!isLoginSuccess) { //로그인 실패 시 바로 리턴
            return new ResponseEntity<>(LOGIN_FAIL, null, HttpStatus.OK);
        }
        /* 세션 속성을 세팅 */
        HttpSession httpSession = request.getSession();
        httpSession.setAttribute("id", loginInfoDTO.getId());
        return new ResponseEntity<>(LOGIN_SUCCESS, null, HttpStatus.OK);
    }

    @PostMapping(value = "/api/user/logout")
    public ResponseEntity logoutRequest(LoginInfoDTO loginInfoDTO,
                                        HttpServletRequest request,
                                        HttpServletResponse response) {
        HttpSession httpSession = request.getSession();
        if (httpSession.getAttribute("id") == null) {
            return new ResponseEntity<>(LOGOUT_FAIL, null, HttpStatus.OK);
        }
        httpSession.invalidate();
        return new ResponseEntity<>(LOGOUT_SUCCESS, null, HttpStatus.OK);
    }

    @PostMapping(value = "/api/user/registration")
    @ResponseBody
    public UserVO registration(
            @RequestBody UserVO userVO
    ) {
        userService.userRegistration(userVO);
        return userVO;
    }

    @PostMapping(value = "/api/user/withdrawal")
    @ResponseBody
    public ResponseEntity withdrawalRequest(
            HttpServletRequest request
    ) {
        String userId = (String) request.getSession().getAttribute("id");
        userService.withdraw(userId);
        return new ResponseEntity<>(WITHDRAWAL_SUCCESS, null, HttpStatus.OK);
    }

    @PostMapping(value = "/api/user/getBasicInfo")
    @ResponseBody
    public BasicInfoDTO getBasicInfoRequest(
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

    @PatchMapping(value = "/api/user/changeProfile")
    public boolean changeProfile(
            @RequestBody UserVO userVO
    ) {
        return userService.changeProfile(userVO);
    }

    @PostMapping(value = "/api/user/checkDuplicateNickName")
    @ResponseBody
    public boolean checkDuplicateNickName(
            @RequestBody UserVO userVO) {
        return userService.checkDuplicateNickName(userVO);
    }

    @PostMapping(value = "/api/user/checkDuplicateEmail")
    @ResponseBody
    public boolean checkDuplicateEmail(
            @RequestBody UserVO userVO) {
        return userService.checkDuplicateEmail(userVO);
    }

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
