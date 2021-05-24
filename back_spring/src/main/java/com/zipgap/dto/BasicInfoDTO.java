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
public class BasicInfoDTO {
    private String email;
    private String name;
    private String nickName;
}
