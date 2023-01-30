import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import PostCard from "../Components/PostCard";
import styles from "../Styles/home.module.css";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Heading,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(null);
  const [filter, setFilter] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  const getPosts = () => {
    axios
      .get(`https://fundu-api.onrender.com/posts?page=${page}&sort=${sort}`)
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getfilteredPost = () => {
    axios
      .get(`https://fundu-api.onrender.com/posts?page=${page}&filter=${user.name}`)
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addPost = () => {
    const payload = {
      name: user.name,
      picture: user.picture,
      desc: text,
      title: title,
    };
    axios
      .post("https://fundu-api.onrender.com/addpost", payload)
      .then((res) => {
        console.log(res.data);
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => getPosts());
  };
  useEffect(() => {
    getPosts();
  }, [page, sort]);

  console.log(user);
  return (
    <>
      <br />
      <Box w="fit-content" m="auto" display="flex" gap="20px">
        <Button
          colorScheme="teal"
          isDisabled={filter}
          onClick={() => {
            // getfilteredPost();
            setFilter(filter ? false : true);
          }}
        >
          {!filter ? "See your posts" : "See all posts"}
        </Button>
        <Select onChange={(e) => setSort(e.target.value)} w="300px">
          <option value="">Sort by name</option>
          <option value="asc">Ascending</option>
          <option value="desc"> Descending</option>
        </Select>
      </Box>
      <div id={styles.home}>
        <div id={styles.addpost}>
          {user !== undefined ? (
            <div>
              <Avatar name={user.name} src={user.picture} />{" "}
              <Heading size="md">{user.name}</Heading>
            </div>
          ) : null}
          <Input
            placeholder="Title"
            bg={"white"}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Textarea
            bg={"white"}
            placeholder="Write something..."
            onChange={(e) => setText(e.target.value)}
            required
          />
          <Button onClick={addPost} colorScheme="teal">Post</Button>
        </div>
        <div id={styles.posts}>
          {posts.map((elem) => (
            <PostCard key={elem._id} {...elem} />
          ))}
        </div>
      </div>
      <div id={styles.pagin}>
        <Button
          isDisabled={page <= 1}
          onClick={() => setPage(page - 1)}
          colorScheme="teal"
        >
          prev
        </Button>
        <Heading>{page}</Heading>
        <Button onClick={() => setPage(page + 1)} colorScheme="teal">
          next
        </Button>
      </div>
    </>
  );
};

export default Home;
