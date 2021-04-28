package com.shakeboy.pojo;

import org.springframework.stereotype.Repository;

@Repository
public class Admin {
    private String a_name;
    private String a_password;
    private String a_role;

    public String getA_name() {
        return a_name;
    }

    public void setA_name(String a_name) {
        this.a_name = a_name;
    }

    public String getA_password() {
        return a_password;
    }

    public void setA_password(String a_password) {
        this.a_password = a_password;
    }

    public String getA_role() {
        return a_role;
    }

    public void setA_role(String a_role) {
        this.a_role = a_role;
    }
}
