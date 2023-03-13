import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import { Text, StyleSheet, View, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import GenderButtonSelect from '../components/GenderButtonSelect';
import SliderSelect from '../components/SliderSelect';
import CounterSelect from '../components/CounterSelect';
import { ScreenName } from '../types/ScreenName';


const BmiCalculatorScreen: React.FC<NativeStackScreenProps<ParamListBase>> = ({
    navigation
})=>{

    // type
    interface FormState{
        gender?: 'male' | 'female';
        height?: number;
        weight?: number;
        age?: number;
    }

    // State
    const  [formState, setFormState] = React.useState<FormState>({})

    // Helpers
    const isButtonDisabled = ()=>{
        return !(formState.gender && formState.age && formState.height
        && formState.weight)
    }

    // Styles
    const btnStyle: StyleProp<ViewStyle> = {
        backgroundColor: isButtonDisabled() ? "#D3D3D3" : "#D83456",
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 15
    }
    let btnTextStyle: StyleProp<TextStyle> = {
        color: "white",
        fontSize: 20,
        textTransform: 'uppercase'
    }

    // Handlers
    const handleChange = (key: keyof FormState, value: any)=>{
        setFormState((prevState)=>({
            ...prevState,
            [key]: value
        }))
    }

    const handlePress = (value: 'male' | 'female')=>{
        setFormState((prevState)=>({
            ...prevState,
            gender: prevState.gender === value ? undefined : value
        }))
    }

    const calculateBmi = () => {
        let { weight, height } = formState;

        if (weight && height) {
            let heightMeters = height/100;
            const bmiResult = (weight / (heightMeters * heightMeters)).toFixed(2);
            console.log(bmiResult);
            navigation.navigate(ScreenName.BMI_RESULT, { bmi: Number.parseInt(bmiResult) });
        }
       
    };

    return(
        <MainLayout>
            <View style={styles.container}>
                
                {/** Inner Main container */}
                <View style={styles.inner}>

                    {/** Gender Button Group */}
                    <View style={{ gap: 10, flexDirection: 'row'}}>
                        <GenderButtonSelect 
                            onPress={()=> handlePress('male')}
                            selected={formState.gender === 'male'}
                        />
                        <GenderButtonSelect 
                            gender='female' 
                            onPress={()=> handlePress('female')}
                            selected={formState.gender === 'female'}
                        />
                    </View>

                    {/** Height Slider */}
                    <View style={{ marginVertical: '5%' }}>
                        <SliderSelect onValueChange={(value)=> handleChange('height', value)}/>
                    </View>

                    {/** Weight and Age Counters */}
                    <View style={{ gap: 10, flexDirection: 'row' }}>
                        <CounterSelect
                            label='weight'
                            suffix='kg'
                            defaultValue={60}
                            onValueChange={(value)=> handleChange('weight', value)}
                        />
                        <CounterSelect 
                            label='age'
                            onValueChange={(value)=> handleChange('age', value)}
                        />
                    </View>

                    {/** Button */}
                    <View style={{ marginTop: '10%' }}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={btnStyle}
                            disabled={isButtonDisabled()}
                            onPress={calculateBmi}
                        >
                            <Text style={btnTextStyle} >
                                Calculate your BMI
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </MainLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#080A1C",
        flex: 1,
        padding: '3%'
    },

    inner: {
        backgroundColor: "#0A0C21",
        flex: 1,
        padding: 10
    },

    btn:{

    }
});

export default BmiCalculatorScreen