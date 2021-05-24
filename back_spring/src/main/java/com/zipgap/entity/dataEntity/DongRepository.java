package com.zipgap.entity.dataEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DongRepository extends JpaRepository<DongEntity, Integer> {
    Optional<DongEntity> findFirstBySigunguCodeAndEubmyundongCode(String sggCd, String emdCd);

}
