package com.zipgap.dao;

import com.zipgap.mapper.ListMapper;
import com.zipgap.vo.listVO.RecentVO;
import com.zipgap.vo.listVO.ApartVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Repository
public class CartDao {

    @Autowired
    ListMapper listMapper;

    @GetMapping()
    public List<RecentVO> fetchListByRecentDealDay() {
        List<RecentVO> fetchList = listMapper.fetchListByRecentDealDay();
        return fetchList;
    }
    @GetMapping()
    public List<RecentVO> fetchListByRecentDealDay2() {
        List<RecentVO> fetchList = listMapper.fetchListByRecentDealDay2();
        return fetchList;
    }

    @GetMapping()
    public List<RecentVO> fetchListByDealDay(String dealDay) {
        System.out.println(dealDay);
        System.out.println(3);
        List<RecentVO> fetchList = listMapper.fetchListByDealDay(dealDay);
        return fetchList;
    }

}
