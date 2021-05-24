package com.zipgap.entity.dataEntity;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@ToString
@Table(name = "tb_dong",
        uniqueConstraints={
        @UniqueConstraint(
                columnNames={"sigungu_code",
                        "eubmyundong_code"}
        )
})
public class DongEntity  implements Serializable {

    @Column(name = "dong")
    private String dong;

    @Column(name = "sigungu_code")
    private String sigunguCode;

    @Column(name = "eubmyundong_code")
    private String eubmyundongCode;

    @Column(name = "regional_code")
    private String regionalCode;

    @Id
    @Column(name = "dong_id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int dongId;
}
