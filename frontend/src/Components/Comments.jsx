import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Button, Heading, Input } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../Styles/comments.module.css";
import CommentCard from "./CommentCard";

const Comments = ({ post_id }) => {
  const [comment, setComment] = useState("");
  const [comData, setComData] = useState([]);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const getComments = () => {
    const config = {
      headers: {
        post_id,
      },
    };
    axios
      .get("https://fundu-api.onrender.com/comments", config)
      .then((res) => {
        console.log(res.data);
        setComData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const postComments = () => {
    const payload = {
      name: user.name,
      picture: user.picture,
      comment,
    };
    const config = {
      headers: {
        post_id,
      },
    };
    axios
      .post("https://fundu-api.onrender.com/addcomment", payload, config)
      .then((res) => {
        console.log(res.data);
        alert(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => getComments());
  };
  useEffect(() => {
    getComments();
  }, []);
  return (
    <div id={styles.container}>
      <div id={styles.combox}>
        {isAuthenticated ? (
          <div id={styles.namebox}>
            <Avatar name={user.name} src={user.picture} />{" "}
            {/* <Heading size="sm">{user.given_name}</Heading> */}
          </div>
        ) : null}
        <div id={styles.inputbox}>
          <Input
            bg="white"
            placeholder="comment about the post..."
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <Button onClick={postComments}>Comment</Button>{" "}
        </div>
      </div>
      {comData?.map((elem) => (
        <CommentCard key={elem._id} {...elem} />
      ))}
    </div>
  );
};

export default Comments;
