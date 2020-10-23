import React, {useState} from 'react';
import { SafeAreaView, View, Text, TouchableWithoutFeedback, TextInput, StyleSheet } from 'react-native';

const First = (props) => {
    const userNumber = 10;
    const [myNumber, setmyNumber] = useState(0);
    return (
        <SafeAreaView>
            <View>
                <Text>First</Text>
                <Text style={{ fontSize: 50 }}>userNumber number : {userNumber}</Text>
                <Text>{myNumber}</Text>
                <TouchableWithoutFeedback
                    onPress={() => props.navigation.navigate('SecondPage', { selectnumber: myNumber })}
                >
                    <Text>go</Text>
                </TouchableWithoutFeedback>
                <View style={styles.input}>
                    
                    <TextInput 
                    onChangeText={(num) => setmyNumber(num)}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default First;

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#e0e0e0',
        margin: 10,
        padding: 5,
        borderRadius: 10
    }
})