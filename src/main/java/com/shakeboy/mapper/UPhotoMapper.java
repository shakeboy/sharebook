package com.shakeboy.mapper;

import com.shakeboy.pojo.UPhoto;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface UPhotoMapper {
    List<UPhoto> selAllPhoto();
}
