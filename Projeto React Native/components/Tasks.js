import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Tasks = (props) => {

    return(
        <View style={styles.itens}>
            <View style={styles.itensLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itensText}>{props.text}</Text>
            </View>
            <View style={styles.circular}>

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    itens:{
        backgroundColor:'#FFF',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: "space-between",
        marginBottom:20,
        marginTop:20,
    },
    itensLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap:'wrap',
    },
    square:{
        width:24,
        height:24,
        backgroundColor:'#526D82',
        opacity:0.4,
        marginRight:5,
    },
    itensText:{},
    circular:{},

});

export default Tasks;