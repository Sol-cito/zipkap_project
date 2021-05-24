package com.zipgap.entity.dataEntity;


import lombok.*;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_transaction")
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


    @Builder
    public TransEntity(int aptId,
                       int dealAmount,
                       String dealDay,
                       int dongId,
                       int floor,
                       int roadNameId,
                       String cancelDealType,
                       String cancelDealDay) {

        this.cancelDealType = cancelDealType;
        this.cancelDealDay = cancelDealDay;
        this.pk = new TransPK( aptId,  dealAmount,  dealDay,  dongId,  floor,  roadNameId);

    }

    @Builder
    public TransEntity(TransPK pk,
                       String cancelDealType,
                       String cancelDealDay) {

        this.cancelDealType = cancelDealType;
        this.cancelDealDay = cancelDealDay;
        this.pk = pk;

    }



}