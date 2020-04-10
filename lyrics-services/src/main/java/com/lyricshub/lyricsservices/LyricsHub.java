package com.lyricshub.lyricsservices;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class LyricsHub {
    @Id
    @GeneratedValue
    private String lyrics;
    private String artists;
    private String year;
    private String album;
    private String title;
    private String image;


    public LyricsHub() {
        lyrics = "";
        artists = "";
        year = "";
        album = "";
        title = "";
        image = "";
    }

    public LyricsHub(String lyrics, String artists, String year,
                     String album, String title, String image) {
        this.album = album;
        this.artists = artists;
        this.year = year;
        this.title = title;
        this.image = image;
        this.lyrics = lyrics;
    }

}
