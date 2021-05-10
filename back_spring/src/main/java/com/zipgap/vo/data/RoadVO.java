package com.zipgap.vo.data;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RoadVO {

    private String roadName;

    private String roadNameSigunguCode;

    private String roadNameCode;

    private int roadNameId;
}
