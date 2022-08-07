import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import styled from "styled-components";
import Track from "./Track";

const SongSearchBar = styled.input`
  width: 100%;
  background-color: #1b3031;
  border: none;
  outline: none;
  font-family: "poppins";
  color: #fff;
  font-family: 400;
  font-size: 1rem;

  ::placeholder {
    color: #a6a6a6;
    font-size: 0.875rem;
    font-family: "Poppins";
  }
`;

const Bar = styled.div`
  padding: 0.75rem 1rem;
  border-radius: 7px;
  background-color: #1b3031;
  display: flex;
  align-items: center;
  width: calc(100% - 2rem);
`;

const Result = styled.div`
  padding: 1rem 0;
`;

export default function searchInput({ spotifyApi }) {
  const { data: session } = useSession();
  const { accessToken } = session || {};
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [newReleases, setNewreleases] = useState([]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    spotifyApi.searchTracks(search).then((res) => {
      // setSearchResults(res.body.tracks.items);
      setSearchResults(
        res.body.tracks.items.map((track) => {
          return {
            id: track.id,
            title: track.name,
            artist: track.artists[0].name,
            uri: track.uri,
            albumUrl: track.album.images[0].url,
            popularity: track.popularity,
          };
        })
      );
    });
  }, [search, accessToken]);

  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getNewReleases().then((res) => {
      // setSearchResults(res.body.tracks.items);
      setNewreleases(
        res.body.albums.items.map((track) => {
          return {
            id: track.id,
            title: track.name,
            artist: track.artists[0].name,
            uri: track.uri,
            albumUrl: track.images[0].url,
          };
        })
      );
    });
  }, [search, accessToken]);

  console.log("new releases", newReleases);

  return (
    <div>
      <Bar>
        <MdSearch
          style={{
            width: "1.5rem",
            height: "1.5rem",
            fill: "#fff",
            marginRight: ".5rem",
          }}
        />
        <SongSearchBar
          placeholder="Search for a Song"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Bar>
      <Result>
        {searchResults.length === 0
          ? newReleases.slice(0, 8).map((track) => (
              <Track key={track.id} track={track}>
                {/* <TrackImage url='`' /> */}

                <h2>{track.title}</h2>
              </Track>
            ))
          : searchResults.slice(0, 8).map((track) => (
              <Track key={track.id} track={track}>
                {/* <TrackImage /> */}
                <h2>{track.title}</h2>
              </Track>
            ))}
      </Result>
    </div>
  );
}
