package com.zipgap;

import org.junit.jupiter.api.Test;

import com.zipgap.entity.ListEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ListTest {

    @Test
    public void getApartment_name(){
        final ListEntity listEntity = ListEntity.builder()
                .apartment_name("²Þ¿¡±×¸°")
                .deal_amount(1200)
                .serial_number("11000")
                .build();
        final String apartment_name = listEntity.getApartment_name();
        assertEquals("²Þ¿¡±×¸°", apartment_name);
    }
}
