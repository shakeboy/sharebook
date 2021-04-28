package com.shakeboy.mapper;

import com.shakeboy.pojo.UBook;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UBookMapper {
    List<UBook> getAllUBook();
}
