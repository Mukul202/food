import React from "react";
import { View,Text,StyleSheet } from "react-native";

import {Feather} from "@expo/vector-icons";
import { TextInput } from "react-native";

const SearchBar = ({term,onTermChange,onTermSubmit}) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput autoCorrect={false} autoCapitalize="none" style={styles.inputStyle} placeholder="Search" value={term} onChangeText={newTerm => onTermChange(newTerm)} 
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  )
}

const styles=StyleSheet.create({
  background:{
    backgroundColor:'#F0EEEE',
    height:50,
    borderRadius:5,
    marginHorizontal:15,
    flexDirection:'row',
    marginTop:10,
    marginBottom:10,
  },
  inputStyle:{
    flex:1,
    fontSize:18,
  },
  iconStyle:{
    fontSize:35,
    alignSelf:'center',
    marginHorizontal:15,
  }
});

export default SearchBar;