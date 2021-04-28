package com.shakeboy.pojo;

import org.springframework.stereotype.Component;

@Component
public class UVideo {
    private int uvideo_id;
    private String uvideo_name;
    private String uvideo_address;

    public UVideo() {
    }

    public UVideo(int uvideo_id, String uvideo_name, String uvideo_address) {
        this.uvideo_id = uvideo_id;
        this.uvideo_name = uvideo_name;
        this.uvideo_address = uvideo_address;
    }

    public int getUvideo_id() {
        return uvideo_id;
    }

    public void setUvideo_id(int uvideo_id) {
        this.uvideo_id = uvideo_id;
    }

    public String getUvideo_name() {
        return uvideo_name;
    }

    public void setUvideo_name(String uvideo_name) {
        this.uvideo_name = uvideo_name;
    }

    public String getUvideo_address() {
        return uvideo_address;
    }

    public void setUvideo_address(String uvideo_address) {
        this.uvideo_address = uvideo_address;
    }

    @Override
    public String toString() {
        return "UVideos{" +
                "uvideo_id=" + uvideo_id +
                ", uvideo_name='" + uvideo_name + '\'' +
                ", uvideo_address='" + uvideo_address + '\'' +
                '}';
    }
}
