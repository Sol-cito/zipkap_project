package com.zipgap.service.userService;

import com.zipgap.dto.LoginInfoDTO;
import com.zipgap.entity.userEntity.User;
import com.zipgap.vo.userVO.UserVO;

public interface IUserService {
    void userRegistration(UserVO userVO);

    boolean checkDuplicateEmail(UserVO userVO);

    boolean checkDuplicateNickName(UserVO userVO);

    boolean loginUser(LoginInfoDTO loginInfoDTO);

    void withdraw(String userId);

    User getBasicInfo(String id);

    boolean changePassword(String id, String password);

    boolean changeProfile(UserVO userVO);
}
