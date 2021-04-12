package com.zipgap.controller.listController;

import com.zipgap.service.listService.IListService;
import com.zipgap.vo.listVO.RecentVO;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RequiredArgsConstructor
@Controller
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

}
