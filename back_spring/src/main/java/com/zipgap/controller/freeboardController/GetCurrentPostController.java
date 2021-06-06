package com.zipgap.controller.freeboardController;

import com.zipgap.entity.postEntity.Post;
import com.zipgap.service.postService.FreeboardService;
import com.zipgap.vo.postVO.PostVO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class GetCurrentPostController {
    private final FreeboardService freeboardService;

    @PostMapping(value = "/api/freeBoard/getCurrentPost")
    @ResponseBody
    @ResponseStatus(value = HttpStatus.OK)
    public Post getCurrentPost(
            @RequestBody int post_seq
    ) {
        return freeboardService.getCurrentPost(post_seq);
    }
}
