import bg from "./img/Comforting.png";
import { Heading, View} from "@aws-amplify/ui-react";
import Home from './Home';
import HomeComponent from "./HomeComponent";

export default function HomeLeftSide(){
    return (
      <View style={bground}>
        <header>
          <a href={<Home/>}>
          <img src={require('./img/logo.png')} width="200px" height="80px" alt="logo"/>
          </a><br></br>
        </header>
        <footer>
          <HomeComponent/>
        </footer>
      </View>
    )
}
const bground = {
  backgroundImage: `url(${bg})`,
  height: "100vh",
  backgroundSize: "cover",
  width: "100%"
}