package com.zipgap.entity.postEntity;

import org.springframework.data.jpa.repository.JpaRepository;

/*
 * DAO 대신 이 Repository Interface를 사용하여 DB에 접근, 값을 CRUD 한다.
 * <Entity class, PK타입> 으로 생성.
 * Entity 클래스와 Interface는 같은 directory에 위치해야 함.
 * */
public interface PostRepository extends JpaRepository<Post, Integer> {
}
