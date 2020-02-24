const{lyrics} = require('../app')

const handleLyricsRouter = (req, res) => {
    if(method === 'GET' && req.path === '/search') {
        const query = req.query; 
        Lyricshub.find( query , (err, lyrics) => {
            if (err) {
                console.log(err);
            } else {
                console.log(lyrics);
            }
        });
    }
}