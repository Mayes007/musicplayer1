import { useState } from "react";
import pb from "../pocketbase";

function Upload({ refreshSongs }) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Select a file!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("artist", artist);
    formData.append("audio", file);

    try {
      await pb.collection("songs").create(formData);
      alert("Uploaded successfully!");
      refreshSongs();
    } catch (err) {
      console.error("UPLOAD ERROR:", err);
      alert("Upload failed");
    }
  };

  return (
    <div className="card">
      <h2>Upload Song</h2>
      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Artist" onChange={(e) => setArtist(e.target.value)} />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default Upload;