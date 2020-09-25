import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TextInput,
    Dimensions
} from "react-native";
import { ListItemComponent } from '../components/ListItemComponent';

const DEVICE = Dimensions.get('window')


import data from './../utils/data.json';


export const HomeScreen = ({ route, navigation }) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const [products, setProducts] = useState(data["produk"])
    const [filteredProducts, setFilteredProducts] = useState(data["produk"]);

    const onBuyClick = (product) => {
        const foundProduct = products.find( p => p.id == product.id)
        foundProduct.stock--
        setTotalPrice(totalPrice+parseInt(foundProduct.harga))
    }

    const onSearchQueryChange = (q) => {
        if(q == ''){
            setFilteredProducts(products);
        }else{
            const filtered = products.filter( (p) => p.nama.toLowerCase().includes(q.toLowerCase()));
            console.log(filtered)
            setFilteredProducts(filtered);
        }
    }


    return (
        <View style={styles.container}>
            <View style={{ minHeight: 50, width: DEVICE.width * 0.88 + 20, marginVertical: 8 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>Hai, {route.params}
                        {/* //? #Soal 1 Tambahan, Simpan userName yang dikirim dari halaman Login pada komponen Text di bawah ini */}
                        <Text style={styles.headerText}></Text>
                    </Text>

                    {/* //? #Soal Bonus, simpan Total Harga dan state.totalPrice di komponen Text di bawah ini */}
                    <Text style={{ textAlign: 'right' }}>Total Harga{'\n'}
                        <Text style={styles.headerText}>{totalPrice}</Text>
                    </Text>
                </View>
                <View>

                </View>
                <TextInput
                    onChangeText={onSearchQueryChange}
                    style={{ backgroundColor: 'white', marginTop: 8 }}
                    placeholder='Cari barang..'
                />
            </View>

            {/* 
          //? #Soal No 2 (15 poin)
          //? Buatlah 1 komponen FlatList dengan input berasal dari data.json
          //? dan pada prop renderItem menggunakan komponen ListItem -- ada di bawah --
          //? dan memiliki 2 kolom, sehingga menampilkan 2 item per baris (horizontal)
          // Lanjutkan di bawah ini!
          */}

            <FlatList
                numColumns="2"
                keyExtractor={(item) => item.id }
                data={filteredProducts}
                renderItem={ ( {item} ) => (
                    <ListItemComponent onBuyClick={onBuyClick} product={item}/>
                )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    //? Styling di sini
    itemContainer: {
        width: DEVICE.width * 0.44,
        justifyContent: 'center',
    },
})