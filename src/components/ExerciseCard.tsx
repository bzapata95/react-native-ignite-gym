import { Heading, HStack, Image, Text, VStack, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps  } from "react-native";
import {Entypo} from '@expo/vector-icons'

type Props = TouchableOpacityProps;

export function ExerciseCard ({...rest}: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack alignItems="center" bg="gray.500" p={2} pr={4} rounded="md" mb={3}>
        <Image source={{uri: 'http://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg'}}  alt="exercise"
          w={16}
          h={16} 
          rounded="md"
          resizeMode="cover"
          mr={4}
        />
        <VStack flex={1}>
          <Heading
            fontSize="lg"
            color="white"
            fontFamily="heading"
          >Remada unilateral</Heading>

          <Text
            fontSize="sm"
            color="gray.200"
            mt={1}
            numberOfLines={2}
          >
            3 series x 12 repeticiones lorem
          </Text>
        </VStack>

        <Icon 
          as={Entypo}
          name="chevron-thin-right"
          color="gray.300"
        />
      </HStack>
    </TouchableOpacity>
  )
}