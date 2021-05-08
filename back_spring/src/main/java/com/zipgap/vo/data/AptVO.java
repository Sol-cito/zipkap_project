package com.zipgap.vo.data;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AptVO {

    private String serialNumber;
    private String apartmentName;
    private String buildYear;
    private double areaForExclusiveUse;
    private int aptId;

}
