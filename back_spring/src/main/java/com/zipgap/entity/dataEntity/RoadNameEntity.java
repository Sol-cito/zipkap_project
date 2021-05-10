package com.zipgap.entity.dataEntity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table( name = "tb_road",
        uniqueConstraints={
        @UniqueConstraint(
                columnNames={"road_name_sigungu_code",
                        "road_name_code"}
                )
})
public class RoadNameEntity  implements Serializable {


    @Column(name = "road_name")
    private String roadName;

    @Column(name = "road_name_sigungu_code")
    private String roadNameSigunguCode;

    @Column(name = "road_name_code")
    private String roadNameCode;

    @Id
    @Column(name = "road_name_id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int roadNameId;


}
