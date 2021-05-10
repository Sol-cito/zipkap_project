package com.zipgap.entity.dataEntity;


import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@ToString
@Table(name = "tb_apt",
        uniqueConstraints={
        @UniqueConstraint(
                columnNames={"area_for_exclusive_use",
                        "serial_number"}
        )
})
public class AptEntity implements Serializable {


    @Column(name = "serial_number")
    private String serialNumber;

    @Column(name = "apartment_name")
    private String apartmentName;

    @Column(name = "build_year")
    private String buildYear;

    @Column(name = "area_for_exclusive_use")
    private int areaForExclusiveUse;

    @Id
    @Column(name = "apt_id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int aptId;

}