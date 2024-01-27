import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from './store';

export interface Student {
  name: string;
  surname: string;
  examens: Examen[];
}

export interface Examen {
  subject: string;
  rate: number;
}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;