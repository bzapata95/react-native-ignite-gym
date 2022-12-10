import { Platform } from "react-native";
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import LogoSvg from "@assets/logo.svg";
import backgroundImg from "@assets/background.png";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
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
            Inicio de sesión
          </Heading>

          <Input
            placeholder="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Input placeholder="Contraseña" secureTextEntry />

          <Button title="Ingresar" />
        </Center>

        <Center mt={24}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
            No tienes una cuenta?
          </Text>
          <Button title="Crear cuenta" variant="outline" />
        </Center>
      </VStack>
    </ScrollView>
  );
}
