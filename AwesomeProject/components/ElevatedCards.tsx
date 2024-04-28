import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.elevatedCard]}>

        </View>
        <View style={[styles.card, styles.elevatedCard]}>

        </View>
        <View style={[styles.card, styles.elevatedCard]}>

        </View>
        <View style={[styles.card, styles.elevatedCard]}>

        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    container:{
        flex: 1,
    },
    card:{
        flex: 1,
        height: 100,
        width: 100,
        margin: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    elevatedCard:{
        
        backgroundColor:'grey',
    }
})