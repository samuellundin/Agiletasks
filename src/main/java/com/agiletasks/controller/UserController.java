package com.agiletasks.controller;


import com.agiletasks.model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.agiletasks.service.UserService;

import java.util.List;

@RestController
@RequestMapping("api/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    private ResponseEntity<List<UserModel>> getAllUsers() {
        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }

    @GetMapping("/byProjectId/{id}")
    private ResponseEntity<List<UserModel>> getUsersByProjectId(@PathVariable Long id) {
        return new ResponseEntity<>(userService.getUsersByProjectId(id), HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<UserModel> register(@RequestBody UserModel userModel){
        UserModel createUser = userService.registerUser(userModel);
        return new ResponseEntity<>(createUser, HttpStatus.OK);
    }

    @GetMapping("/{email}/")
    public ResponseEntity<UserModel> getUserByEmail(@PathVariable("email") String email) {
        return new ResponseEntity<>(userService.getUserByEmail(email), HttpStatus.OK);
    }

    @PutMapping("/edit_user")
    public ResponseEntity<UserModel> updateUser(@RequestBody UserModel userModel){
        UserModel updatedUser = userService.updateUser(userModel);
        updatedUser.setPassword("");
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

    @PutMapping("/changePassword")
    public ResponseEntity<UserModel> changePassword(@RequestBody UserModel userModel){
        UserModel updatedUser = userService.changePassword(userModel);
        updatedUser.setPassword("");
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }
}
