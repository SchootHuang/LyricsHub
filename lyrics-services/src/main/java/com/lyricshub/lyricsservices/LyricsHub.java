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

    public LyricsHub() {

    }

}
