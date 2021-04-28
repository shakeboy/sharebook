package com.shakeboy.security;

import com.shakeboy.mapper.AdminMapper;
import com.shakeboy.pojo.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("userDetailsService")  //注入UserDetailsService
public class MyUserDetailsService implements UserDetailsService {  //该接口用于自定义登陆密码的权限

    @Autowired
    private AdminMapper adminMapper;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("1.开始查询数据库是否有该用户");
        Admin admin = adminMapper.SelByName(username);
        System.out.println("2.查询的数据结果" + admin);
        if (admin == null) {
            //数据库没有数据，返回空
            throw new UsernameNotFoundException("用户名不存在");
        }
        List<GrantedAuthority> authorities = AuthorityUtils.commaSeparatedStringToAuthorityList("role");
        return new User(admin.getA_name(), new BCryptPasswordEncoder().encode(admin.getA_password()), authorities);
    }

}
