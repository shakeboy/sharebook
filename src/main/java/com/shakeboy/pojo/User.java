package com.shakeboy.pojo;

import org.springframework.stereotype.Component;

@Component
public class User {
    private int user_id;
    private String user_account;
    private String user_password;
    private String user_signature;
    private String user_avator;
    private String user_name;
    private String user_role;

    public User() {
    }

    public User(int user_id, String user_account, String user_password, String user_signature, String user_avator, String user_name, String user_role) {
        this.user_id = user_id;
        this.user_account = user_account;
        this.user_password = user_password;
        this.user_signature = user_signature;
        this.user_avator = user_avator;
        this.user_name = user_name;
        this.user_role = user_role;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getUser_account() {
        return user_account;
    }

    public void setUser_account(String user_account) {
        this.user_account = user_account;
    }

    public String getUser_password() {
        return user_password;
    }

    public void setUser_password(String user_password) {
        this.user_password = user_password;
    }

    public String getUser_signature() {
        return user_signature;
    }

    public void setUser_signature(String user_signature) {
        this.user_signature = user_signature;
    }

    public String getUser_avator() {
        return user_avator;
    }

    public void setUser_avator(String user_avator) {
        this.user_avator = user_avator;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getUser_role() {
        return user_role;
    }

    public User(String user_account, String user_password, String user_signature, String user_avator, String user_name, String user_role) {
        this.user_account = user_account;
        this.user_password = user_password;
        this.user_signature = user_signature;
        this.user_avator = user_avator;
        this.user_name = user_name;
        this.user_role = user_role;
    }

    public void setUser_role(String user_role) {
        this.user_role = user_role;
    }

    @Override
    public String toString() {
        return "User{" +
                "user_id=" + user_id +
                ", user_account='" + user_account + '\'' +
                ", user_password='" + user_password + '\'' +
                ", user_signature='" + user_signature + '\'' +
                ", user_avator='" + user_avator + '\'' +
                ", user_name='" + user_name + '\'' +
                ", user_role='" + user_role + '\'' +
                '}';
    }
}
