package com.zipgap.service.postService;

import com.zipgap.entity.postEntity.Post;
import com.zipgap.entity.postEntity.PostRepository;
import com.zipgap.vo.postVO.PostVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
@Transactional // 함수 종료시 자동 DB commit
public class FreeboardService implements IFreeboardService {

    private final PostRepository postRepository;

    @Override
    public void savePost(PostVO postVO) {
        postRepository.save(postVO.toEnity());
    }

    @Override
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    @Override
    public Post getCurrentPost(int post_seq) {
        return postRepository.findById(post_seq).get();
    }

    @Override
    public void incrementHitOfPost(int post_seq) {
        Optional<Post> post = postRepository.findById(post_seq);
        if (post.isPresent()) {
            Post curPost = post.get();
            Post updatedPost = Post.builder()
                    .author(curPost.getAuthor())
                    .title(curPost.getTitle())
                    .content(curPost.getContent())
                    .date(curPost.getDate())
                    .hit(curPost.getHit() + 1)
                    .author_id(curPost.getAuthor_id())
                    .build();
            updatedPost.setCurSeq(post_seq); // 현재 post_seq로 entity의 seq를 세팅.
            postRepository.save(updatedPost);
        }
    }
}
