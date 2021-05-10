package com.zipgap.dto.data;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@AllArgsConstructor
@NoArgsConstructor
public class TransDataDTO {


    private int aptId;

    private int dealAmount;

    private String dealDay;

    private int dongId;

    private int floor;

    private int roadNameId;

    private String cancelDealType;

    private String cancelDealDay;
}
