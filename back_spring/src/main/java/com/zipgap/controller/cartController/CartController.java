package com.zipgap.controller.cartController;

import com.zipgap.service.cartService.ICartService;
import com.zipgap.vo.cartVO.CartVO;
import com.zipgap.vo.listVO.ListVO;
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

    @ResponseBody
    @ResponseStatus(value = HttpStatus.OK)
    @PostMapping(value = "/insertWish")
    public void insertWish(@RequestBody CartVO cart) {
        logger.debug("==========로깅 테스트==========");
        System.out.println(1);

        cartService.insertWish(cart);
    }

    @GetMapping("/{cart_email}")
    public List<ListVO> selectWish(@PathVariable String cart_email) {
        logger.debug("==========로깅 테스트==========");
        System.out.println(1);
        List<ListVO> fetchList = cartService.selectWish(cart_email);
        return fetchList;
    }

    @DeleteMapping(value = "/deleteWish")
    @ResponseBody
    @ResponseStatus(value = HttpStatus.OK)
    public void deleteWish(@RequestBody CartVO cart) {
        logger.debug("==========로깅 테스트==========");
        System.out.println(1);
        cartService.deleteWish(cart);
    }

}
