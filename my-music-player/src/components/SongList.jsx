import pb from "../pocketbase";

function SongList({ songs, setCurrentSong }) {
  return (
    <div className="card">
      <h2>Playlist</h2>

      {songs.map((song) => {
        const url = pb.files.getUrl(song, song.audio);

        return (
          <div
            key={song.id}
            className="song"
            onClick={() => setCurrentSong({ ...song, url })}
          >
            🎵 {song.title} - {song.artist}
          </div>
        );
      })}
    </div>
  );
}

export default SongList;