package com.zipgap.dao;

import com.zipgap.mapper.ListMapper;
import com.zipgap.vo.listVO.RecentVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Repository
public class ListDao {

    @Autowired
    ListMapper listMapper;

    @GetMapping()
    public List<RecentVO> fetchListByRecentDealDay() {
        List<RecentVO> fetchList = listMapper.fetchListByRecentDealDay();
        return fetchList;
    }

    @GetMapping()
    public List<RecentVO> fetchListByDealDay(@PathVariable String dealDay) {
        List<RecentVO> fetchList = listMapper.fetchListByDealDay(dealDay);
        return fetchList;
    }

}
