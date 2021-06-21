package com.zipgap.entity.clientIPEntity;

import com.zipgap.entity.postEntity.Post;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Getter
@NoArgsConstructor // 기본 생성자는 필수 (JPA가 엔티티 객체 생성 시 기본 생성자를 사용)
@Entity
@Table(name = "tb_post_clientip") // table 이름 명시 안하면 default는 class명이 됨

public class ClientIP {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    @Column(name = "seq")
    private int seq;

    @ManyToOne
    @JoinColumn(name = "post_seq")
    private Post post;

    @Column(name = "user_IP", length = 100, nullable = false)
    private String user_IP;

    @Column(name = "date", length = 100, nullable = false)
    private Date date;

    @Builder // id가 auto_increment이므로 builder에 넣을 필요 없음
    public ClientIP(Post post, String user_IP, Date date) {
        this.post = post;
        this.user_IP = user_IP;
        this.date = date;
    }
}
