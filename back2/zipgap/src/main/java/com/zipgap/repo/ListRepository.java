package com.zipgap.repo;

import com.zipgap.entity.ListEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ListRepository extends JpaRepository<ListEntity, Long> {
	//�⺻�� �ڵ� ����
	
	public List<ListEntity> findById(String id);
	
	public List<ListEntity> findByAPTName(String name);

}
