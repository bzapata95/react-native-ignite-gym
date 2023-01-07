import { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { Center, Heading, ScrollView, Skeleton, Text, VStack, useToast } from "native-base";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";

const PHOTO_SIZE= 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const [photo, setPhoto] = useState<string>('https://github.com/bzapata95.png');

  const toast = useToast();

  async function handleUserPhotoSelect() {
    try {
      setPhotoIsLoading(true);
      const photoSelected =  await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.Images,
         quality: 1,
         aspect: [4,4],
         allowsEditing: true,
         allowsMultipleSelection: false,
       });
   
       if (photoSelected.canceled) {
         return;
       }

       if(photoSelected.assets.length > 0) {
        const {uri, fileSize} = photoSelected.assets[0];
        const photoInfo = await FileSystem.getInfoAsync(uri);

        if(!!fileSize && fileSize / 1024/1024 > 5){
          toast.show({
            title: 'La imagen es muy grande escoga una de 5mb',
            placement: "top",
            backgroundColor: 'red.500',
          })
          return;
        }

         setPhoto(uri);
       }
   
    } catch (error) {
      console.log(error);
    }finally{
      setPhotoIsLoading(false)
    }


  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil"/>

      <ScrollView>
        <Center mt={5} px={10}>
          {photoIsLoading ? (
            <Skeleton 
              w={PHOTO_SIZE} 
              h={PHOTO_SIZE} 
              rounded="full"
              startColor="gray.400"
              endColor="gray.300"
            />
          ): (
            <UserPhoto source={{uri: photo}} alt="user" size={PHOTO_SIZE} />
          )}

          <TouchableOpacity onPress={handleUserPhotoSelect}>
            <Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>Alterar foto</Text>
          </TouchableOpacity>

          <Input placeholder="Nombre" bg="gray.600" />
          <Input value="bmzc95@gmail.com" bg="gray.600" isDisabled />
        </Center>

        <VStack px={10} mt={12} mb={9}>
            <Heading color="gray.200" fontSize="md" mb={2} fontFamily="heading">Alterar contraseña</Heading>

            <Input placeholder="Contraseña antigua" bg="gray.600" secureTextEntry />
            <Input placeholder="Nueva contraseña" bg="gray.600" secureTextEntry />
            <Input placeholder="Confirmar nueva contraseña" bg="gray.600" secureTextEntry />

            <Button title="Actualizar" mt={4}/>
            
        </VStack>
      </ScrollView>
    </VStack>
  );
}
