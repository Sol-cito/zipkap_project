package com.zipgap.vo.data;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TransVO {

    private int aptId;
    private int dealAmount;
    private String dealDay;
    private int dongId;
    private int floor;
    private int roadNameId;
    private String cancelDealType;
    private String cancelDealDay;

}
