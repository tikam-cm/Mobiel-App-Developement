import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <ScrollView style={styles.container}>
        <Text style={styles.headingText}>Trending Places</Text>
        <View style={[styles.card, styles.cardElevated]}>
            <Image
                source={{
                    uri:'https://miro.medium.com/v2/resize:fit:603/1*fYA-b-KA9UUqPL2OsDYkQw.png'
                }}

                style={styles.cardImage}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Hawa Mahal</Text>
                <Text style={styles.cardLabel}>Pink City</Text>
                <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers.</Text>
                <Text style={styles.cardFooter}>12 mins away</Text>
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{},
    headingText:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    card:{},
    cardElevated:{},
    cardImage:{
        height: 180
    },
    cardBody:{},
    cardTitle:{},
    cardLabel:{},
    cardDescription:{},
    cardFooter:{},
})