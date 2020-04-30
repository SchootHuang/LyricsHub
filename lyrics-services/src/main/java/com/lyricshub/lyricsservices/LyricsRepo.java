package com.lyricshub.lyricsservices;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

@Repository
@Transactional
public class LyricsRepo {

    @PersistenceContext
    EntityManager entityManager;

    public LyricsHub findById(int id) {
        return entityManager.find(LyricsHub.class, id);
    }

    public LyricsHub update(LyricsHub lyricsHub) {
        return entityManager.merge(lyricsHub);
    }

    public LyricsHub insert (LyricsHub lyricsHub) {
        return entityManager.merge(lyricsHub);
    }

    public void deleteById(int id) {
        LyricsHub lyricsHub = findById(id);
        entityManager.remove(lyricsHub);
    }
}
