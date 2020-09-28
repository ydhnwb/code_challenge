import React from 'react'
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from "react-native";

const DEVICE = Dimensions.get('window')


export const ListItemComponent = ({ product, onBuyClick }) => {
    const currencyFormat = (num) => {
        return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    };

    const buy = (e) => {
        e.preventDefault();
        onBuyClick(product)
    }


    return (
        <View style={styles.itemContainer}>
            <Image
                source={{ uri: product.gambaruri }}
                style={styles.itemImage}
            />
            <Text style={styles.itemName}>{product.nama}</Text>
            <Text style={styles.itemPrice}>{currencyFormat(parseInt(product.harga))}</Text>
            <Text style={styles.itemStock}>
                {
                    product.stock > 0 ? `Sisa stok: ${product.stock}` : "Stok habis"
                }
            </Text>
            {
                product.stock > 0 ?             
                <TouchableOpacity style={styles.itemButton} onPress={buy}>
                    <Text style={styles.buttonText}>BELI</Text>
                </TouchableOpacity>
                :
                null
            }

        </View>
    )
}


const styles = StyleSheet.create({
    itemContainer: {
        margin: 8,
        width: DEVICE.width * 0.44,
        justifyContent: 'center',
    },
    itemImage: {
        height: 80,
        width: 160
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center'
    },
    itemPrice: {
        color: "blue",
        fontSize: 16,
        textAlign: 'center'
    },
    itemStock: {
        textAlign: 'center'
    },
    itemButton: {
        alignItems: "center",
        backgroundColor: "blue",
        padding: 10,
        marginHorizontal: 20
    },
    buttonText: {
        color: 'white'
    }
})