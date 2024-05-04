import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [{
        uid:1,
        name:'Mak',
        status:'Making your gpay smooth',
        imageUrl:'somewhere.png'
    },
    {
        uid:2,
        name:'Mak',
        status:'Making your gpay smooth',
        imageUrl:'somewhere.png'
    }]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
        scrollEnabled={false}
        style={styles.container}
      >
        {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image
                    source={{uri:imageUrl}}
                    style={styles.userImage}
                />
                <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
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
        paddingHorizontal:16,
        marginBottom:4
    },
    userCard:{
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor:'lightgreen',
        padding:8,
        borderRadius:8
    },
    userImage:{
        height:60,
        width:60,
        borderRadius:30,
        borderWidth:1,
        borderColor:'black',
        marginHorizontal:10,
        marginRight:14
    },
    userName:{
        fontSize:18,
        fontWeight:'600'
    },
    userStatus:{
        fontSize:14,
        color:'grey',
        marginTop:4
    },
})