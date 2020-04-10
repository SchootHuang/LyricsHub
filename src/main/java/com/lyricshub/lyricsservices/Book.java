package com.lyricshub.lyricsservices;

public class Book {
    long id;
    String name;

    public Book(long id, String name) {
        this.id = id;
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }


}
