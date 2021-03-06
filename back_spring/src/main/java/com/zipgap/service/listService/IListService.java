package com.zipgap.service.listService;

import com.zipgap.vo.listVO.RecentVO;

import java.util.List;

public interface IListService {
    List<RecentVO> fetchListByRecentDealDay();

    List<RecentVO> fetchListByDealDay(String dealDay);
}
