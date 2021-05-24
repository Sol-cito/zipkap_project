package com.zipgap.service.listService;

import com.zipgap.vo.listVO.RecentVO;
import com.zipgap.vo.listVO.ApartVO;

import java.util.List;

public interface IListService {
    List<RecentVO> fetchListByRecentDealDay();

    List<RecentVO> fetchListByRecentDealDay2();

    List<RecentVO> fetchListByDealDay(String dealDay);

    List<ApartVO> fetchListByApartment(String apartment_name);

    List<ApartVO> fetchListByApartment2();

    //List<RecentVO> fetchListByDealAmount(String deal_amount_from, deal_amount_to);

}
