package com.zipgap.mapper;

import com.zipgap.vo.userVO.UserVO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface RegistrationMapper {
    void userRegistration(UserVO userVO);
}
