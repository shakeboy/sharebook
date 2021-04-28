package com.shakeboy.controller;

import com.shakeboy.pojo.UPhoto;
import com.shakeboy.service.UPhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/uphoto")
public class UPhotoController {
    @Autowired
    private UPhotoService uphotoService;

    // 查询所有图片
    @RequestMapping("/getAllPhoto")
    @ResponseBody
    public List<UPhoto> getAllPhoto() {
        return uphotoService.getAllPhoto();
    }

    // 图片管理
    @RequestMapping("/photo")
    public String photo() {
        return "photo/photo";
    }
}
