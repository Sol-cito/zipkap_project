package com.zipgap.service.listService;

import com.zipgap.dao.ListDao;
import com.zipgap.vo.listVO.RecentVO;
import com.zipgap.vo.listVO.ApartVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
@Transactional
public class ListService implements IListService {

    private final ListDao listDao;

    public List<RecentVO> fetchListByRecentDealDay() {
        List<RecentVO> fetchList = listDao.fetchListByRecentDealDay();
        return fetchList;
    }

    public List<RecentVO> fetchListByRecentDealDay2() {
        List<RecentVO> fetchList = listDao.fetchListByRecentDealDay2();
        return fetchList;
    }

    public List<RecentVO> fetchListByDealDay(String dealDay) {
        System.out.println(dealDay);
        System.out.println(2);
        List<RecentVO> fetchList = listDao.fetchListByDealDay(dealDay);
        return fetchList;
    }

    public List<ApartVO> fetchListByApartment(String apartment_name) {
        System.out.println(4);
        List<ApartVO> fetchList = listDao.fetchListByApartment(apartment_name);
        return fetchList;
    }

    public List<ApartVO> fetchListByApartment2() {
        System.out.println(5);
        List<ApartVO> fetchList = listDao.fetchListByApartment2();
        return fetchList;
    }

//    public List<RecentVO> fetchListByDealAmount(String deal_amount_from, String deal_amount_to) {
//        System.out.println(deal_amount_from+" "+ deal_amount_to);
//        System.out.println(6);
//        List<RecentVO> fetchList = listDao.fetchListByDealAmount(deal_amount_from, deal_amount_to);
//        return fetchList;
//    }

}
