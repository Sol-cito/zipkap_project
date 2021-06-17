package com.zipgap.service.cartService;

import com.zipgap.vo.cartVO.CartVO;
import com.zipgap.vo.listVO.ListVO;

import java.util.List;

public interface ICartService {

    void insertWish(CartVO cart);
    List<ListVO> selectWish(String cart_email);
    void deleteWish(CartVO cart);

}
