package com.zipgap.controller.freeboardController;

import com.zipgap.entity.postEntity.Post;
import com.zipgap.entity.userEntity.User;
import com.zipgap.service.postService.IFreeboardService;
import com.zipgap.service.userService.IUserService;
import com.zipgap.vo.postVO.PostVO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class FreeBoardController {

    private final IUserService iUserService;
    private final IFreeboardService iFreeboardService;


    /* 포스트 게시글 가져오기 */
    @GetMapping(value = "/api/freeBoard/")
    @ResponseBody
    @ResponseStatus(value = HttpStatus.OK)
    public List<Post> getAllPosts() {
        return iFreeboardService.getAllPosts();
    }

    /* 포스트 저장 */
    @PostMapping(value = "/api/freeBoard/postSave")
    @ResponseBody
    @ResponseStatus(value = HttpStatus.OK)
    public void savePost(
            @RequestBody PostVO postVO,
            HttpServletRequest request
    ) {
        String userId = (String) request.getSession().getAttribute("id");
        User curUser = iUserService.getBasicInfo(userId);
        iFreeboardService.savePost(postVO, curUser);
    }

    /* 포스트 읽기 */
    @PostMapping(value = "/api/freeBoard/getCurrentPost")
    @ResponseBody
    @ResponseStatus(value = HttpStatus.OK)
    public Post getCurrentPost(
            @RequestBody int post_seq
    ) {
        return iFreeboardService.getCurrentPost(post_seq);
    }

    /* 포스트 조회수 늘리기 */
    @PostMapping(value = "/api/freeBoard/increasePostHit")
    @ResponseBody
    @ResponseStatus(value = HttpStatus.OK)
    public void increasePostHit(
            @RequestBody int post_seq,
            HttpServletRequest request
    ) {
        String clientIP = iFreeboardService.getClientIP(request);
        if (!iFreeboardService.checkClientIPinDB(clientIP, post_seq)) {  // 조회수 기록(IP)이 없으면
            Post post = iFreeboardService.getCurrentPost(post_seq); // post객체를 얻고
            iFreeboardService.updateClientIpOnPost(clientIP, post); // ClientIP 테이블에 IP를 넣고,
            iFreeboardService.increaseHitOfPost(post_seq); // 조회수를 1 늘린다
        }
    }

    /* 포스트 좋아요 */
    @PostMapping(value = "/api/freeBoard/likePost")
    @ResponseBody
    @ResponseStatus(value = HttpStatus.OK)
    public void likePost(
            @RequestBody int post_seq
    ) {
        iFreeboardService.increaseLikeOfPost(post_seq);
    }

    /* 포스트 싫어요 */
    @PostMapping(value = "/api/freeBoard/dislikePost")
    @ResponseBody
    @ResponseStatus(value = HttpStatus.OK)
    public void dislikePost(
            @RequestBody int post_seq
    ) {
        iFreeboardService.increaseDislikeOfPost(post_seq);
    }
}
