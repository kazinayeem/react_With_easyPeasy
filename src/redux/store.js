import { action, createStore, thunk, persist } from "easy-peasy";

import axios from "axios";

export const store = createStore(
  persist({
    count: 0,
    data: [],
    add: action((state, payload) => {
      state.count += payload;
    }),
    remove: action((state, payload) => {
      state.count -= payload;
    }),

    data: action((state, payload) => {
      state.data = payload;
    }),

    getdata: thunk(async (actions) => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      actions.data(data);
    }),
  })
);
