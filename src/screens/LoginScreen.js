import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isError, setIsError] = useState(false)


    const handleUsernameChange = (text) => {
        setUsername(text)
    }

    const handlePasswordChange = (text) => {
        setPassword(text)
    }

    const handleLoginClick = () => {
        if(password === "12345678"){
            navigation.navigate("Home", username)
            setIsError(false)
        }else{
            setIsError(true)
        }
    }



    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titleText}>Code Challenge</Text>
                <Text style={styles.subTitleText}>Glints x Binar</Text>
            </View>

            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    {/* <MaterialCommunityIcons name='account-circle' color='blue' size={40} /> */}
                    <View>
                        <Text style={styles.labelText}>Username/Email</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Masukkan Nama User/Email'
                            onChangeText={handleUsernameChange}
                        // Kode di sini
                        />
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    {/* <MaterialCommunityIcons name='lock' color='blue' size={40} /> */}
                    <View>
                        <Text style={styles.labelText}>Password</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Masukkan Password'
                            onChangeText={handlePasswordChange}
                            // Kode di sini
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <Text style={ isError ? styles.errorText : styles.hiddenErrorText}>Password Salah</Text>
                {/* Kode di sini */}
                <Button on title='Login' onPress={ () => handleLoginClick() } />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: 'purple',
        textAlign: 'center',
    },
    subTitleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'purple',
        alignSelf: 'flex-end',
        marginBottom: 16
    },
    formContainer: {
        justifyContent: 'center'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 16
    },
    labelText: {
        fontWeight: 'bold'
    },
    textInput: {
        width: 300,
        backgroundColor: 'white'
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginBottom: 16,
    },
    hiddenErrorText: {
        color: 'transparent',
        textAlign: 'center',
        marginBottom: 16,
    }
});
