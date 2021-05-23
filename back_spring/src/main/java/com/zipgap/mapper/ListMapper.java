package com.zipgap.mapper;

import com.zipgap.vo.listVO.RecentVO;
import com.zipgap.vo.listVO.ApartVO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface ListMapper {

    List<RecentVO> fetchListByRecentDealDay();

    List<RecentVO> fetchListByRecentDealDay2();

    List<RecentVO> fetchListByDealDay(String dealDay);

    List<ApartVO> fetchListByApartment(String apartment_name);

    List<ApartVO> fetchListByApartment2();

}
