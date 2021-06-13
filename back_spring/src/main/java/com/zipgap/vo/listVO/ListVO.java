package com.zipgap.vo.listVO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ListVO {

    int rownum;
    String serial_number;
    String apartment_name;
    String area_for_exclusive_use;
    String floor;
    int deal_amount;
    String road_name_bonbun;
    String road_name_bubun;
    String road_name_sigungu_code;
    String road_name_seq;
    String road_name_basement_code;
    String road_name;
    String deal_day;

}
