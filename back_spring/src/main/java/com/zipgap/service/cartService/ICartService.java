package com.zipgap.service.cartService;

import com.zipgap.vo.listVO.ApartVO;
import com.zipgap.vo.listVO.RecentVO;

import java.util.List;

public interface ICartService {
    List<RecentVO> fetchListByRecentDealDay();

    List<RecentVO> fetchListByRecentDealDay2();

    List<RecentVO> fetchListByDealDay(String dealDay);

    List<ApartVO> fetchListByApartment(String apartment_name);

    List<ApartVO> fetchListByApartment2();

    //List<RecentVO> fetchListByDealAmount(String deal_amount_from, deal_amount_to);

}
