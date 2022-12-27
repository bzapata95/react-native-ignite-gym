import { Image, IImageProps } from "native-base";

type Props = IImageProps & {
  size?: number;
}

export function UserPhoto({size = 16, ...rest}: Props) {
  return (
    <Image w={size} h={size} rounded="full" borderColor="gray.400" borderWidth={2} {...rest}/>
  )
}