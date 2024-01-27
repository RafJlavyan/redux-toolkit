import StudentListReducer from "../features/studentlist/StudentList.slice";
import SubjectListReducer from "../features/subjectlist/SubjectList.slice";
import NavbarReducer from "../features/navbar/Navbar.slice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const root = combineReducers({
  students: StudentListReducer,
  subjects: SubjectListReducer,
  navbar: NavbarReducer,
});

export const store = configureStore({ reducer: root });
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
