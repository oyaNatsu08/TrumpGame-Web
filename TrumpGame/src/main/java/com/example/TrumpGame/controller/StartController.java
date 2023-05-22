package com.example.TrumpGame.controller;

import com.example.TrumpGame.service.CardGame;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class StartController {

    @Autowired
    private CardGame trump;

    @GetMapping("/")
    public String title() {
        return "title";
    }

    @GetMapping("game-main")
    public String gameMain(Model model) {
        System.out.println(trump);
        return null;
    }

}
