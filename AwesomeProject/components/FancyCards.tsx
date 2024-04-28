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
    container:{
        flex: 1,
    },
    headingText:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    card:{
        height:360,
        width:350,
        marginHorizontal:10,
        marginVertical:10,
        borderRadius:6
    },
    cardElevated:{
        backgroundColor:'white',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage:{
        height: 180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardTitle:{
        color:'black',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4
    },
    cardLabel:{
        fontSize:14,
        color:'grey',
        marginBottom:6
    },
    cardDescription:{
        fontSize:12,
        color:'black',
        marginBottom:12
    },
    cardFooter:{
        fontSize:14,
        color:'grey',
        marginBottom:6
    },
})