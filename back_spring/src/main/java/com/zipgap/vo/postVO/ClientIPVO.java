package com.zipgap.vo.postVO;

/*
 *  Client IP 정보를 담는 VO 클래스
 * */

import com.zipgap.entity.clientIPEntity.ClientIP;
import com.zipgap.entity.postEntity.Post;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder // 생성자 대신 빌더패턴 사용
public class ClientIPVO {
    private Post post;
    private String user_IP;
    private Date date;

    /* VO를 JPA Entity 로 변환시켜주는 메소드 */
    public ClientIP toEnity() {
        return ClientIP.builder()
                .post(this.post)
                .user_IP(this.user_IP)
                .date(this.date)
                .build();
    }
}
