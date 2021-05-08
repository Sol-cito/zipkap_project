package com.zipgap.service.dataService;


import com.zipgap.dto.RawApiDTO;
import com.zipgap.entity.dataEntity.*;
import com.zipgap.vo.data.AptVO;
import com.zipgap.vo.data.DongVO;
import com.zipgap.vo.data.TransVO;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class DataService {

    private final ModelMapper mapper;
    private final AptRepository aptRepository;
    private final DongRepository dongRepository;

    public int getDongIdByUniqueKey(RawApiDTO rawApiDTO){
        Optional<DongEntity> dongEntity;
        dongEntity = dongRepository.findFirstBySigunguCodeAndEubmyundongCode(
                rawApiDTO.getSigunguCode(),
                rawApiDTO.getEubmyundongCode()
        );
        return dongEntity.isPresent() ? dongEntity.get().getDongId() : 0;
    }

    public int getAptIdByUniqueKey(RawApiDTO rawApiDTO){
        Optional<AptEntity> aptEntity;

        aptEntity = aptRepository.findFirstBySerialNumberAndAreaForExclusiveUse(
                rawApiDTO.getSerialNumber(),
                rawApiDTO.getAreaForExclusiveUse()
        );
        return aptEntity.isPresent() ? aptEntity.get().getAptId() : 0;
    }

    public int insertAptIfNotExist(RawApiDTO rawApiDTO){
        int aptId = getAptIdByUniqueKey(rawApiDTO);
        if (aptId == 0){
            AptEntity aptEntity = mapper.map(rawApiDTO,AptEntity.class);
            aptRepository.save(aptEntity);
            return aptEntity.getAptId();
        }else{
            return aptId;
        }
    }

    public int insertDongIfNotExist(RawApiDTO rawApiDTO){
        int dongId = getDongIdByUniqueKey(rawApiDTO);
        if (dongId == 0){
            DongEntity dongEntity = mapper.map(rawApiDTO,DongEntity.class);
            dongRepository.save(dongEntity);
            return dongEntity.getDongId();
        }else{
            return dongId;
        }
    }

    public void checkTransExists(RawApiDTO rawApiDTO){
        int dongId = getDongIdByUniqueKey(rawApiDTO);


        TransPK pk = mapper.map(rawApiDTO,TransPK.class);
    }

}
