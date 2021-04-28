package com.shakeboy.service;

import com.shakeboy.mapper.UArticleMapper;
import com.shakeboy.pojo.UArticle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UArticleService {

    @Autowired
    private UArticleMapper uArticleMapper;

    // 查询所有书籍
    public List<UArticle> getAllArticle() {
        return uArticleMapper.selAllArticle();
    }
    // 查询所有已删除书籍
    public List<UArticle> selDelArticle() {
        return uArticleMapper.selDelArticle();
    }
    // 根据输入值检索文章
    public List<UArticle> search(String value) {
        return uArticleMapper.search(value);
    }
    // 根据id找文章
    public UArticle getArticleById(int id){
        return uArticleMapper.getArticleById(id);
    }
    // 根据id逻辑删除文章
    public Boolean deleteArticle(int id){
        // 本质上是update操作，修改deleted为1即可
        return uArticleMapper.deleteArticle(id);
    }
    // 根据id撤销逻辑删除文章
    public Boolean cancelDeleteArticle(int id){
        // 本质上是update操作，修改deleted为0即可
        return uArticleMapper.cancelDeleteArticle(id);
    }
    // 根据id物理删除文章
    public Boolean deleteArticleForever(int id){
        // 从数据库中删除
        return uArticleMapper.deleteArticleForever(id);
    }
}
