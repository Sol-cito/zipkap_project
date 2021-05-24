package com.zipgap.controller.listController;

import com.zipgap.service.listService.IListService;
import com.zipgap.vo.listVO.RecentVO;
import com.zipgap.vo.listVO.ApartVO;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/list")
public class ListController {

    Logger logger = LoggerFactory.getLogger(ListController.class);

    private final IListService listService;

    @RequestMapping("/recent")
    @ResponseBody
    public List<RecentVO> fetchListByRecentDealDay() {
        logger.debug("==========로깅 테스트==========");
        List<RecentVO> fetchList = listService.fetchListByRecentDealDay();
        return fetchList;
    }

    @RequestMapping("/recent2")
    @ResponseBody
    public List<RecentVO> fetchListByRecentDealDay2() {
        logger.debug("==========로깅 테스트==========");
        List<RecentVO> fetchList = listService.fetchListByRecentDealDay2();
        return fetchList;
    }

    @GetMapping("/{dealDay}")
    public List<RecentVO> fetchListByDealDay(@PathVariable String dealDay) {
        logger.debug("==========로깅 테스트==========");
        System.out.println(dealDay);
        System.out.println(1);
        List<RecentVO> fetchList = listService.fetchListByDealDay(dealDay);
        return fetchList;
    }

    @RequestMapping("/apart/{apartment_name}")
    @ResponseBody
    public List<ApartVO> fetchListByApartment(@PathVariable String apartment_name) {
        logger.debug("==========로깅 테스트==========");
        List<ApartVO> fetchList = listService.fetchListByApartment(apartment_name);
        return fetchList;
    }

    @RequestMapping("/apart/apartment_name")
    @ResponseBody
    public List<ApartVO> fetchListByApartment2() {
        logger.debug("==========로깅 테스트==========");
        List<ApartVO> fetchList = listService.fetchListByApartment2();
        return fetchList;
    }
}
