package com.zipgap.service.listService;

import com.zipgap.vo.listVO.ListVO;
import com.zipgap.vo.listVO.ApartVO;

import java.util.List;

public interface IListService {
    List<ListVO> fetchListByRecentDealDay();

    List<ListVO> fetchListByRecentDealDay2();

    List<ListVO> fetchListByDealDay(String dealDay);

    List<ApartVO> fetchListByApartment(String apartment_name);

    List<ApartVO> fetchListByApartment2();

    //List<RecentVO> fetchListByDealAmount(String deal_amount_from, deal_amount_to);

}
