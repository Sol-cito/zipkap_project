package com.zipgap.dao;

import com.zipgap.mapper.ListMapper;
import com.zipgap.vo.listVO.ListVO;
import com.zipgap.vo.listVO.ApartVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Repository
public class ListDao {

    @Autowired
    ListMapper listMapper;

    @GetMapping()
    public List<ListVO> fetchListByRecentDealDay() {
        List<ListVO> fetchList = listMapper.fetchListByRecentDealDay();
        return fetchList;
    }
    @GetMapping()
    public List<ListVO> fetchListByRecentDealDay2() {
        List<ListVO> fetchList = listMapper.fetchListByRecentDealDay2();
        return fetchList;
    }

    @GetMapping()
    public List<ListVO> fetchListByDealDay(String dealDay) {
        System.out.println(dealDay);
        System.out.println(3);
        List<ListVO> fetchList = listMapper.fetchListByDealDay(dealDay);
        return fetchList;
    }

    @GetMapping()
    public List<ApartVO> fetchListByApartment(String apartment_name) {
        List<ApartVO> fetchList = listMapper.fetchListByApartment(apartment_name);
        return fetchList;
    }

    @GetMapping()
    public List<ApartVO> fetchListByApartment2() {
        List<ApartVO> fetchList = listMapper.fetchListByApartment2();
        return fetchList;
    }
}
