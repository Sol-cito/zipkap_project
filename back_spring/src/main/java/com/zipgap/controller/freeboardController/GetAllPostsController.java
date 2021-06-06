package com.zipgap.controller.freeboardController;

import com.zipgap.entity.postEntity.Post;
import com.zipgap.service.postService.FreeboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class GetAllPostsController {
    private final FreeboardService freeboardService;

    @GetMapping(value = "/api/freeBoard/")
    @ResponseBody
    @ResponseStatus(value = HttpStatus.OK)
    public List<Post> getAllPosts() {
        return freeboardService.getAllPosts();
    }
}
