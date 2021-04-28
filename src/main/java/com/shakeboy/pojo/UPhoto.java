package com.shakeboy.pojo;

import org.springframework.stereotype.Repository;

@Repository
public class UPhoto {
    private int uphoto_id;
    private String uphoto_name;
    private String uphoto_address;

    @Override
    public String toString() {
        return "UPhoto{" +
                "uphoto_id=" + uphoto_id +
                ", uphoto_name='" + uphoto_name + '\'' +
                ", uphoto_address='" + uphoto_address + '\'' +
                '}';
    }

    public int getUphoto_id() {
        return uphoto_id;
    }

    public void setUphoto_id(int uphoto_id) {
        this.uphoto_id = uphoto_id;
    }

    public String getUphoto_name() {
        return uphoto_name;
    }

    public void setUphoto_name(String uphoto_name) {
        this.uphoto_name = uphoto_name;
    }

    public String getUphoto_address() {
        return uphoto_address;
    }

    public void setUphoto_address(String uphoto_address) {
        this.uphoto_address = uphoto_address;
    }

    public UPhoto(int uphoto_id, String uphoto_name, String uphoto_address) {
        this.uphoto_id = uphoto_id;
        this.uphoto_name = uphoto_name;
        this.uphoto_address = uphoto_address;
    }

    public UPhoto() {
    }
}
