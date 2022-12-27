import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, Heading, ScrollView, Skeleton, Text, VStack } from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

const PHOTO_SIZE= 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

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
            <UserPhoto source={{uri: 'https://github.com/bzapata95.png'}} alt="user" size={PHOTO_SIZE} />
          )}

          <TouchableOpacity>
            <Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>Alterar foto</Text>
          </TouchableOpacity>

          <Input placeholder="Nombre" bg="gray.600" />
          <Input value="bmzc95@gmail.com" bg="gray.600" isDisabled />
        </Center>

        <VStack px={10} mt={12} mb={9}>
            <Heading color="gray.200" fontSize="md" mb={2}>Alterar contraseña</Heading>

            <Input placeholder="Contraseña antigua" bg="gray.600" secureTextEntry />
            <Input placeholder="Nueva contraseña" bg="gray.600" secureTextEntry />
            <Input placeholder="Confirmar nueva contraseña" bg="gray.600" secureTextEntry />

            <Button title="Actualizar" mt={4}/>
            
        </VStack>
      </ScrollView>
    </VStack>
  );
}
