import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [script, setScript] = useState('');
  const [videoUrl, setVideoUrl] = useState(null);

  const handleScriptChange = (e) => {
    setScript(e.target.value);
  };

  const generateVideo = async () => {
    try {
      // Example API endpoint (replace with your real API)
      const response = await axios.post('https://your-api-endpoint.com/generate-video', {
        script: script,
      });

      // Assuming the API responds with a video URL or some result
      setVideoUrl(response.data.videoUrl); // Adjust based on your API response
    } catch (error) {
      console.error('Error generating video', error);
    }
  };

  return (
    <div className="App">
      <h1>Script to Video</h1>
      <textarea
        value={script}
        onChange={handleScriptChange}
        placeholder="Enter your script here..."
        rows="10"
        cols="50"
      />
      <button onClick={generateVideo}>Generate Video</button>

      {videoUrl && (
        <div>
          <h2>Your Video:</h2>
          <video width="100%" controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}

export default App;
