import React from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() == 'dark';
    return (
        <View style={styles.container}>
            <Text style={ isDarkMode ? styles.whiteText : styles.darkText }>Hello World</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    darkText:{
        color: 'black'
    },
    whiteText:{
        color: 'white'
    }
})

export default AppPro;