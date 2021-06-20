package com.zipgap.controller.freeboardController;

import com.zipgap.entity.postEntity.Post;
import com.zipgap.entity.userEntity.User;
import com.zipgap.service.postService.FreeboardService;
import com.zipgap.service.userService.UserService;
import com.zipgap.vo.postVO.PostVO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class FreeBoardController {

    private final UserService userService;
    private final FreeboardService freeboardService;


    /* 포스트 게시글 가져오기 */
    @GetMapping(value = "/api/freeBoard/")
    @ResponseBody
    @ResponseStatus(value = HttpStatus.OK)
    public List<Post> getAllPosts() {
        System.out.println("게시글 가져오기 ");
        return freeboardService.getAllPosts();
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
        User curUser = userService.getBasicInfo(userId);
        postVO.setAuthor(curUser.getNickName()); // 글쓴이 설정
        postVO.setDate(new Date()); // 글쓴 날짜 설정
        postVO.setHit(1); // 최초 조회수 1로 설정
        postVO.setAuthor_id(curUser.getEmail()); // 글쓴이 id 설정
        freeboardService.savePost(postVO);
    }

    /* 포스트 읽기 */
    @PostMapping(value = "/api/freeBoard/getCurrentPost")
    @ResponseBody
    @ResponseStatus(value = HttpStatus.OK)
    public Post getCurrentPost(
            @RequestBody int post_seq
    ) {
        return freeboardService.getCurrentPost(post_seq);
    }

    /* 포스트 조회수 늘리기 */
    @PostMapping(value = "/api/freeBoard/increasePostHit")
    @ResponseBody
    @ResponseStatus(value = HttpStatus.OK)
    public void increasePostHit(
            @RequestBody int post_seq,
            HttpServletRequest request
    ) {
        String clientIP = freeboardService.getClientIP(request);
        if (!freeboardService.checkClientIPinDB(clientIP, post_seq)) {  // 조회수 기록(IP)이 없으면
            Post post = freeboardService.getCurrentPost(post_seq); // post객체를 얻고
            freeboardService.updateClientIpOnPost(clientIP, post); // ClientIP 테이블에 IP를 넣고,
            freeboardService.increaseHitOfPost(post_seq); // 조회수를 1 늘린다
        }
    }

    /* 포스트 좋아요 */
    @PostMapping(value = "/api/freeBoard/likePost")
    @ResponseBody
    @ResponseStatus(value = HttpStatus.OK)
    public void likePost(
            @RequestBody int post_seq
    ) {
        freeboardService.increaseLikeOfPost(post_seq);
    }

    /* 포스트 싫어요 */
    @PostMapping(value = "/api/freeBoard/dislikePost")
    @ResponseBody
    @ResponseStatus(value = HttpStatus.OK)
    public void dislikePost(
            @RequestBody int post_seq
    ) {
        freeboardService.increaseDislikeOfPost(post_seq);
    }
}
