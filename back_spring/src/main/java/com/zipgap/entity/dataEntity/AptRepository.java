package com.zipgap.entity.dataEntity;

import com.zipgap.vo.data.AptVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AptRepository extends JpaRepository<AptEntity, Integer> {
    Optional<AptEntity> findFirstBySerialNumberAndAreaForExclusiveUse(String sn, double area);

}
