package com.lyricshub.lyricsservices.controller;

import com.lyricshub.lyricsservices.domain.LyricsHub;
import com.lyricshub.lyricsservices.repository.LyricsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class LyricsController {
    private final LyricsRepo lyricsRepo;

    LyricsController(LyricsRepo lyricsRepo) {
        this.lyricsRepo = lyricsRepo;
    }

    @GetMapping("/{id}")
    public LyricsHub findOneById(@PathVariable int id) {
        return lyricsRepo.findOneById(id);
    }

    @GetMapping("/{artists}")
    public List<LyricsHub> findAllByArtists(@PathVariable String artists) {
        return lyricsRepo.findAllByArtists(artists);
    }

    @GetMapping("/{title}")
    public List<LyricsHub> findAllByTitle(@PathVariable String title) {
        return lyricsRepo.findAllByTitle(title);
    }

    @GetMapping("/{lyrics}")
    public List<LyricsHub> findAllByLyrics(@PathVariable String lyrics) {
        return lyricsRepo.findAllByLyrics(lyrics);
    }
}
