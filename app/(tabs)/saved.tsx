import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '@/constants/colors'

const saved = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.primary}}>
      <Text>saved</Text>
    </View>
  )
}

export default saved

const styles = StyleSheet.create({})