import { SafeAreaView, View, Text, Button } from 'react-native'
import React from 'react'

export default function SettingsScreen(props) {

    const { navigation } = props;

    const goToPage = (pageName) => {
        navigation.navigate(pageName);
    }

    return (
        <SafeAreaView>
            <Text>Estamos en SettingsScreen</Text>
            <Button onPress={() => goToPage('Home')} title='Ir a home' />
        </SafeAreaView>
    )
}