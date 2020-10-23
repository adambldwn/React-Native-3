import React from 'react';
import {SafeAreaView, View, Text, TouchableWithoutFeedback} from 'react-native';

const Second = (props) => {
    const selectnumber = props.route.params.selectnumber;
    return(
        <SafeAreaView>
            <View>
                <Text>Second</Text>
                <Text style={{fontSize: 50}}>select number : {selectnumber}</Text>
                <TouchableWithoutFeedback
                    onPress={() => props.navigation.goBack()}
                >
                    <Text>Back</Text>
                </TouchableWithoutFeedback>
            </View>
        </SafeAreaView>
    )
}

export default Second;