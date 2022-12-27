import { useState } from "react";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomerHeader";
import { VStack, Text, HStack, FlatList, Heading } from "native-base";
import { ExerciseCard } from "@components/ExerciseCard";

export function Home() {
  
  const [groups, setGroups] = useState(['Pecho', 'Piernas', 'Hombro', 'Triceps']);
  const [groupSelected, setGroupSelected] = useState('Pecho');
  const [exercises, setExercises] = useState(['Puxada frontal', 'Remada curvada', 'Remada unilateral', 'Levantamento terras']);

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
              <ExerciseCard />
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
