import styled from "styled-components";
import { getProviders, signIn, useSession } from "next-auth/react";
import MyClubLogo from "../icons/logo-myclub.svg";
import Wrapper from "../src/components/Global/Wrapper";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "../src/components/Global/Loader";

const LoginButton = styled.button`
  padding: 1rem;
  background-color: #2d97ac;
  color: #fff;
  border-radius: 50px;
  border: none;
`;

export default function Login({ providers }) {

  const { data: session } = useSession();
  const router = useRouter()

  useEffect(() => {
    if(session) {
      router.push('/')
    }
  },[session]);

  if(session) return <Loader/>

  return (
    <Wrapper justifyContent="center">
      <div>
        <MyClubLogo />
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <LoginButton
              onClick={() =>
                signIn(provider.id)
              }
            >
              Login with {provider.name}
            </LoginButton>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
