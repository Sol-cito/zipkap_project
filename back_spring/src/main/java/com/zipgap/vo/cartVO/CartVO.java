package com.zipgap.vo.cartVO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CartVO {

    String addDate;
    String cart_email;
    String cart_serial_number;
    int cart_floor;
    String cart_apartment_name;
    String cart_deal_day;

}
