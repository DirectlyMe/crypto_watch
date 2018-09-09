import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

const CurrencyListItem = () => (
  <View style={styles.itemContainer}>
    <Text>List Item</Text>
  </View>
)

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
  },
})

export default CurrencyListItem