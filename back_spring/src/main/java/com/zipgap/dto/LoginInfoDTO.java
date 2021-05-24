package com.zipgap.dto;
/*
 *  로그인 form 정보를 담는 DTO 클래스
 * */

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginInfoDTO {
    private String id;
    private String password;
}
