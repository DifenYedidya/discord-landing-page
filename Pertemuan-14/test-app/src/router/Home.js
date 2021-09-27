import React from 'react'
import {
    Heading,
    Text,
    Box,
    Flex,
    Button
  } from 'rebass';

const Home = () => {
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
                <Heading
                    textAlign='center'
                    fontSize={[ 5, 6 ]}>
                    Why do we need Test?
                </Heading>
                <Text>
                    To guarantee our code quality. And to show the people that we also 
                    care about it and wish to give something that already proven, at least by ourself.
                </Text>
                <br/>
                <Button 
                    variant='primary' 
                    mr={3}
                    bg='blue'
                >
                    User List
                </Button>
                <hr />
                <Text>© 2021</Text>
                </Box>
            </Flex>
        </>
    )
}

export default Home