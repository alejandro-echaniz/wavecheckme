const path = require("path");
const axios = require("axios");
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

let spotifyToken = ""; // Cache the token
let tokenExpiry = 0; // Store token expiry timestamp

const fetchSpotifyToken = async () => {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      null,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${clientId}:${clientSecret}`
          ).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        params: {
          grant_type: "client_credentials",
        },
      }
    );

    spotifyToken = response.data.access_token;
    tokenExpiry = Date.now() + response.data.expires_in * 1000; // Store expiry time
  } catch (error) {
    console.error("Error fetching Spotify token:", error.message);
    throw new Error("Unable to fetch Spotify token");
  }
};

// Function to ensure token is valid before making API requests
const ensureValidToken = async () => {
  if (!spotifyToken || Date.now() >= tokenExpiry) {
    await fetchSpotifyToken();
  }
};

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/getsong", (req, res) => {
  search = req.query.search;
  axios
    .get("https://itunes.apple.com/search?term=" + search)
    .then((resp) => res.send(resp.data));
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
