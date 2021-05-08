package com.zipgap.controller.dataController;

import com.zipgap.dto.RawApiDTO;
import com.zipgap.service.dataService.DataService;
import com.zipgap.vo.data.AptVO;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class DataController {

    @Autowired
    private DataService dataService;

    @Autowired
    private ModelMapper modelMapper;

    @PostMapping(value = "/api/data/update")
    @ResponseBody
    public String dataUpdate(@RequestBody List<RawApiDTO> rawApiDTOList) {



        return "";
    }

}
