import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import Rev from "../screens/review";
import About from "../screens/about";


const screens={
    
    Home:{
        screen:Home,
        
    },
    Info:{
        screen:Rev,
           
        },
    About:{
        screen:About
    }
    }
   

const Homestack=createStackNavigator(screens);
export default createAppContainer(Homestack);