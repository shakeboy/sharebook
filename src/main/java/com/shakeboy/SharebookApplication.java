package com.shakeboy;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

//(exclude = {SecurityAutoConfiguration.class})
@SpringBootApplication(scanBasePackages = "com.shakeboy")
@MapperScan(basePackages = "com.shakeboy.mapper")
public class SharebookApplication {

    public static void main(String[] args) {
        SpringApplication.run(SharebookApplication.class, args);
    }

}
