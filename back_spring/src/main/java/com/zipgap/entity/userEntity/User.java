package com.zipgap.entity.userEntity;


import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor // 기본 생성자는 필수 (JPA가 엔티티 객체 생성 시 기본 생성자를 사용)
@Entity
@Table(name = "tb_user") // table 이름 명시 안하면 default는 class명이 됨
public class User {

    @Id
    @Column(name = "email") // column 이름 명시 안하면 default는 필드변수명이 됨
    private String email;

    @Column(name = "name", length = 100, nullable = false)
    private String name;

    @Column(name = "nickname", length = 100, nullable = false)
    private String nickName;

    @Column(name = "password", length = 100, nullable = false)
    private String password;

    @Column(name = "withdrawalflag") // default - 'N'
    private String withdrawalflag;

    /*
     * JPA Entity 클래스에서는 setter를 사용하지 않는다.
     * setter를 사용하면 중간에 값이 바뀌어버릴 수 있고,
     * DB가 의도치 않게 조작될 수 있으므로 절대 중간에 값이 바뀌어서는 안된다.
     * 따라서 Setter를 없애고 생성자 or 빌더패턴으로 Entity 인스턴스를 만든다.
     * 단, 생성자의 경우 값을 넘겨주는 코드가 잘못되었을 때 인지하기 어려우나,
     * 빌드패턴은 굉장히 명확하게 인지 가능하므로 빌더패턴이 선호된다.
     * */
    @Builder
    public User(String email, String name, String nickName, String password) { // 탈퇴 플래그는 default가 있으므로 제외
        this.email = email;
        this.name = name;
        this.nickName = nickName;
        this.password = password;
    }

    public void switchWithdrawalFlag() {
        this.withdrawalflag = "Y";
    }
}
