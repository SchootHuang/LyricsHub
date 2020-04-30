package com.lyricshub.lyricsservices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LyricsController {
    @Autowired
    LyricsRepo repo;

    @GetMapping("")
    public LyricsHub getLricsHubList() {
        return repo.findById(0);
    }

    @DeleteMapping("")
    public void deleteLricsHubList() {
        repo.deleteById(0);
    }
}
