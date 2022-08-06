import styled from "styled-components";
import { getProviders, signIn } from "next-auth/react";
import MyClubLogo from "../icons/logo-myclub.svg";
import Wrapper from "../src/components/Global/Wrapper";
import { useEffect } from "react";
import { useRouter } from "next/router";

const LoginButton = styled.button`
  padding: 1rem;
  background-color: #2d97ac;
  color: #fff;
  border-radius: 50px;
  border: none;
`;

export default function Login({ providers }) {

  return (
    <Wrapper style={{height:"100vh"}} justifyContent="center">
      <div>
        <MyClubLogo />
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <LoginButton
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
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
