package com.zipgap.service.postService;

import com.zipgap.entity.postEntity.Post;
import com.zipgap.entity.postEntity.PostRepository;
import com.zipgap.vo.postVO.PostVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
@Transactional // 트랜잭션 관리
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
}
