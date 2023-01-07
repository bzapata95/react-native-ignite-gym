import { Input as NativeBaseInput, IInputProps, FormControl } from "native-base";

type InputProps = IInputProps & {
  errorMessages?: string | null;
};

export function Input({ errorMessages, isInvalid, ...rest }: InputProps) {
  const invalid = !!errorMessages || isInvalid;

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInput
        bg="gray.700"
        h={14}
        px={4}
        borderWidth={1}
        borderColor="gray.700"
        fontSize="md"
        color="white"
        fontFamily="body"
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: 'red.500'
        }}
        placeholderTextColor="gray.300"
        _focus={{
          bg: "gray.700",
          borderWidth: 1,
          borderColor: "green.500",
        }}
        {...rest}
      />

      <FormControl.ErrorMessage>
        {errorMessages}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
