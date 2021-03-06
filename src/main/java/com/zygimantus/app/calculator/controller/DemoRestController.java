package com.zygimantus.app.calculator.controller;

import com.zygimantus.app.calculator.model.Message;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoRestController {

    @RequestMapping("/greeting")
    public Message greeting(@RequestParam(value = "name", defaultValue = "World") String name) {

        return new Message(name);
    }

}
