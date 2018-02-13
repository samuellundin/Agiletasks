package com.agiletasks.controller;


import com.agiletasks.model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.agiletasks.service.UserService;

import java.util.List;

@RestController
@RequestMapping("api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(method = RequestMethod.GET)
    private ResponseEntity<List<UserModel>> getAllUsers() {
        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<UserModel> register(@RequestBody UserModel userModel){
        UserModel createUser = userService.registerUser(userModel);
        return new ResponseEntity<>(createUser, HttpStatus.OK);
    }
}
