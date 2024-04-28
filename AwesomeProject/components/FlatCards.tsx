import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.RedCard]}>
            <Text>Red Card</Text>
        </View>
        <View style={[styles.card, styles.GreenCard]}>
            <Text>Green Card</Text>
        </View>
        <View style={[styles.card, styles.BlueCard]}>
            <Text>Blue Card</Text>
        </View>
        <View style={[styles.card, styles.GreyCard]}>
            <Text>Grey Card</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    container:{
        flex: 1,
        flexDirection: 'row'
    },
    card:{
        height: 100,
        width: 100,
        margin: 10,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    RedCard:{
        backgroundColor:'red'
    },
    GreenCard:{
        backgroundColor:'green'
    },
    BlueCard:{
        backgroundColor:'blue'
    },
    GreyCard:{
        backgroundColor:'grey'
    }
})