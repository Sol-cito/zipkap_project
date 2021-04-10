package com.zipgap.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zipgap.mapper.ListMapper;
import com.zipgap.vo.ListVO;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/lists")
public class ListController {

    @Autowired
    ListMapper listMapper;

    @GetMapping("/{dealDay}")
    public List<ListVO> fetchListByDealDay(@PathVariable String dealDay) {
        List<ListVO> fetchList = listMapper.fetchListByDealDay(dealDay);
        return fetchList;
    }

    //계약일 기준 최신순으로 실거래 조회
    @GetMapping()
    public List<ListVO> fetchListByRecentDealDay() {
        List<ListVO> fetchList = listMapper.fetchListByRecentDealDay();
        return fetchList;
    }

}
