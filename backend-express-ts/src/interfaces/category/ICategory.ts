import { Identifiable } from "..";

export interface ICategory extends Identifiable {
  categoryName: string;
  categoryType: string;
}