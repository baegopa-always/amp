import {
    Flex,
    Grid,
    View
  } from "@aws-amplify/ui-react";
import './Login';
import './HomeLeftSide';
import HomeLeftSide from "./HomeLeftSide";
import LoginButton from "./Login";


export default function Home(){
    return (
        <Grid templateColumns="4fr 1fr" justifyContent="center">
        <Flex
        justifyContent="center"
        id="left"
        >
            <HomeLeftSide/>
        </Flex>
    
        <Flex
        justifyContent="center"
        id="right"
        ><View>
            <LoginButton/>
        </View></Flex>
      </Grid>
    )
}