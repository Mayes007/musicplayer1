import { useEffect, useState } from "react";
import pb from "./pocketbase";
import Upload from "./components/Upload";
import SongList from "./components/SongList";
import Player from "./components/Player";
import "./App.css";

function App() {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  const fetchSongs = async () => {
    try {
      const records = await pb.collection("songs").getFullList();
      setSongs(records);
    } catch (err) {
      console.error("FETCH ERROR:", err);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div className="app">
      <h1>🎧 My Music Player</h1>

      <Upload refreshSongs={fetchSongs} />
      <SongList songs={songs} setCurrentSong={setCurrentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;