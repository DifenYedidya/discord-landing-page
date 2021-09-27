import React from 'react'
import {
    Heading,
    Text,
    Box,
    Flex,
    Button
  } from 'rebass';

const dataUsers = () => {
    return(
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => console.log(json))              
    )
}

const Users = () => {
    return(
        <>
            <Flex
                alignItems='center'
                justifyContent='center'
                p={5}
            >                
                <Box
                    display='inline-block'
                    width={720}
                    p={3}
                    color='black'
                    backgroundColor='whitesmoke'
                >
                <Heading>Testing Example</Heading>
                <hr/>
                <Button 
                    variant='primary' 
                    mr={3}
                    bg='green'
                >
                    Back to Home
                </Button>
                <table>
                    Ini table
                </table>
                </Box>
            </Flex>
        </>
    )
}

export default Users