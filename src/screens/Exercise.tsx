import { Box, Heading, HStack, Icon, Image, ScrollView, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import {Feather} from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

import BodySvg from '@assets/body.svg'
import SeriesSvg from '@assets/series.svg'
import RepetitionSvg from '@assets/repetitions.svg'
import { Button } from "@components/Button";

export function Exercise() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      
      <VStack px={8} bg="gray.600" pt={12}>
        <TouchableOpacity onPress={handleBack}>
          <Icon 
            as={Feather}
            name="arrow-left"
            color="green.500"
            size={6}
          />
        </TouchableOpacity>

        <HStack justifyContent="space-between" mt={4} mb={8} alignItems="center">
          <Heading color="gray.100" fontSize="lg" flexShrink={1}>Puxada frontal</Heading>
          <HStack>
            <BodySvg/>
            <Text color="gray.200" ml={1} textTransform="capitalize">Costas</Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView>
        <VStack p={8}>
          <Image 
            w="full"
            h={80}
            source={{uri: 'http://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg'}}
            alt="exercise"
            mb={3}
            resizeMode="cover"
            rounded="lg"
          />
          
          <Box bg="gray.600" rounded="md" pb={4} px={4}>
            <HStack alignItems="center" justifyContent="space-around" mb={6} mt={5}>
              <HStack alignItems="center">
                <SeriesSvg />
                <Text color="gray.200" ml={1} textTransform="capitalize">3 series</Text>
              </HStack>
              <HStack alignItems="center">
                <RepetitionSvg />
                <Text color="gray.200" ml={1} textTransform="capitalize">12 repeticiones</Text>
              </HStack>
            </HStack>

            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
