package com.zipgap.entity.dataEntity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
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
    private double areaForExclusiveUse;

    @Id
    @Column(name = "apt_id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int aptId;

}