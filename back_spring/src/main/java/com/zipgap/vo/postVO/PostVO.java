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
    private String title;
    private String content;
    private Date date;
    private int hit;

    /* VO를 JPA Entity 로 변환시켜주는 메소드 */
    public Post toEnity() {
        return Post.builder()
                .author(author)
                .title(title)
                .content(content)
                .date(date)
                .hit(hit)
                .build();
    }
}
