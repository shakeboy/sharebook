package com.shakeboy.service;

import com.shakeboy.mapper.BookMapper;
import com.shakeboy.pojo.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    @Autowired
    private BookMapper bookMapper;

    // 获取书库所有书籍
    public List<Book> getAllBook() {
        return bookMapper.getAllBook();
    }
}
