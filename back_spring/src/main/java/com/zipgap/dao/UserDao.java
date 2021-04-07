package com.zipgap.dao;

import com.zipgap.mapper.RegistrationMapper;
import com.zipgap.vo.userVO.RegistrationVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;

@Repository
public class UserDao {

    @Autowired
    RegistrationMapper registrationMapper;

    @GetMapping
    public boolean registration(RegistrationVO registrationVO) {
        registrationMapper.userRegistration(registrationVO);
        return true;
    }
}
