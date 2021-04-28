package com.shakeboy.service;

import com.shakeboy.mapper.UPhotoMapper;
import com.shakeboy.pojo.UPhoto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UPhotoService {
    @Autowired
    private UPhotoMapper uPhotoMapper;

    // 查询所有图片
    public List<UPhoto> getAllPhoto() {
        return uPhotoMapper.selAllPhoto();
    }
}
