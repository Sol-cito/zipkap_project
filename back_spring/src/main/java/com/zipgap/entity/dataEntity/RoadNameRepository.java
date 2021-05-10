package com.zipgap.entity.dataEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoadNameRepository extends JpaRepository<RoadNameEntity, Integer> {
    Optional<RoadNameEntity> findFirstByRoadNameCodeAndRoadNameSigunguCode (String rnCd, String rnSggCd);

}
