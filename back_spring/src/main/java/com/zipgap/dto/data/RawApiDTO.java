package com.zipgap.dto.data;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
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
    private int   areaForExclusiveUse;
    private String           jibun;
    private String   regionalCode;
    private int           floor;
    private String   cancelDealType;
    private String         cancelDealDay;
}
