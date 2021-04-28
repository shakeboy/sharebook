package com.shakeboy.controller;

import com.shakeboy.service.UBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/ubook")
public class UBookController {
    @Autowired
    private UBookService uBookService;

    //获取所有书籍
    @ResponseBody
    @RequestMapping("/getAllBook")
    public String getAllBook() {
        return uBookService.getAllBook().toString();
    }
}
