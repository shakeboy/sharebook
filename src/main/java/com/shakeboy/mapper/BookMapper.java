package com.shakeboy.mapper;

import com.shakeboy.pojo.Book;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookMapper {
    List<Book> getAllBook();
}
