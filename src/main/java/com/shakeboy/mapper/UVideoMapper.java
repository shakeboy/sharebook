package com.shakeboy.mapper;

import com.shakeboy.pojo.UVideo;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UVideoMapper {
    List<UVideo> getAllVideo();
}
