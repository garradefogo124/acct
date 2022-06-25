import { useCallback, useState } from "react";
import { IAnimal } from "../interfaces";
import { animalService } from "../services/animalService";

export const useAnimal = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  const getAnimals = useCallback(async () => {
    const { status, data } = await animalService.getAnimals();

    if (status !== 200) throw new Error();

    setAnimals(data);
  }, []);

  const newAnimal = useCallback(
    async (
      data: Pick<IAnimal, "name" | "species" | "gender" | "imgUrl" | "status">
    ) => {
      const { status } = await animalService.newAnimal(data);

      if (status !== 201) throw new Error();
    },
    []
  );

  return {
    animals,
    getAnimals,
    newAnimal,
  };
};
