/* eslint-disable space-infix-ops */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
 import { StyleSheet,View, Text, Pressable, Image, ScrollView } from 'react-native';



 const images = [
    {
        id: '0',
        image:'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/625798/1.jpg?7823',
        name: 'Shoe',
    },
    {
        id: '1',
        image:'https://fragrances.com.ng/media/catalog/product/cache/4cf9e516177489ae500dec59d26ccb3b/1/4/148_74392627_1.jpg',
        name: 'Perfume',
    },
    {
        id: '2',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Casio_OCEANUS_OCW-S1350PC-1AJR_01.JPG/440px-Casio_OCEANUS_OCW-S1350PC-1AJR_01.JPG',
        name: 'wrist watch',
    },
    {
        id: '3',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Charvet_shirt.jpg/440px-Charvet_shirt.jpg',
        name: 'shirt',
    },
];


 const Cart = () => {
    const [cart, setCart] = useState([]);
    return (
       <>
       <ScrollView>
                <Text style={styles.text} >PRODUCTS</Text>
                {images.map((item) => (
                    <Pressable
                        key={item.id}
                        style={{ flexDirection: 'row', alignItems: 'center'}}
                        >
                        <View style={{ margin:10}}>
                            <Image
                                style={{ width: 100, height: 100, borderRadius: 8}}
                                source={{ uri: item.image}}
                            />
                        </View>

                        <View>
                            <Text style={{ fontWeight: 'bold'}}>{item.name}</Text>
                            {cart.includes(item) ? (
                                  <Pressable onPress={() => setCart(cart.filter((x) => x.id !== item.id))}>
                                  <Text
                                      style={{
                                          borderColor: 'gray',
                                          borderWidth: 1,
                                          marginVertical: 10,
                                          padding: 5,
                                      }}
                                  > REMOVE FROM CART
                                  </Text>
                              </Pressable>
                            ):(
                                <Pressable onPress={() => setCart([...cart,item])}>
                                <Text
                                    style={{
                                        borderColor: 'gray',
                                        borderWidth: 1,
                                        marginVertical: 10,
                                        padding: 5,
                                    }}
                                > ADD TO CART
                                </Text>
                            </Pressable>
                            )}
                        </View>


                    </Pressable>

            ))}

                <View style={{ height: 1, borderColor: 'gray', borderWidth: 2}} />
                <Text style={styles.text1} >Cart Item(s) Added:</Text>
                {cart.map((item) => (
                    <View>
                        <Image style={{ width: 100, height: 100, borderRadius: 8}} source={{ uri: item.image}}/>
                        <Text>{item.name}</Text>
                    </View>
                ))}
            </ScrollView>
          </>
    );
 };

 const styles = StyleSheet.create({
    container: {
        flex: 1,
    backgroundColor: '#fff',
    },
    text: {
        color: 'blue',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text1: {
        color: 'blue',
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'center',
        padding: 10,
    },
 });

 export default Cart;
