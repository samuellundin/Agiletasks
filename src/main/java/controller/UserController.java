package controller;


import org.springframework.beans.factory.annotation.Autowired;
import service.UserService;

@RestController
public class UserController {

    @Autowired
    private UserService userService;
}
