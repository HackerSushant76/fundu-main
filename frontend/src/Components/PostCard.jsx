import { Avatar, Button, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Comments from "./Comments";

const PostCard = ({ _id, name, picture, title, desc }) => {
  const [showComments, setShowComments] = useState(false);
  return (
    <div>
      <div>
        <Avatar src={picture} name={name} />
        <Heading size="md">{name}</Heading>
      </div>
      <div>
        <Heading size="sm">{title}</Heading>
        <br />
        <Text>{desc}</Text>
      </div>
      <div>
        <Button onClick={() => setShowComments(showComments ? false : true)} colorScheme="teal" m="20px">
          {showComments ? "Hide Comments" : "Show Comments"}
        </Button>
      </div>
      {showComments && <Comments post_id={_id} />}
    </div>
  );
};

export default PostCard;
