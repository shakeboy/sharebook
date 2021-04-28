package com.shakeboy.pojo;

import org.springframework.stereotype.Repository;

@Repository
public class UArticle {
    private int uarticle_id;
    private String uarticle_name;
    private String uarticle_content;
    private int deleted;

    public UArticle() {
    }

    public UArticle(int uarticle_id, String uarticle_name, String uarticle_content, int deleted) {
        this.uarticle_id = uarticle_id;
        this.uarticle_name = uarticle_name;
        this.uarticle_content = uarticle_content;
        this.deleted = deleted;
    }

    @Override
    public String toString() {
        return "UArticle{" +
                "uarticle_id=" + uarticle_id +
                ", uarticle_name='" + uarticle_name + '\'' +
                ", uarticle_content='" + uarticle_content + '\'' +
                ", deleted=" + deleted +
                '}';
    }

    public int getUarticle_id() {
        return uarticle_id;
    }

    public void setUarticle_id(int uarticle_id) {
        this.uarticle_id = uarticle_id;
    }

    public String getUarticle_name() {
        return uarticle_name;
    }

    public void setUarticle_name(String uarticle_name) {
        this.uarticle_name = uarticle_name;
    }

    public String getUarticle_content() {
        return uarticle_content;
    }

    public void setUarticle_content(String uarticle_content) {
        this.uarticle_content = uarticle_content;
    }

    public int getDeleted() {
        return deleted;
    }

    public void setDeleted(int deleted) {
        this.deleted = deleted;
    }
}
