import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BmiResultScreen from "../screens/BmiResultScreen";
import BmiCalculatorScreen from "../screens/BmiCalculatorScreen";
import { ScreenName } from "../types/ScreenName";

const AppStack = createNativeStackNavigator();

const AppNavigator = ()=>{
    return(
        <AppStack.Navigator>
            <AppStack.Screen 
                name={ScreenName.BMI_CALCULATOR}
                component={BmiCalculatorScreen}
                options={{
                    title: 'BMI CALCULATOR',
                    headerStyle:{
                        backgroundColor: "#0A0C21",
                    },
                    headerTitleStyle:{
                        color: 'white'
                    }
                }}
            />
            <AppStack.Screen 
                name={ScreenName.BMI_RESULT}
                component={BmiResultScreen}
                options={{
                    title: 'BMI CALCULATOR',
                    headerStyle:{
                        backgroundColor: "#0A0C21",
                    },
                    headerTitleStyle:{
                        color: 'white'
                    }
                }}
            />
        </AppStack.Navigator>
    )
}

export default AppNavigator;