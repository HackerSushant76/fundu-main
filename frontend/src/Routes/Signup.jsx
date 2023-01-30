import { Button, Input } from '@chakra-ui/react'
import React from 'react'
import styles from "../Styles/signup.module.css"

const Signup = () => {
    // const inputRef = useRef(null)
    // const handleUplaod =()=>{
    //     inputRef.current.click()
    // }
  return (
    <form action="" id={styles.signup}>
        <Input placeholder="full name"/>
        <Input placeholder="email"/>
        <Input placeholder="password"/>
        <input type="file"  name="fileInput" />
        <Input type="submit" />
        {/* <Button onClick={handleUplaod}>Upload</Button> */}
    </form>

  )
}

export default Signup