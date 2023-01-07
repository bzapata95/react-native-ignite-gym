import { Heading, HStack, Icon, Stack, Text, VStack } from "native-base";
import {MaterialIcons} from '@expo/vector-icons'

import { UserPhoto } from "./UserPhoto";
import { TouchableOpacity } from "react-native";

export function HomeHeader() {
  return (
    <HStack bg='gray.600' pt={16} pb={5} px={8} alignItems="center" justifyContent="space-between">

      <HStack space={4} alignItems="center">
        <UserPhoto source={{uri: 'https://github.com/bzapata95.png'}} alt="img-avatar" />
        <VStack>
          <Text color='gray.100' fontSize="md">Hola</Text>

          <Heading color='gray.100' fontSize="md" fontFamily="heading">Bryan</Heading>
        </VStack>

      </HStack>

      <TouchableOpacity>
        <Icon 
          as={MaterialIcons} 
          name="logout" color="gray.200"
          size={7}
        />
      </TouchableOpacity>
    </HStack>
  )
}