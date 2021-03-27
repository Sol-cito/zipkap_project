package com.zipgap.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.zipgap.vo.ListVO;

@Mapper
public interface ListMapper {

    List<ListVO> selectList();

    List<ListVO> fetchListByID(String dealDay);

}
