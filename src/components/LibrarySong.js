import React from "react";
import "../styles/app.scss";

const LibrarySong = ({
  song,
  setCurrentSong,
  songs,
  id,
  audioRef,
  isPlaying,
  currentSong,
  setSongs,
}) => {
  //1 option
  // useEffect(() => {
  //   if (isPlaying && audioRef.current.paused) {
  //     audioRef.current.play();
  //   }
  // }, [isPlaying, currentSong]);
  //2-nd option for autoplay
  const songSelectHandler = () => {
    // const selectedSong = songs.filter((state) => state.id === id);
    const selectedSong = songs.filter((stateSongs) => stateSongs.id === id);
    setCurrentSong(selectedSong[0]);
    //Add active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    if (isPlaying) {
      audioRef.current.play();
    }
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selcted" : ""}`}
    >
      <img alt="cover" src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
