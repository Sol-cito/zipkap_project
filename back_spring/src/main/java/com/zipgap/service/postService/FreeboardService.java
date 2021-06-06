package com.zipgap.service.postService;

import com.zipgap.entity.postEntity.PostRepository;
import com.zipgap.vo.postVO.PostVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
@Transactional // 트랜잭션 관리
public class FreeboardService implements IFreeboardService {

    private final PostRepository postRepository;

    @Override
    public void savePost(PostVO postVO) {
        postRepository.save(postVO.toEnity());
    }
}
