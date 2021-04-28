package com.shakeboy.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.shakeboy.pojo.Admin;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminMapper extends BaseMapper<Admin> {
    Admin SelByName(String a_name);
}
