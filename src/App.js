import "./App.css";
import { useState } from "react";
import { uploadFileToFirebase } from "./firebaseUpload";

function App() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imgURL, setImgURL] = useState("");

  const handleUpload = async () => {
    try {
      const url = await uploadFileToFirebase(imageUpload);
      setImgURL(url);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => setImageUpload(event.target.files[0])}
      />
      <button onClick={handleUpload}>Upload Image</button>
      <p>{imgURL}</p>
    </div>
  );
}

export default App;
