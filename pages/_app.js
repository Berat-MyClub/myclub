import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import spotifyApi from "../lib/spotify";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component spotifyApi={spotifyApi} {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
