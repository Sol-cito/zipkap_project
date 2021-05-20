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


    public List<ApartVO> fetchListByApartment() {
        System.out.println(4);
        List<ApartVO> fetchList = listDao.fetchListByApartment();
        return fetchList;
    }

}
