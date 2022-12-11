import { Platform } from "react-native";
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import LogoSvg from "@assets/logo.svg";
import backgroundImg from "@assets/background.png";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function SignUp() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      backgroundColor="gray.700"
    >
      <VStack
        flex={1}
        bg="gray.700"
        px={10}
        pb={Platform.OS === "ios" ? 40 : 16}
      >
        <Image
          source={backgroundImg}
          defaultSource={backgroundImg}
          alt="background"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />

          <Text color="gray.100" fontSize="sm" fontFamily="body">
            Entrene su mente y su cuerpo
          </Text>
        </Center>
        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Cree su cuenta
          </Heading>

          <Input placeholder="Nombres y apellidos" autoCorrect={false} />
          <Input
            placeholder="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Input placeholder="Contraseña" secureTextEntry />

          <Button title="Crear e ingresar" />
        </Center>

        <Button
          onPress={handleGoBack}
          title="Volver para iniciar sesión"
          variant="outline"
          mt={24}
        />
      </VStack>
    </ScrollView>
  );
}
