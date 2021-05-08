package com.zipgap.vo.data;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DongVO {

    private String dong;

    private String sigunguCode;

    private String eubmyundongCode;

    private double regionalCode;

    private int dongId;
}
