import { Avatar, Flex, Text } from "@chakra-ui/react";
import React from "react";

const CommentCard = ({ name, picture, comment }) => {
  return (
    <Flex
      align={"center"}
      justify="left"
      marginLeft={"30%"}
      mt="20px"
      bg={"whiteAlpha.700"}
      p="2px"
      gap="10px"
      borderRadius={"20px"}
    >
      <Avatar src={picture} name={name} />
      <Text>{comment}</Text>
    </Flex>
  );
};

export default CommentCard;
