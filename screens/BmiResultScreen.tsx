import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import { Text, StyleSheet, View, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import { resultHash } from "../data/resultHash";

interface RootStackParamList extends ParamListBase{
    BmiResultScreen:{
        bmi: number;
    }
}

const BmiResultScreen: React.FC<NativeStackScreenProps<ParamListBase>> = ({
    route, navigation
})=>{

    // Variables
    let params = route.params as any;
    let bmi = params?.bmi || 30;

    // Helpers
    const getBmiDataKey: ()=> keyof typeof resultHash = ()=>{

        if (bmi < 18.5) {
            return 'Underweight'
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            return 'Normal'
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            return 'Overweight'
        }
        else{
            return 'Obese'
        }
    }

    // Styles
    let rangeHeaderStyle: StyleProp<TextStyle> = {
        color: resultHash[getBmiDataKey()].color,
        fontSize: 22,
        textTransform: 'uppercase',
        fontWeight: '600',
        letterSpacing: 2
    }

    // Handlers
    const handleRecalculate = ()=>{
        navigation.goBack();
    }

    return(
        <MainLayout>
            <View style={styles.container}>
                
                {/** Inner Main container */}
                <View style={styles.inner}>
                    <Text style={styles.header} >Your Result</Text>

                    {/** Result view */}
                    <View style={styles.result} >
                        <Text style={rangeHeaderStyle} >{ getBmiDataKey() }</Text>

                        <Text style={styles.value} >{ bmi }</Text>

                        <Text style={styles.rangeLabel} >
                            { getBmiDataKey() } BMI range:
                        </Text>

                        <Text style={styles.rangeText} >
                            { resultHash[getBmiDataKey()].range }
                        </Text>

                        <Text style={styles.description} >
                            { resultHash[getBmiDataKey()].text }
                        </Text>
                    </View>

                    {/** Button */}
                    <View style={{ marginTop: '5%' }}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={styles.btnStyle}
                            onPress={handleRecalculate}
                        >
                            <Text style={styles.btnTextStyle} >
                                Re-Calculate your BMI
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

    header:{
        color: 'white',
        fontSize: 40,
        fontWeight: '600'
    },

    result:{
        backgroundColor: "#1D1F32",
        // backgroundColor: 'red',
        flex: 1,
        marginVertical: '5%',
        borderRadius: 8,
        alignItems: 'center',
        paddingVertical: '10%'
    },

    btnStyle: {
        backgroundColor: "#D83456",
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 15
    },

    btnTextStyle: {
        color: "white",
        fontSize: 20,
        textTransform: 'uppercase'
    },

    value:{
        color: "white",
        fontSize: 90,
        fontWeight: '700',
        marginVertical: '10%'
    },

    rangeLabel:{
        color: '#8E8E98',
        fontSize: 20,
        fontWeight: "600",
        letterSpacing: 0.75
    },

    rangeText:{
        color: 'white',
        fontSize: 20,
        fontWeight: "600",
        letterSpacing: 0.75,
        marginTop: '3%'
    },

    description:{
        color: 'white',
        fontSize: 20,
        letterSpacing: 0.75,
        marginTop: '15%',
        textAlign: 'center'
    }
});

export default BmiResultScreen;