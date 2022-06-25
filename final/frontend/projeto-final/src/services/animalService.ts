import { IAnimal } from "../interfaces";
import Api from "./api";

const getAnimals = () => Api.get<IAnimal[]>("/animal");

const newAnimal = (
  data: Pick<IAnimal, "name" | "species" | "gender" | "imgUrl" | "status">
) => Api.post("/animal/new", data);

export const animalService = {
  getAnimals,
  newAnimal,
};
