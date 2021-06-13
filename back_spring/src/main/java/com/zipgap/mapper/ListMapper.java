package com.zipgap.mapper;

import com.zipgap.vo.listVO.ListVO;
import com.zipgap.vo.listVO.ApartVO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface ListMapper {

    List<ListVO> fetchListByRecentDealDay();

    List<ListVO> fetchListByRecentDealDay2();

    List<ListVO> fetchListByDealDay(String dealDay);

    List<ApartVO> fetchListByApartment(String apartment_name);

    List<ApartVO> fetchListByApartment2();

}
