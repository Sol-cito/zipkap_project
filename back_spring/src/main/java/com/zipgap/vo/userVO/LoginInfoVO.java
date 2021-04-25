package com.zipgap.vo.userVO;
/*
 *  로그인 form 정보를 담는 VO 클래스
 * */

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginInfoVO {
    private String id;
    private String password;
}
