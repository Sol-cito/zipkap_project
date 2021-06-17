package com.zipgap.mapper;

import com.zipgap.vo.cartVO.CartVO;
import com.zipgap.vo.listVO.ListVO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface CartMapper {

    void insertWish(CartVO cart);
    List<ListVO> selectWish(String cart_email);
    void deleteWish(CartVO cart);

}
