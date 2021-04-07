package com.zipgap.vo.userVO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/*
*  회원가입 form 정보를 담는 VO 클래스
* */

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder // 생성자 대신 빌더패턴 사용
public class RegistrationVO {
    private String email;
    private String name;
    private String nickName;
    private String password;
}
