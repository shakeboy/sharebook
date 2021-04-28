package com.shakeboy.controller;

import com.shakeboy.service.UVideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/uvideo")
public class UVideoController {
    @Autowired
    private UVideoService uVideoService;

    // 获取所有视频
    @ResponseBody
    @RequestMapping("/getAllVideo")
    public String getAllVideo() {
        return uVideoService.getAllVideo().toString();
    }

    // 视频管理界面
    @RequestMapping("/video")
    public String video() {
        return "video/video";
    }
}
