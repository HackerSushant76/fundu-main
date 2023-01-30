import { Avatar, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import styles from "../Styles/navbar.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div id={styles.nav}>
      <Link to="/">Home</Link>
      {isAuthenticated ? (
        <div id={styles.user}>
          <Avatar name={user.name} src={user.picture} />{" "}
          <Heading size="md">{user.name}</Heading>
          <LogoutButton />
        </div>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default Navbar;
