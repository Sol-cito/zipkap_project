package com.zipgap.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.zipgap.vo.ListVO;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface ListMapper {

    List<ListVO> fetchListByDealDay(String dealDay);

    //계약일 기준 최신순으로 실거래 조회
    List<ListVO> fetchListByRecentDealDay();

}
