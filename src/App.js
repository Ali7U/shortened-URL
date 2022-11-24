import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from "axios";

function App() {
  const [userInput, setUserInput] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${userInput}`
      );
      setShortenedLink(response.data.result.full_short_link);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container ">
      <div className="text-center">
        <h1 className="text-2xl">
          Our <span className="span">Shortener</span>
        </h1>
        <div>
          <input
            className="outline"
            type="text"
            placeholder="Enter link to be shortened"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          />

          <button
            onClick={() => {
              fetchData();
            }}
          >
            Submit URL
          </button>
        </div>
        <div className="mt-5">
          {shortenedLink}
          <CopyToClipboard text={shortenedLink}>
            <button>Copy URL to Clipboard</button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}

export default App;
