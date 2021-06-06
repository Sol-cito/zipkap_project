package com.zipgap.controller.freeboardController;

import com.zipgap.entity.userEntity.User;
import com.zipgap.service.postService.FreeboardService;
import com.zipgap.service.userService.UserService;
import com.zipgap.vo.postVO.PostVO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;

@RequiredArgsConstructor
@RestController
public class PostSaveController {

    private final UserService userService;
    private final FreeboardService freeboardService;

    @PostMapping(value = "/api/freeBoard/postSave")
    @ResponseBody
    @ResponseStatus(value = HttpStatus.OK)
    public void savePost(
            @RequestBody PostVO postVO,
            HttpServletRequest request
    ) {
        System.out.println("PostVO = " + postVO);
        String userId = (String) request.getSession().getAttribute("id");
        User curUser = userService.getBasicInfo(userId);
        postVO.setAuthor(curUser.getNickName()); // 글쓴이 설정
        postVO.setDate(new Date()); // 글쓴 날짜 설정
        postVO.setHit(1); // 최초 조회수 1로 설정 
        System.out.println(postVO);
        freeboardService.savePost(postVO);
    }
}
