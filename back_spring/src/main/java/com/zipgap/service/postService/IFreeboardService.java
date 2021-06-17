package com.zipgap.service.postService;

import com.zipgap.entity.postEntity.Post;
import com.zipgap.vo.postVO.PostVO;

import java.util.List;
import java.util.Optional;

public interface IFreeboardService {
    void savePost(PostVO postVO);

    List<Post> getAllPosts();

    Post getCurrentPost(int post_seq);

    void increaseHitOfPost(int post_seq);

    void increaseLikeOfPost(int post_seq);

    void increaseDislikeOfPost(int post_seq);
}
