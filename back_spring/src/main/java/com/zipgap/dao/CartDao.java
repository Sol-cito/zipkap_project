package com.zipgap.dao;

import com.zipgap.mapper.CartMapper;
import com.zipgap.vo.cartVO.CartVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Repository
public class CartDao {

    @Autowired
    CartMapper cartMapper;

    @GetMapping()
    public List<CartVO> wishAdd() {
        System.out.println(3);
        List<CartVO> fetchList = cartMapper.wishAdd();
        return fetchList;
    }

    @GetMapping()
    public List<CartVO> wishGet() {
        System.out.println(3);
        List<CartVO> fetchList = cartMapper.wishGet();
        return fetchList;
    }
}
