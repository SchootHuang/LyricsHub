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
    public String getLyrics() {
        return lyrics;
    }

    public void setLyrics(String lyrics) {
        this.lyrics = lyrics;
    }

    public String getArtists() {
        return artists;
    }

    public void setArtists(String artists) {
        this.artists = artists;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getAlbum() {
        return album;
    }

    public void setAlbum(String album) {
        this.album = album;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

}
