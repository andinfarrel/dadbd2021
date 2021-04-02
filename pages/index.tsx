import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/layout'
import { Flex } from '@chakra-ui/layout'
import Head from 'next/head'
import { useState } from 'react'
import Reward from 'react-rewards';
import Link from 'next/link'

export default function Home() {
  const [reward, setReward] = useState(null);
  const config = {
    type: "confetti",
    fakingRequest: false,
    angle: 90,
    decay: 0.91,
    spread: 45,
    startVelocity: 35,
    elementCount: 40,
    elementSize: 8,
    lifetime: 200,
    zIndex: 10,
    springAnimation: true
  }
  const elementCount=130;
  const spread=300;
  const elementSize=20;
  const startVelocity=60;
  const rewardClick = () => {
    reward.rewardMe();
  }

  return (
    <Flex direction="column" minH="100vh" w="100vw" align="center">
      <Flex direction="column" minH="100vh" w="100%" 
      // bg="#D6C8B2" 
      bgImage="url('/dadbg.png')"
      align="center" justify="center">
        <Text as="em" fontSize={["5xl","6xl"]}>Happy Birthday!!</Text>
        <Reward
          ref={(ref) => {setReward(ref)}}
          type='confetti'
          config={{
            spread,
            elementCount,
            elementSize,
            startVelocity
          }}
        >
          <Button onClick={rewardClick} borderWidth={1} borderColor="blue.600" borderRadius="full" m={3}><Text fontSize="xl">click</Text></Button>
        </Reward>
      </Flex> 
      <Flex direction="column" h="100vh" w="100%" bg="#7C7176" color="gray.50" align="center" >
        <Text as="em" fontSize={["5xl","6xl"]} mt={10}>Award</Text>
        <Box m="auto" h={["60%","80%"]}>
          <Image h="100%" src="/dadcert.jpeg"></Image>
        </Box>
      </Flex>
    </Flex> 
  )
}
