package com.zipgap.mapper;

import com.zipgap.vo.userVO.RegistrationVO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface RegistrationMapper {
    void userRegistration(RegistrationVO registrationVO);
}
