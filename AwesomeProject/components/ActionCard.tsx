import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsites(websiteLink: string) {
        Linking.openURL(websiteLink);
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>What's new Javascript 21 - ES12</Text>
        </View>
        <Image
            source={{
                uri:'https://blog.appsignal.com/images/blog/2023-10/nodejs-21.jpg'
            }}
            style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                Node.js v21, the latest Node update, is now available as a stable release. It supersedes v20 in the 'Current' release line, which has been promoted to the long-term support (LTS) channel as of 24 October.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity
                onPress={() => openWebsites('https://blog.appsignal.com/2023/10/25/whats-new-in-nodejs-21.html')}
            >
                <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => openWebsites('https://blog.appsignal.com/2023/10/25/whats-new-in-nodejs-21.html')}
            >
                <Text style={styles.socialLinks}>Follow Me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        flex:1,
        alignContent:'center',
        alignItems:'center',
        fontWeight:'bold'
    },
    card:{
        width:350,
        height:270,
        borderRadius:6,
        marginHorizontal: 13,
        marginVertical: 12,
    },
    elevatedCard:{
        backgroundColor:'orange',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.4
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        fontSize:16,
        fontWeight:'600',
        color:'white'
    },
    cardImage:{
        height:100
    },
    bodyContainer:{
        padding:10,
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    socialLinks:{
        fontSize:14,
        color:'white',
        backgroundColor:'#333',
        paddingHorizontal:10,
        paddingVertical:4,
        borderRadius:6,
        fontWeight:'bold'
    }
})