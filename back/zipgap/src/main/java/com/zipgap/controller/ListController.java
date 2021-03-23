package com.zipgap.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zipgap.mapper.ListMapper;
import com.zipgap.vo.ListVO;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/lists")
public class ListController {

	@Autowired
	ListMapper listMapper;

	@GetMapping
	public List<ListVO> listList() {
		System.out.println(listMapper.selectList());
		System.out.println("리스트 출력 성공");
		return listMapper.selectList();
	}

	@GetMapping("/{sn}")
	public ListVO fetchListByID(@PathVariable int sn) {
		System.out.println(listMapper.fetchListByID(sn));
		ListVO fetchList = listMapper.fetchListByID(sn);
		return fetchList;
	}

}
