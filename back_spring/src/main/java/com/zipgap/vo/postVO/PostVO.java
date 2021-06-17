package com.zipgap.vo.postVO;

import com.zipgap.entity.postEntity.Post;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

/*
 *  Post form 정보를 담는 VO 클래스
 * */

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder // 생성자 대신 빌더패턴 사용
public class PostVO {
    private String author;
    private String author_id;
    private String title;
    private String content;
    private Date date;
    private int hit;
    private int like_cnt;
    private int dislike_cnt;

    /* VO를 JPA Entity 로 변환시켜주는 메소드 */
    public Post toEnity() {
        return Post.builder()
                .author(author)
                .author_id(author_id)
                .title(title)
                .content(content)
                .date(date)
                .hit(hit)
                .like_cnt(like_cnt)
                .dislike_cnt(dislike_cnt)
                .build();
    }
}
