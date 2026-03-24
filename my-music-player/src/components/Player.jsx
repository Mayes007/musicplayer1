function Player({ currentSong }) {
  if (!currentSong) return <p>Select a song</p>;

  return (
    <div className="card">
      <h3>Now Playing</h3>
      <p>{currentSong.title} - {currentSong.artist}</p>

      <audio controls autoPlay src={currentSong.url}>
        Your browser does not support audio.
      </audio>
    </div>
  );
}

export default Player;