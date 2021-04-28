package com.shakeboy.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserDetailsService userDetailsService; //实现类注入

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        // 设置实现类
        auth.userDetailsService(userDetailsService).passwordEncoder(password());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.headers().frameOptions().disable();
        http
                .authorizeRequests()
                .antMatchers("/login").permitAll() // 这三个目录不做安全控制
                .anyRequest().authenticated()
                .and()
                .formLogin().permitAll(); // 登录不需要安全控制

    }

    // spring security 必须有一个passwordEncoder
    @Bean
    public BCryptPasswordEncoder password() {
        return new BCryptPasswordEncoder();
    }


}
