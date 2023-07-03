import React from "react";
import { Link } from "react-router-dom";
import { Profile, Logo, OpenedProjectTitle } from "./styles";
import { TopbarContainer } from "./styles";

export const Topbar = () => {
  return (
    <TopbarContainer>
      <Link to="/">
        <Logo />
      </Link>
      <OpenedProjectTitle>E-commerce App</OpenedProjectTitle>
      <Profile />
    </TopbarContainer>
  );
};
