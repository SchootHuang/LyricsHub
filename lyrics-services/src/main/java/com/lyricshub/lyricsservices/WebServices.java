package com.lyricshub.lyricsservices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Arrays;

@RestController
public class WebServices {

    @RequestMapping("")
    public String page() {
        return "dsf";
    }

    @RequestMapping("/show")
    public Book getAllBooks() {
        return new Book(12, "oer");
    }
}

//class People {
//    String name;
//    int age;
//    public People(String n, int a) {
//        name = n;
//        age = a;
//    }
//}
