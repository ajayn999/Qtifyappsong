import React, { useEffect, useState } from "react";
import Albums from "../../components/albums/Albums";
import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";
// import { albumData } from "../../data";
import "./Home.css";
import axios from "axios";
import Songs from "../../components/songs/Songs";
import Faqs from "../../components/accordian/Faqs";
import SongPlayer from "../../components/song-player/SongPlayer";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    fetchTopAlbums();
    fetchNewAlbums();
  }, []);

  async function fetchTopAlbums() {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/new"
      );
      const data = await response.data;
      setTopAlbums(data);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.error(error);
    }
  }

  async function fetchNewAlbums() {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/new"
      );
      const data = await response.data;
      setNewAlbums(data);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.error(error);
    }
  }
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <Banner />
      </section>

      {/* Album section */}
      <section>
        <Albums
          isLoading={isLoading}
          isError={isError}
          title="Top Albums"
          albums={topAlbums}
          isAlbum="follows"
        />
      </section>

      <section>
        <Albums
          isLoading={isLoading}
          isError={isError}
          title="New Albums"
          albums={newAlbums}
          isAlbum="follows"
        />
      </section>

      <hr className="green-line" />

      <section>
        <Songs />
      </section>

      <section>
        <Faqs />
      </section>

      <hr className="white-line" />

      <section>
        <SongPlayer />
      </section>
    </div>
  );
};

export default Home;
