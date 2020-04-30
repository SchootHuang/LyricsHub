package com.lyricshub.lyricsservices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LyricsController {
    @Autowired
    LyricsRepo repo;

    @GetMapping("/{id}")
    public LyricsHub getByArtists(@PathVariable int id) {
        return repo.findById(id);
    }

    @GetMapping("/{artists}")
    public void findByArtists(@PathVariable String artists) {
    }
}
