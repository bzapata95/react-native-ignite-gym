import { useState } from "react";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomerHeader";
import { VStack, Text, HStack, FlatList, Heading } from "native-base";
import { ExerciseCard } from "@components/ExerciseCard";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function Home() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  
  const [groups, setGroups] = useState(['Pecho', 'Piernas', 'Hombro', 'Triceps']);
  const [groupSelected, setGroupSelected] = useState('Pecho');
  const [exercises, setExercises] = useState(['Puxada frontal', 'Remada curvada', 'Remada unilateral', 'Levantamento terras']);

  function handleOpenExerciseDetails() {
    navigation.navigate('exercise')
  }

  return (
    <VStack flex={1}>
      <HomeHeader />

        <FlatList 
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({item}) => (
            <Group name={item} isActive={groupSelected === item} onPress={() => setGroupSelected(item)}/>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{
            px: 8,
          }}
          my={10}
          maxHeight={10}
          minHeight={10}
        />

        <VStack flex={1} px={8}>

          <HStack justifyContent="space-between" mb={5}>
            <Heading color="gray.200" fontSize="md">
              Ejercicios
            </Heading>

            <Text color="gray.200" fontSize="sm">{exercises.length}</Text>
          </HStack>
          
          <FlatList 
            data={exercises}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <ExerciseCard onPress={handleOpenExerciseDetails}/>
            )}
            showsVerticalScrollIndicator={false}
            _contentContainerStyle={{
              paddingBottom: 20
            }}
          />
         

        </VStack>
      
    </VStack>
  );
}
