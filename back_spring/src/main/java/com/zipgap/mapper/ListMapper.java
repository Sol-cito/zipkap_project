package com.zipgap.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.zipgap.vo.ListVO;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface ListMapper {

    List<ListVO> selectList();

    List<ListVO> fetchListByID(String dealDay);

}
