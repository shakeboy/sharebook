package com.shakeboy.service;

import com.shakeboy.pojo.UVideo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UVideoService {
    @Autowired
    private UVideoService uvideoService;

    // 获取所有视频信息
    public List<UVideo> getAllVideo() {
        return uvideoService.getAllVideo();
    }
}
