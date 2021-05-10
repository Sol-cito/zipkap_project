package com.zipgap.entity.dataEntity;

import com.zipgap.entity.userEntity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TransRepository extends JpaRepository<TransEntity, TransPK> {
    public Optional<TransEntity> findByPk(TransPK transPK);
}
