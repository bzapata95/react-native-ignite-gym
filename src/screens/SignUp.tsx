import { Alert, Platform } from "react-native";
import { VStack, Image, Text, Center, Heading, ScrollView, useToast } from "native-base";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

import LogoSvg from "@assets/logo.svg";
import backgroundImg from "@assets/background.png";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from 'react-hook-form';
import { api } from "@services/api";
import axios from "axios";
import { AppError } from "@utils/AppError";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

const signUpSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required').email('Email is invalid'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  password_confirm: yup.string().required('Password confirm is required').oneOf([yup.ref('password'), null], 'Passwords must match')
})

export function SignUp() {
  const toast = useToast();
  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>(
    {
      resolver: yupResolver(signUpSchema),
    }
  );

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleSignUp(data: FormDataProps) {
    try {
      const response = await api.post('/users', data);
      
      console.log(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ?  error.message : 'No fue posible crear una cuenta interte más tarde';
      toast.show({title, placement: 'top', bgColor: 'red.500'});
    }

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

          <Controller 
            control={control}
            name="name"
            render={({field: {onChange, value,}}) => (
              <Input 
                placeholder="Nombres y apellidos" 
                autoCorrect={false} 
                onChangeText={onChange}
                value={value}
                errorMessages={errors.name?.message}
              />
            )}
          />

          <Controller 
            control={control}
            name="email"
            render={({field: {onChange, value,}}) => (
              <Input
                placeholder="Correo electrónico"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={onChange}
                value={value}
                errorMessages={errors.email?.message}
              />
            )}
          />

          <Controller 
            control={control}
            name="password"
            render={({field: {onChange, value,}}) => (
              <Input 
                placeholder="Contraseña" 
                secureTextEntry 
                onChangeText={onChange}
                value={value}
                errorMessages={errors.password?.message}
              />
            )}
          />
          <Controller 
            control={control}
            name="password_confirm"
            render={({field: {onChange, value,}}) => (
              <Input 
                placeholder="Confirmar contraseña" 
                secureTextEntry 
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType="send"
                errorMessages={errors.password_confirm?.message}
              />
            )}
          />


          <Button title="Crear e ingresar" onPress={handleSubmit(handleSignUp)} />
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
