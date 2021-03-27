package com.zipgap.vo;

import lombok.Data;

@Data
public class ListVO { // 나중에 정제된 테이블에서 정제된 명칭으로 매칭
    //혹시 모르니까 쪼개진 상태로 전체 전달~

    String serial_number;
    String apartment_name;
    String area_for_exclusive_use;
    String floor;
    int deal_amount;
    String road_name_bonbun; // 이후 주소로 변환되어야 함
    String road_name_bubun;
    String road_name_sigungu_code;
    String road_name_seq;
    String road_name_basement_code;
    String road_name;
    String deal_day;

}
