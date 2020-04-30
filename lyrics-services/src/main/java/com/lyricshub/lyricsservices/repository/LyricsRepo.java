package com.lyricshub.lyricsservices.repository;


import com.lyricshub.lyricsservices.domain.LyricsHub;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface LyricsRepo extends JpaRepository<LyricsHub, Long> {

    LyricsHub findOneById(int id);

    List<LyricsHub> findAllByArtists(String artists);

    List<LyricsHub> findAllByTitle(String title);

    List<LyricsHub> findAllByLyrics(String lyrics);

}
