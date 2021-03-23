package com.zipgap.service;

import com.zipgap.repo.ListRepository;
import com.zipgap.entity.ListEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ListService {
    @Autowired
    private ListRepository listRepository;

    public List<ListEntity> findAll() {
        List<ListEntity> lists = new ArrayList<>();
        listRepository.findAll().forEach(e -> lists.add(e));
        return lists;
    }

    public Optional<ListEntity> findById(Long pid) {
        Optional<ListEntity> list = listRepository.findById(pid);
        return list;
    }

//    public void deleteById(Long pid) {
//        listRepository.deleteById(pid);
//    }
//
//    public ListEntity save(ListEntity list) {
//        listRepository.save(list);
//        return list;
//    }
//
//    public void updateById(Long pid, ListEntity member) {
//        Optional<ListEntity> e = listRepository.findById(pid);
//
//        if (e.isPresent()) {
//            e.get().setMbrNo(list.getMbrNo());
//            e.get().setId(list.getId());
//            e.get().setName(list.getName());
//            listRepository.save(list);
//        }
//    }
    
}
