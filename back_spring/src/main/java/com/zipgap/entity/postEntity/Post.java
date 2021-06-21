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

    @Column(name = "author_id", length = 100, nullable = false)
    private String author_id;

    @Column(name = "title", length = 100, nullable = false)
    private String title;

    @Column(name = "content", columnDefinition = "TEXT")
    private String content;

    @Column(name = "date", length = 100, nullable = false)
    private Date date;

    @Column(name = "hit", length = 100, nullable = false)
    private int hit;

    @Column(name = "like_cnt", length = 100)
    private int like_cnt;

    @Column(name = "dislike_cnt", length = 100)
    private int dislike_cnt;

    @Builder // id가 auto_increment이므로 builder에 넣을 필요 없음
    public Post(String author, String author_id, String title, String content, Date date, int hit, int like_cnt, int dislike_cnt) {
        this.author = author;
        this.author_id = author_id;
        this.title = title;
        this.content = content;
        this.date = date;
        this.hit = hit;
        this.like_cnt = like_cnt;
        this.dislike_cnt = dislike_cnt;
    }

    // post_seq 는 auto_increment이므로, 함수를 통해 현재 post의 post_seq로 entity를 세팅
    public void setCurSeq(int post_seq){
        this.post_seq = post_seq;
    }
}
