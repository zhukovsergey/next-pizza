import { _ingredients } from './../prisma/constants';
import { axiosInstance } from './instance';
import { ApiRoutes } from './constants';
import { Ingredient } from '@prisma/client';

export const getAll = async (): Promise<Ingredient[]> => {
  try {
    const  {data}  = await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS);
    
    return data
  } catch (error) {
    console.log(error);
    return [];
  }
  
  
};