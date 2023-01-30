import React from 'react'
import LoginButton from './LoginButton'
import {Heading,Image} from "@chakra-ui/react"
import styles from "../Styles/loginfirst.module.css"

const LoginFirst = () => {
  return (
    <div id={styles.loginfirst}>
        <Image src="fundu-logo.png"/>
        <Heading>Please Login to Continue</Heading>
        <LoginButton bgColor={"darkblue"}/>
    </div>
  )
}

export default LoginFirst