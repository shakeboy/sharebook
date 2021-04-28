package com.shakeboy.mapper;

import com.shakeboy.pojo.UArticle;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface UArticleMapper {
    List<UArticle> selAllArticle();
    List<UArticle> selDelArticle();
    List<UArticle> search(String value);
    UArticle getArticleById(int id);
    Boolean deleteArticle(int uarticle_id);
    Boolean deleteArticleForever(int uarticle_id);
    Boolean cancelDeleteArticle(int uarticle_id);
}
