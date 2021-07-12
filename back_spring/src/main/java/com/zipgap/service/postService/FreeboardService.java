package com.zipgap.service.postService;

import com.zipgap.entity.clientIPEntity.ClientIP;
import com.zipgap.entity.clientIPEntity.ClientIPRepository;
import com.zipgap.entity.postEntity.Post;
import com.zipgap.entity.postEntity.PostRepository;
import com.zipgap.entity.userEntity.User;
import com.zipgap.vo.postVO.PostVO;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
@Transactional // 함수 종료시 자동 DB commit
public class FreeboardService implements IFreeboardService {

    private final PostRepository postRepository;
    private final ClientIPRepository clientIPRepository;

    @Override
    public void savePost(PostVO postVO, User curUser) {
        postVO.setAuthor(curUser.getNickName()); // 글쓴이 설정
        postVO.setDate(new Date()); // 글쓴 날짜 설정
        postVO.setHit(1); // 최초 조회수 1로 설정
        postVO.setAuthor_id(curUser.getEmail()); // 글쓴이 id 설정
        postRepository.save(postVO.toEnity());
    }

    @Override
    public List<Post> getAllPosts() {
        return postRepository.findAll(Sort.by(Sort.Direction.DESC, "date")); // 내림차순 정렬로 가져온다(최신순)
    }

    @Override
    public Post getCurrentPost(int post_seq) {
        return postRepository.findById(post_seq).get();
    }

    /* Client의 접속 ip를 조회한다 */
    @Override
    public String getClientIP(HttpServletRequest request) {
        String ip = request.getHeader("X-Forwarded-For");
        if (ip == null) {
            ip = request.getHeader("Proxy-Client-IP");
        }
        if (ip == null) {
            ip = request.getHeader("WL-Proxy-Client-IP"); // 웹로직
        }
        if (ip == null) {
            ip = request.getHeader("HTTP_CLIENT_IP");
        }
        if (ip == null) {
            ip = request.getHeader("HTTP_X_FORWARDED_FOR");
        }
        if (ip == null) {
            ip = request.getRemoteAddr();
        }
        return ip;
    }

    /* 클라이언트 ip가 db에 있는지 조회한다 */
    @Override
    public boolean checkClientIPinDB(String ip, int post_Seq) {
        List<ClientIP> rowList = clientIPRepository.findAll();
        for (ClientIP each : rowList) {
            if (each.getPost().getPost_seq() == post_Seq && each.getUser_IP().equals(ip)) {
                return true;
            }
        }
        return false;
    }

    @Override
    public void updateClientIpOnPost(String ip, Post post) {
        ClientIP clientIP = ClientIP.builder()
                .post(post)
                .user_IP(ip)
                .date(new Date())
                .build();
        clientIPRepository.save(clientIP);
    }

    /* 조회수를 1 증가시킨다 */
    @Override
    public void increaseHitOfPost(int post_seq) {
        Optional<Post> post = postRepository.findById(post_seq);
        if (post.isPresent()) {
            Post curPost = post.get();
            Post updatedPost = Post.builder()
                    .author(curPost.getAuthor())
                    .author_id(curPost.getAuthor_id())
                    .title(curPost.getTitle())
                    .content(curPost.getContent())
                    .date(curPost.getDate())
                    .hit(curPost.getHit() + 1)
                    .like_cnt(curPost.getLike_cnt())
                    .dislike_cnt(curPost.getDislike_cnt())
                    .build();
            updatedPost.setCurSeq(post_seq); // 현재 post_seq로 entity의 seq를 세팅.
            postRepository.save(updatedPost);
        }
    }

    /* 좋아요 개수를 늘린다 */
    @Override
    public void increaseLikeOfPost(int post_seq) {
        Optional<Post> post = postRepository.findById(post_seq);
        if (post.isPresent()) {
            Post curPost = post.get();
            Post updatedPost = Post.builder()
                    .author(curPost.getAuthor())
                    .author_id(curPost.getAuthor_id())
                    .title(curPost.getTitle())
                    .content(curPost.getContent())
                    .date(curPost.getDate())
                    .hit(curPost.getHit())
                    .like_cnt(curPost.getLike_cnt() + 1)
                    .dislike_cnt(curPost.getDislike_cnt())
                    .build();
            updatedPost.setCurSeq(post_seq); // 현재 post_seq로 entity의 seq를 세팅.
            postRepository.save(updatedPost);
        }
    }

    /* 싫어요 개수를 늘린다 */
    @Override
    public void increaseDislikeOfPost(int post_seq) {
        Optional<Post> post = postRepository.findById(post_seq);
        if (post.isPresent()) {
            Post curPost = post.get();
            Post updatedPost = Post.builder()
                    .author(curPost.getAuthor())
                    .author_id(curPost.getAuthor_id())
                    .title(curPost.getTitle())
                    .content(curPost.getContent())
                    .date(curPost.getDate())
                    .hit(curPost.getHit())
                    .like_cnt(curPost.getLike_cnt())
                    .dislike_cnt(curPost.getDislike_cnt() + 1)
                    .build();
            updatedPost.setCurSeq(post_seq); // 현재 post_seq로 entity의 seq를 세팅.
            postRepository.save(updatedPost);
        }
    }
}
