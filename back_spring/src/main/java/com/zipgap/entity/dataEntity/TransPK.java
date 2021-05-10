package com.zipgap.entity.dataEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@Embeddable
@AllArgsConstructor
@NoArgsConstructor
public class TransPK implements Serializable {
    @Column(name="apt_id", nullable = false)
    private int aptId;

    @Column(name="deal_amount", nullable = false)
    private int dealAmount;

    @Column(name="deal_day", nullable = false)
    private String dealDay;

    @Column(name="dong_id", nullable = false)
    private int dongId;

    @Column(name="floor", nullable = false)
    private int floor;

    @Column(name="road_name_id", nullable = false)
    private int roadNameId;


}
