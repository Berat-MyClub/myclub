import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import spotifyApi from "../lib/spotify";
import AppBar from '../src/components/Global/AppBar'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component spotifyApi={spotifyApi} {...pageProps} />
      <AppBar/>
    </SessionProvider>
  );
}

export default MyApp;
