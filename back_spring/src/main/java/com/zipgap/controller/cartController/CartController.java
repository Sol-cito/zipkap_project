package com.zipgap.controller.cartController;

import com.zipgap.service.cartService.ICartService;
import com.zipgap.vo.cartVO.CartVO;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/cart")
public class CartController {

    Logger logger = LoggerFactory.getLogger(CartController.class);

    private final ICartService cartService;

    @PostMapping(value = "/wishAdd")
    @ResponseBody
    @ResponseStatus(value = HttpStatus.OK)
    public List<CartVO> wishAdd() {
        logger.debug("==========로깅 테스트==========");
        System.out.println(1);
        List<CartVO> fetchList = cartService.wishAdd();
        return fetchList;
    }

    @PostMapping(value = "/wishGet")
    @ResponseBody
    @ResponseStatus(value = HttpStatus.OK)
    public List<CartVO> wishGet() {
        logger.debug("==========로깅 테스트==========");
        System.out.println(1);
        List<CartVO> fetchList = cartService.wishGet();
        return fetchList;
    }
}
