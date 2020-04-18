package com.lyricshub.lyricsservices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Arrays;

@RestController

public class WebServices {

    @Autowired
    LyricsRepo repo;

    @GetMapping("")
    public LyricsHub getLricsHubList() {
        return repo.findById(0);
    }

//    @PostMapping("api")
//    public LyricsHub getLricsHubList() {
//        return repo.findById(100);
//    }

    @DeleteMapping("")
    public void deleteLricsHubList() {
        repo.deleteById(0);
    }

}

