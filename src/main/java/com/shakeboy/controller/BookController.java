package com.shakeboy.controller;

import com.alibaba.fastjson.JSON;
import com.shakeboy.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/book")
public class BookController {

    @Autowired
    private BookService bookService;

    @RequestMapping("/book")
    public String book() {
        return "book/book";
    }

    // 获取所有书库信息
    @RequestMapping("/getAllBook")
    @ResponseBody
    public String getAllBook() {
        return JSON.toJSONString(bookService.getAllBook());
    }
}
