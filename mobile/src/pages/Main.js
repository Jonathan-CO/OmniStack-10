import React, {useEffect, useState} from 'react';
import MapView, {Marker, Callout} from 'react-native-maps';
import {StyleSheet, Image, View, Text} from 'react-native';
import {requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location'


function Main(){
    const [currentRegion, setCurrentRegion] = useState(null);
    // const [longitude, setLongitude] = useState(null);
    useEffect(()=>{
        async function loadInitialPosition(){
            const {granted} = await requestPermissionsAsync(); // retorna um objeto com várias informações (canAskAgain, expires, granted, status, android, ios)
            if(granted){
                const {coords} = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });
                const {latitude, longitude} = coords;
                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                })
            }
        }
        loadInitialPosition();

    }, []);


    if(!currentRegion){
        return null;
    }

    return (
        <MapView initialRegion={currentRegion} style={styles.map}>
           <Marker coordinate={{latitude: -18.2375635, longitude: -43.6139873}}>
               <Image style={styles.image} source={{uri: 'https://avatars3.githubusercontent.com/u/31313701?s=460&v=4'}} />
               <Callout>
                   <View style={styles.callout}>
                       <Text style={styles.devName}>Jonathan da Cunha</Text>
                       <Text style={styles.devBio}>Bio de jonathan da Cunha Oliveira</Text>
                       <Text style={styles.devTechs}> ReacJS, React Native, NodeJS</Text>
                   </View>
               </Callout>
           </Marker>
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    image:{
        width: 34,
        height: 34,
        borderRadius: 17,
        borderWidth: 4,
        borderColor: '#FFF'
    },
    callout:{
        width:260,
    },
    devName:{
        fontWeight: 'bold',
        fontSize:16,
    },
    devBio:{
        color: '#666',
        marginTop: 5,
    },
    devTechs:{
        marginTop: 5
    }
})

export default Main;