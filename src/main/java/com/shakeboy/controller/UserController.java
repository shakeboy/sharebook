package com.shakeboy.controller;

import com.alibaba.fastjson.JSON;
import com.shakeboy.pojo.User;
import com.shakeboy.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@Controller
@RequestMapping("/user")
public class UserController {

    //    注入UserService
    @Autowired
    private UserService userService;

    @RequestMapping("/error")
    public String error(){
        return "user/error";
    }
    //用户管理界面
    @RequestMapping("/user")
    public String user() {
        return "user/user";
    }

    //    用户信息获取
    @RequestMapping("/userInfo")
    public String userInfo() {
        return "user/userInfo";
    }

    //    用户信息设置
    @RequestMapping("/userSetting")
    public String userSetting() {
        return "user/userSetting";
    }

    //    管理员登陆界面
    @RequestMapping("/login")
    public String userLogin() {
        return "login/login";
    }

    //    获取用户信息
    @ResponseBody
    @RequestMapping("/getUser/{id}")
    public String getUser(@PathVariable int id) {
        return userService.Sel(id).toString();
    }

    //    查询所有用户
    @ResponseBody
    @RequestMapping("/getAllUser")
    public String getAllUser() {
        return userService.SelAllUser().toString();
    }

    //    用户登录测试
    @ResponseBody
    @RequestMapping("/loginTest")
    public String login(String u_account, String u_password) {
        System.out.println(u_account + "  " + u_password);
        System.out.println("小程序登陆中");
        return "hello";
    }

    //用户信息设置
    @RequestMapping("/commonUser")
    public String commonUser() {
        return "/user/commonUser";
    }

    @RequestMapping("/adminUser")
    public String adminUser() {
        return "/user/adminUser";
    }

    @RequestMapping("/wexinUser")
    public String wexinUser() {
        return "/user/wexinUser";
    }

    @RequestMapping("/searchUser")
    public String searchUser() {
        return "/user/searchUser";
    }

    // 查询普通用户
    @RequestMapping("/getCommonUser")
    @ResponseBody
    public String getCommonUser() {
        String user_role = "common";
        List<User> commonUser = userService.getCommonUser(user_role);
        String jsonString = JSON.toJSONString(commonUser);
        System.out.println(jsonString);
        return jsonString;
    }

    //查询管理员用户信息
    @RequestMapping("/getAdminUser")
    @ResponseBody
    public String getAdminUser() {
        String user_role = "admin";
        List<User> commonUser = userService.getCommonUser(user_role);
        return JSON.toJSONString(commonUser);
    }
    //模糊查询相关的用户信息
    @RequestMapping("/search")
    @ResponseBody
    public String search(@PathParam("value") String value){
        // 利用fastjson将json对象转换成json字符串
        List<User> users = userService.search(value);
        return JSON.toJSONString(users);
    }
    //根据用户id修改名称
    @ResponseBody
    @GetMapping("/updateNameById")
    public String updateNameById(@PathParam("user_id")int user_id,@PathParam("user_name")String user_name){
        return userService.updateNameById(user_id,user_name).toString();
    }
    //根据用户id删除用户
    @ResponseBody
    @GetMapping("/deleteUserById")
    public String deleteUserById(@PathParam("user_id")int user_id){
        return userService.deleteUserById(user_id).toString();
    }
    //增加一个用户
    @GetMapping("/addAUser")
    public String addAUser(@RequestParam("user_account")String user_account,@RequestParam("user_password")String user_password,
                           @RequestParam("user_signature")String user_signature,@RequestParam("user_avator")String user_avator,
                           @RequestParam("user_name")String user_name,@RequestParam("user_role")String user_role){
        User u = new User(user_account,user_password,user_signature,user_avator,user_name,user_role);
        System.out.println(u);
        String s = userService.addAUser(u).toString();
        if(s.equals("true")){
            return "user/user";
        }else {
            return "user/error";
        }

    }
}
