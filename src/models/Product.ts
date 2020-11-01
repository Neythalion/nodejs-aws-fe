import * as Yup from 'yup';

export type Product = {
  id: string,
  title: string,
  genre: string,
  price: number
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  genre: Yup.string(),
  price: Yup.number().required(),
});
