package com.zipgap.mapper;

import com.zipgap.vo.cartVO.CartVO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface CartMapper {

    List<CartVO> wishAdd();
    List<CartVO> wishGet();

}
