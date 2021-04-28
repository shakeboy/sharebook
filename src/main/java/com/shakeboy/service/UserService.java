package com.shakeboy.service;

import com.shakeboy.mapper.UserMapper;
import com.shakeboy.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserMapper userMapper;

    //根据id查询用户
    public User Sel(int id) {
        return userMapper.Sel(id);
    }

    //获取所有用户
    public List<User> SelAllUser() {
        List<User> users = userMapper.selAllUser();
        System.out.println(users);
        return users;
    }

    // 查询普通用户
    public List<User> getCommonUser(String user_role) {
        System.out.println(user_role);
        return userMapper.getCommonUser(user_role);
    }
    //模糊查询搜索用户
    public List<User> search(String value){
        return userMapper.search(value);
    }
    //根据用户编号修改名字
    public Boolean updateNameById(int user_id,String user_name){
        return userMapper.updateNameById(user_id, user_name);
    }
    //根据用户编号删除该用户
    public Boolean deleteUserById(int user_id){
        return userMapper.deleteUserById(user_id);
    }
    //增加一个用户
    public Boolean addAUser(User user){
        return userMapper.addAUser(user);
    }

}
