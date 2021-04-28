package com.shakeboy.pojo;

import org.springframework.stereotype.Component;

@Component
public class UBook {
    private int ubook_id;
    private String ubook_name;
    private String ubook_description;
    private String ubook_image;
    private String ubook_content;
    private int ubook_good;
    private int ubook_comment;
    private int ubook_transfer;

    public UBook() {
    }

    public UBook(int ubook_id, String ubook_name, String ubook_description, String ubook_image, String ubook_content, int ubook_good, int ubook_comment, int ubook_transfer) {
        this.ubook_id = ubook_id;
        this.ubook_name = ubook_name;
        this.ubook_description = ubook_description;
        this.ubook_image = ubook_image;
        this.ubook_content = ubook_content;
        this.ubook_good = ubook_good;
        this.ubook_comment = ubook_comment;
        this.ubook_transfer = ubook_transfer;
    }

    @Override
    public String toString() {
        return "UBook{" +
                "ubook_id=" + ubook_id +
                ", ubook_name='" + ubook_name + '\'' +
                ", ubook_description='" + ubook_description + '\'' +
                ", ubook_image='" + ubook_image + '\'' +
                ", ubook_content='" + ubook_content + '\'' +
                ", ubook_good=" + ubook_good +
                ", ubook_comment=" + ubook_comment +
                ", ubook_transfer=" + ubook_transfer +
                '}';
    }

    public int getUbook_id() {
        return ubook_id;
    }

    public void setUbook_id(int ubook_id) {
        this.ubook_id = ubook_id;
    }

    public String getUbook_name() {
        return ubook_name;
    }

    public void setUbook_name(String ubook_name) {
        this.ubook_name = ubook_name;
    }

    public String getUbook_description() {
        return ubook_description;
    }

    public void setUbook_description(String ubook_description) {
        this.ubook_description = ubook_description;
    }

    public String getUbook_image() {
        return ubook_image;
    }

    public void setUbook_image(String ubook_image) {
        this.ubook_image = ubook_image;
    }

    public String getUbook_content() {
        return ubook_content;
    }

    public void setUbook_content(String ubook_content) {
        this.ubook_content = ubook_content;
    }

    public int getUbook_good() {
        return ubook_good;
    }

    public void setUbook_good(int ubook_good) {
        this.ubook_good = ubook_good;
    }

    public int getUbook_comment() {
        return ubook_comment;
    }

    public void setUbook_comment(int ubook_comment) {
        this.ubook_comment = ubook_comment;
    }

    public int getUbook_transfer() {
        return ubook_transfer;
    }

    public void setUbook_transfer(int ubook_transfer) {
        this.ubook_transfer = ubook_transfer;
    }
}
