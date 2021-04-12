package com.zipgap.mapper;

import com.zipgap.vo.listVO.RecentVO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface ListMapper {

    List<RecentVO> fetchListByDealDay(String dealDay);

    List<RecentVO> fetchListByRecentDealDay();

}
