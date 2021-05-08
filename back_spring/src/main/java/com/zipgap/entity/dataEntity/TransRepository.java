package com.zipgap.entity.dataEntity;

import com.zipgap.entity.userEntity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransRepository extends JpaRepository<TransEntity, TransPK> {
    public TransEntity findByPk(TransPK transPK);
}
