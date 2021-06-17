package com.zipgap.dao;

import com.zipgap.mapper.CartMapper;
import com.zipgap.vo.cartVO.CartVO;
import com.zipgap.vo.listVO.ListVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Repository
public class CartDao {

    @Autowired
    CartMapper cartMapper;

    @GetMapping()
    public void insertWish(CartVO cart) {
        System.out.println(3);
        cartMapper.insertWish(cart);
    }

    @GetMapping()
    public List<ListVO> selectWish(String cart_email) {
        System.out.println(3);
        List<ListVO> fetchList = cartMapper.selectWish(cart_email);
        return fetchList;
    }

    @GetMapping()
    public void deleteWish(CartVO cart) {
        System.out.println(3);
        cartMapper.deleteWish(cart);
    }
}
