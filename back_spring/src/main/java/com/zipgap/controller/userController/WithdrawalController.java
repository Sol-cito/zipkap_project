package com.zipgap.controller.userController;

import com.zipgap.service.userService.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RequiredArgsConstructor
@RestController
public class WithdrawalController {
    private final String WITHDRAWAL_SUCCESS = "WithdrawalSuccess";

    private final UserService userService;

    @PostMapping(value = "/api/user/withdrawal")
    @ResponseBody
    public ResponseEntity withdrawalRequest(
            HttpServletRequest request
    ) {
        String userId = (String) request.getSession().getAttribute("id");
        userService.withdraw(userId);
        return new ResponseEntity<>(WITHDRAWAL_SUCCESS, null, HttpStatus.OK);
    }
}
