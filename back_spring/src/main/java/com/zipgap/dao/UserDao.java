package com.zipgap.dao;

import com.zipgap.mapper.RegistrationMapper;
import com.zipgap.vo.userVO.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;

/* JPA 로 인해 안쓰게 될듯...*/

@Repository
public class UserDao {

    @Autowired
    RegistrationMapper registrationMapper;

    @GetMapping
    public boolean registration(UserVO userVO) {
        registrationMapper.userRegistration(userVO);
        return true;
    }
}
