import { Button, Input } from '@chakra-ui/react'
import React from 'react'
import styles from "../Styles/signup.module.css"

const Signup = () => {
  return (
    <form action="" id={styles.signup}>
        <Input placeholder="full name"/>
        <Input placeholder="email"/>
        <Input placeholder="password"/>
        <input type="file"  name="fileInput" />
        <Input type="submit" />
    </form>

  )
}

export default Signup