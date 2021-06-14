package com.zipgap.service.cartService;

import com.zipgap.vo.cartVO.CartVO;

import java.util.List;

public interface ICartService {

    List<CartVO> wishAdd();
    List<CartVO> wishGet();


}
