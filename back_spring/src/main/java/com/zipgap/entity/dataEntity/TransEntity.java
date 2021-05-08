package com.zipgap.entity.dataEntity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_trans")
public class TransEntity  implements Serializable {

    @EmbeddedId
    private TransPK pk;
    //tb_transaction


    @Column(name = "cancel_deal_type")
    private String cancelDealType;

    @Column(name = "cancel_deal_day")
    private String cancelDealDay;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "apt_id" ,insertable = false, updatable = false)
    private AptEntity aptEntity;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dong_id",insertable = false, updatable = false)
    private DongEntity dongEntity ;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "road_name_id",insertable = false, updatable = false)
    private RoadNameEntity roadNameEntity;

}