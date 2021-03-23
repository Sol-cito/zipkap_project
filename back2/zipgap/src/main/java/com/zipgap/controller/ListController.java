package com.zipgap.controller;

import com.zipgap.service.ListService;
import com.zipgap.entity.ListEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("listTest")
public class ListController {
    // 기본형
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    ListService listService;

    // 모든 회원 조회
    @GetMapping(produces = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<List<ListEntity>> getAlllists() {
        List<ListEntity> list = listService.findAll();
        return new ResponseEntity<List<ListEntity>>(list, HttpStatus.OK);
    }

    // 회원번호로 한명의 회원 조회
    @GetMapping(value = "/{pid}", produces = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<ListEntity> getList(@PathVariable("pid") Long pid) {
        Optional<ListEntity> list = listService.findById(pid);
        return new ResponseEntity<ListEntity>(list.get(), HttpStatus.OK);
    }

//    // 회원번호로 회원 삭제
//    @DeleteMapping(value = "/{pid}", produces = { MediaType.APPLICATION_JSON_VALUE })
//    public ResponseEntity<Void> deleteList(@PathVariable("pid") Long pid) {
//        listService.deleteById(pid);
//        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
//    }
//
//    // 회원번호로 회원 수정(pid로 회원을 찾아 List 객체의 id, name로 수정함)
//    @PutMapping(value = "/{pid}", produces = { MediaType.APPLICATION_JSON_VALUE })
//    public ResponseEntity<ListEntity> updateList(@PathVariable("pid") Long pid, ListEntity list) {
//        listService.updateById(pid, list);
//        return new ResponseEntity<ListEntity>(list, HttpStatus.OK);
//    }
//
//    // 회원 입력
//    @PostMapping
//    public ResponseEntity<ListEntity> save(ListEntity list) {
//        return new ResponseEntity<ListEntity>(listService.save(list), HttpStatus.OK);
//    }
//
//    // 회원 입력
//    @RequestMapping(value="/saveList", method = RequestMethod.GET)
//    public ResponseEntity<ListEntity> save(HttpServletRequest req, ListEntity list){
//        return new ResponseEntity<ListEntity>(listService.save(list), HttpStatus.OK);
//    }

}
