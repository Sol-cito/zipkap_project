package com.zipgap.service.dataService;


import com.zipgap.dto.data.RawApiDTO;
import com.zipgap.dto.data.TransDataDTO;
import com.zipgap.entity.dataEntity.*;
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
    private final RoadNameRepository roadNameRepository;
    private final TransRepository transRepository;

    public int getRoadNameIdByUniqueKey(RawApiDTO rawApiDTO){
        Optional<RoadNameEntity> roadNameEntity;
        roadNameEntity = roadNameRepository.findFirstByRoadNameCodeAndRoadNameSigunguCode(
                rawApiDTO.getRoadNameCode(),
                rawApiDTO.getRoadNameSigunguCode()
        );
        return roadNameEntity.isPresent() ? roadNameEntity.get().getRoadNameId() : 0;
    }

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
        //System.out.println("getAptIdByUniqueKey");
        //System.out.println(rawApiDTO);
        aptEntity = aptRepository.findFirstBySerialNumberAndAreaForExclusiveUse(
                rawApiDTO.getSerialNumber(),
                rawApiDTO.getAreaForExclusiveUse()
        );
        //System.out.println(aptEntity.isPresent() ? aptEntity.get() : " not present");
        return aptEntity.isPresent() ? aptEntity.get().getAptId() : 0;
    }

    public int insertRoadIfNotExist(RawApiDTO rawApiDTO){
        //System.out.println("=============insertRoadIfNotExist");
        int roadId = getRoadNameIdByUniqueKey(rawApiDTO);
        if (roadId == 0){
            RoadNameEntity roadNameEntity = mapper.map(rawApiDTO,RoadNameEntity.class);
            //System.out.println(roadNameEntity);
            roadNameRepository.save(roadNameEntity);
            return roadNameEntity.getRoadNameId();
        }else{
            return roadId;
        }
    }

    public int insertAptIfNotExist(RawApiDTO rawApiDTO){
        //System.out.println("insertAptIfNotExist");
        int aptId = getAptIdByUniqueKey(rawApiDTO);
        if (aptId == 0){

            AptEntity aptEntity = mapper.map(rawApiDTO,AptEntity.class);
            //System.out.println(rawApiDTO);
            //System.out.println(aptEntity);
            aptRepository.save(aptEntity);
            return aptEntity.getAptId();
        }else{
            return aptId;
        }
    }

    public int insertDongIfNotExist(RawApiDTO rawApiDTO){
        //System.out.println("insertDongIfNotExist");
        int dongId = getDongIdByUniqueKey(rawApiDTO);
        if (dongId == 0){
            //System.out.println(rawApiDTO);
            DongEntity dongEntity = mapper.map(rawApiDTO,DongEntity.class);

            //System.out.println(dongEntity);
            dongRepository.save(dongEntity);
            return dongEntity.getDongId();
        }else{
            return dongId;
        }
    }

    public int insertTransIfNotExist(RawApiDTO rawApiDTO){

        int dongId = insertDongIfNotExist(rawApiDTO);
        //System.out.println(dongId);
        int aptId = insertAptIfNotExist(rawApiDTO);
        //System.out.println(aptId);
        int roadId = insertRoadIfNotExist(rawApiDTO);
        //System.out.println(roadId);
        TransDataDTO transDataDTO = mapper.map(rawApiDTO,TransDataDTO.class);

        transDataDTO.setDongId(dongId);
        transDataDTO.setAptId(aptId);
        transDataDTO.setRoadNameId(roadId);

        TransPK pk = mapper.map(transDataDTO,TransPK.class);

        Optional<TransEntity> transEntity = transRepository.findByPk(pk);

        if (transEntity.isPresent()){
            return 0;
        }else{
            transRepository.save(
                    new TransEntity(
                            pk,
                            rawApiDTO.getCancelDealType(),
                            rawApiDTO.getCancelDealDay()
                    )
            );
            return 1;
        }



    }

}
