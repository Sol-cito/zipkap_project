package com.zipgap.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class RawApiDTO {
    private int dealAmount;
    private String        buildYear;
    private String  dealDay;
    private String           roadName;
    private String  roadNameBonbun;
    private String           roadNameBubun;
    private String   roadNameSigunguCode;
    private String           roadNameSeq;
    private String  roadNameBasementCode;
    private String          roadNameCode;
    private String  dong;
    private String          bonbun;
    private String  bubun;
    private String           sigunguCode;
    private String   eubmyundongCode;
    private String           landCode;
    private String   apartmentName;
    private String          serialNumber;
    private double   areaForExclusiveUse;
    private String           jibun;
    private String   regionalCode;
    private int           floor;
    private String   cancelDealType;
    private String         cancelDealDay;
}
