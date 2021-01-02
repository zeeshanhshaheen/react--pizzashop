import React from "react";
import styled from "styled-components";
import { pizzaRed } from "../Styles/Colors";
import { Title } from "../Styles/title";

const NavBarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px #380502;
`;

const UserStatus = styled.div`
  color: white;
  font-size: 12px;
  margin-right: 30px;
`;

const LoginButton = styled.span`
  cursor: pointer;
`;

export function Navbar({ login, loggedIn, logout }) {
  return (
    <NavBarStyled>
      <Logo>
        Sliceline{" "}
        <span role="img" aria-label="pizza slice">
          🍕
        </span>
      </Logo>
      <UserStatus>
        {loggedIn !== "loading" ? (
          <>
            👤 {loggedIn ? `Hello, ` : ""}
            {loggedIn ? (
              <LoginButton onClick={logout}> Log out </LoginButton>
            ) : (
              <LoginButton onClick={login}> Log in / Sign up </LoginButton>
            )}
          </>
        ) : (
          "loading..."
        )}
      </UserStatus>
    </NavBarStyled>
  );
}
