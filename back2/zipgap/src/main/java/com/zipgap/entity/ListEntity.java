package com.zipgap.entity;

import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity(name = "tb_api00")
public class ListEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long pid;
	
	@Id
	@Column(nullable = false, unique = true, length = 30)
	private String serial_number;
	
	@Column(nullable = false, length = 100)
	private int deal_amount;
	

	@Column(nullable = false, length = 50)
	private String apartment_name;

	@Builder
	public ListEntity(String serial_number, int deal_amount, String apartment_name) {
		this.serial_number = serial_number;
		this.deal_amount = deal_amount;
		this.apartment_name = apartment_name;
	}

}
