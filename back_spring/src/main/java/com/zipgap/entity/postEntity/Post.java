package com.zipgap.entity.postEntity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Getter
@NoArgsConstructor // 기본 생성자는 필수 (JPA가 엔티티 객체 생성 시 기본 생성자를 사용)
@Entity
@Table(name = "tb_post") // table 이름 명시 안하면 default는 class명이 됨
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    @Column(name = "post_seq")
    private int post_seq;

    @Column(name = "author", length = 100, nullable = false)
    private String author;

    @Column(name = "title", length = 100, nullable = false)
    private String title;

    @Column(name = "content", columnDefinition = "TEXT")
    private String content;

    @Column(name = "date", length = 100, nullable = false)
    private Date date;

    @Column(name = "hit", length = 100, nullable = false)
    private int hit;

    @Column(name = "author_id", length = 100, nullable = false)
    private String author_id;

    @Builder // id가 auto_increment이므로 builder에 넣을 필요 없음
    public Post(String author, String title, String content, Date date, int hit, String author_id) {
        this.author = author;
        this.title = title;
        this.content = content;
        this.date = date;
        this.hit = hit;
        this.author_id = author_id;
    }
}
