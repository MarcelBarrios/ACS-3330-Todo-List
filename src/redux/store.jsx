import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import filtersReducer from "./filtersSlice";
import { loadState, saveState } from "./localStorage";
import { FILTERS } from "./filtersSlice";

const preloadedState = loadState() || { todos: [], filters: FILTERS.ALL };
console.log("Preloaded State in store:", preloadedState);

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        filters: filtersReducer,
    },
    preloadedState,
});

store.subscribe(() => {
    saveState(store.getState());
});