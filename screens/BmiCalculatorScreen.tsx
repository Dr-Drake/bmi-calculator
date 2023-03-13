import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import { Text, StyleSheet, View } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import GenderButtonSelect from '../components/GenderButtonSelect';


const BmiCalculatorScreen: React.FC<NativeStackScreenProps<ParamListBase>> = ()=>{

    return(
        <MainLayout>
            <View style={styles.container}>
                
                {/** Inner Main container */}
                <View style={styles.inner}>

                    {/** Gender Button Group */}
                    <View style={{ gap: 10, flexDirection: 'row'}}>
                        <GenderButtonSelect/>
                        <GenderButtonSelect gender='female'/>
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
});

export default BmiCalculatorScreen