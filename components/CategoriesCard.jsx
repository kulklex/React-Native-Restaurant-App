import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'

export default function CategoriesCard({imgUrl, title}) {
  return (
    <TouchableOpacity className="relative mr-2">
        <Image source={{uri: urlFor(imgUrl).url(),}} className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white italic font-bold">{title}</Text>
    </TouchableOpacity>
  )
}