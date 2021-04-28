package com.shakeboy.mapper;

import com.shakeboy.pojo.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserMapper {
    User Sel(int id);

    List<User> selAllUser();

    List<User> getCommonUser(String user_role);
    List<User> search(String value);
    Boolean updateNameById(int user_id,String user_name);
    Boolean deleteUserById(int user_id);
    Boolean addAUser(User user);
}
