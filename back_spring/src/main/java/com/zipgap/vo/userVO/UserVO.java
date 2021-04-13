package com.zipgap.vo.userVO;

import com.zipgap.entity.userEntity.User;
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
public class UserVO {
    private String email;
    private String name;
    private String nickName;
    private String password;

    /* VO를 JPA Entity 로 변환시켜주는 메소드 */
    public User toEnity() {
        return User.builder()
                .email(email)
                .name(name)
                .nickName(nickName)
                .password(password)
                .build();
    }

}
