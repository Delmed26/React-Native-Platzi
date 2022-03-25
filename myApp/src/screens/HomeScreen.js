import { SafeAreaView, View, Text, Button } from 'react-native'
import React from 'react'

export default function HomeScreen(props) {
    const { navigation } = props;

    const goToSettings = () => {
        navigation.navigate('Settings');
    }

    return (
        <SafeAreaView>
            <Text>Estamos en el HomeScreen</Text>
            <Button onPress={goToSettings} title="Ir a ajustes" />
        </SafeAreaView>
    )
}