package com.shakeboy.service;

import com.shakeboy.mapper.UBookMapper;
import com.shakeboy.pojo.UBook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UBookService {

    @Autowired
    private UBookMapper uBookMapper;

    // 查询所有书籍
    public List<UBook> getAllBook() {
        return uBookMapper.getAllUBook();
    }
}
