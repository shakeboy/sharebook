package com.shakeboy.controller;

import com.alibaba.fastjson.JSON;
import com.fasterxml.jackson.annotation.JsonAlias;
import com.shakeboy.pojo.UArticle;
import com.shakeboy.service.UArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.websocket.server.PathParam;
import java.util.List;

@Controller
@RequestMapping("/article")
public class UArticleController {

    @Autowired
    private UArticleService uArticleService;

    // 获取所有文章
    @ResponseBody
    @RequestMapping("/getAllArticle")
    public String getAllArticle() {
        List<UArticle> articles = uArticleService.getAllArticle();
        return JSON.toJSONString(articles);
    }
    // 获取所有文章
    @ResponseBody
    @RequestMapping("/selDelArticle")
    public String selDelArticle() {
        List<UArticle> articles = uArticleService.selDelArticle();
        return JSON.toJSONString(articles);
    }

    // 发表页面
    @RequestMapping("/publish")
    public String publish() {
        return "article/publish";
    }

    // 删除页面
    @RequestMapping("/delete")
    public String delete() {
        return "article/delete";
    }

    // 检索页面
    @RequestMapping("/search")
    public String search() {
        return "article/search";
    }
    // 检索功能,返回文章内容
    @RequestMapping("/searchByValue")
    @ResponseBody
    public String searchByValue(@PathParam("value")String value){
        List<UArticle> search = uArticleService.search(value);
        String jsonString = JSON.toJSONString(search);
        return jsonString;
    }
    //
    // 检索页面
    @RequestMapping("/article")
    public String article() {
        return "article/article";
    }
    // 根据id找文章
    @ResponseBody
    @RequestMapping("/getArticleById")
    public String getArticleById(@PathParam("uarticle_id")int uarticle_id){
        UArticle article = uArticleService.getArticleById(uarticle_id);
        return JSON.toJSONString(article);
    }
    // 根据id逻辑删除文章
    @ResponseBody
    @RequestMapping("/deleteArticle")
    public String deleteArticle(@PathParam("uarticle_id")int uarticle_id){
        return uArticleService.deleteArticle(uarticle_id).toString();

    }
    // 根据id物理删除文章
    @ResponseBody
    @RequestMapping("/deleteArticleForever")
    public String deleteArticleForever(@PathParam("uarticle_id")int uarticle_id){
        return uArticleService.deleteArticleForever(uarticle_id).toString();

    }
    // 撤销删除
    @ResponseBody
    @RequestMapping("/cancelDeleteArticle")
    public String cancelDeleteArticle(@PathParam("uarticle_id")int uarticle_id){
        return uArticleService.cancelDeleteArticle(uarticle_id).toString();

    }
}
