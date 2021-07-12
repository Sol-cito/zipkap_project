package com.zipgap.service.postService;

import com.zipgap.entity.postEntity.Post;
import com.zipgap.entity.userEntity.User;
import com.zipgap.vo.postVO.PostVO;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface IFreeboardService {
    void savePost(PostVO postVO, User curUser);

    void deletePost(int post_Seq);

    List<Post> getAllPosts();

    Post getCurrentPost(int post_seq);

    String getClientIP(HttpServletRequest request);

    void updateClientIpOnPost(String ip, Post post);

    boolean checkClientIPinDB(String ip, int post_seq);

    void increaseHitOfPost(int post_seq);

    void increaseLikeOfPost(int post_seq);

    void increaseDislikeOfPost(int post_seq);
}
