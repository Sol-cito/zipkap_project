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
    // �⺻��
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    ListService listService;

    // ��� ȸ�� ��ȸ
    @GetMapping(produces = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<List<ListEntity>> getAlllists() {
        List<ListEntity> list = listService.findAll();
        return new ResponseEntity<List<ListEntity>>(list, HttpStatus.OK);
    }

    // ȸ����ȣ�� �Ѹ��� ȸ�� ��ȸ
    @GetMapping(value = "/{pid}", produces = { MediaType.APPLICATION_JSON_VALUE })
    public ResponseEntity<ListEntity> getList(@PathVariable("pid") Long pid) {
        Optional<ListEntity> list = listService.findById(pid);
        return new ResponseEntity<ListEntity>(list.get(), HttpStatus.OK);
    }

//    // ȸ����ȣ�� ȸ�� ����
//    @DeleteMapping(value = "/{pid}", produces = { MediaType.APPLICATION_JSON_VALUE })
//    public ResponseEntity<Void> deleteList(@PathVariable("pid") Long pid) {
//        listService.deleteById(pid);
//        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
//    }
//
//    // ȸ����ȣ�� ȸ�� ����(pid�� ȸ���� ã�� List ��ü�� id, name�� ������)
//    @PutMapping(value = "/{pid}", produces = { MediaType.APPLICATION_JSON_VALUE })
//    public ResponseEntity<ListEntity> updateList(@PathVariable("pid") Long pid, ListEntity list) {
//        listService.updateById(pid, list);
//        return new ResponseEntity<ListEntity>(list, HttpStatus.OK);
//    }
//
//    // ȸ�� �Է�
//    @PostMapping
//    public ResponseEntity<ListEntity> save(ListEntity list) {
//        return new ResponseEntity<ListEntity>(listService.save(list), HttpStatus.OK);
//    }
//
//    // ȸ�� �Է�
//    @RequestMapping(value="/saveList", method = RequestMethod.GET)
//    public ResponseEntity<ListEntity> save(HttpServletRequest req, ListEntity list){
//        return new ResponseEntity<ListEntity>(listService.save(list), HttpStatus.OK);
//    }

}
