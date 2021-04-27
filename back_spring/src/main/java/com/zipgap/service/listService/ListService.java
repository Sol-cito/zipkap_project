package com.zipgap.service.listService;

import com.zipgap.dao.ListDao;
import com.zipgap.vo.listVO.RecentVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
@Transactional
public class ListService implements IListService {

    private final ListDao listDao;

    @Override
    public List<RecentVO> fetchListByRecentDealDay() {
        List<RecentVO> fetchList = listDao.fetchListByRecentDealDay();
        return fetchList;
    }

    @Override
    public List<RecentVO> fetchListByDealDay(String dealDay) {
        List<RecentVO> fetchList = listDao.fetchListByDealDay(dealDay);
        return fetchList;
    }

}
