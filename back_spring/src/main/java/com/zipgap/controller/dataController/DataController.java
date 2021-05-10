package com.zipgap.controller.dataController;

import com.zipgap.dto.data.RawApiDTO;
import com.zipgap.entity.dataEntity.AptEntity;
import com.zipgap.service.dataService.DataService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Controller
public class DataController {

    @Autowired
    private DataService dataService;

    @Autowired
    private ModelMapper modelMapper;

    @PostMapping(value = "/api/data/update")
    @ResponseBody
    @Transactional
    public String dataUpdate(@RequestBody List<RawApiDTO> rawApiDTOList) {
        int updated = 0;
        for (RawApiDTO rawApiDTO : rawApiDTOList){
            //System.out.println(rawApiDTO);
            updated += dataService.insertTransIfNotExist(rawApiDTO);
        }
        return updated + "/" + rawApiDTOList.size() + " rows updated";
    }

    @PostMapping(value = "/api/data/test")
    @ResponseBody
    public String checkRoadDup(@RequestBody RawApiDTO rawApiDTO) {
        int updated = 0;
        int a = dataService.getAptIdByUniqueKey(rawApiDTO);

        return a + " /";
    }
}
