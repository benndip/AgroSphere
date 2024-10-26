import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const CameraList = () => {
  const [images, setImages] = useState<(string | null)[]>(Array(6).fill(null)); // Initialize 6 camera slots

  // Function to pick or capture an image
  const selectImage = async (index: number) => {
    // Request permission to access media library
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert("Permission to access gallery is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const newImages = [...images];
      newImages[index] = result.assets[0].uri; // Store the image URI at the selected index
      setImages(newImages);
    }
  };

  // Render each camera slot item
  const renderCameraItem = ({ item, index }: { item: string | null; index: number }) => (
    <TouchableOpacity
      className="w-24 h-24 bg-gray-100 rounded-lg justify-center items-center m-2 border border-gray-300"
      onPress={() => selectImage(index)}
    >
      {item ? (
        <Image source={{ uri: item }} className="w-full h-full rounded-lg" />
      ) : (
        <View className="justify-center items-center">
          <Ionicons name="camera-outline" size={40} color="gray" />
          <Text className="text-xs text-gray-500 mt-1">Add Photo</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 p-5 bg-white">
      <Text className="text-2xl font-bold mb-5">Camera Items</Text>
      {/* Render 6 camera slots using FlatList */}
      <FlatList
        data={images}
        numColumns={3} // 3 columns to display
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderCameraItem}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </View>
  );
};

export default CameraList;
