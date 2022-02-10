import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "",
    openTime: new Date(),
    closeTime: new Date(),
    telephone: "",
    address: "",
    today: [],
    menu: [{ menuName: "", menuPrice: 0 }],
  },
];
let kitchenInfo = {
  name: "",
  openTime: new Date(),
  closeTime: new Date(),
  telephone: "",
  address: "",
  today: [],
  menu: [{ menuName: "", menuPrice: 0 }],
};
const kitchenSlice = createSlice({
  name: "kitchen",
  initialState,
  reducers: {
    addKitchen(state, action) {
      kitchenInfo = {
        name: action.payload.name,
        openTime: action.payload.openTime,
        closeTiem: action.payload.closeTime,
        telephone: action.payload.telephone,
        address: action.payload.address,
        today: action.payload.today,
        menu: action.payload.menu,
      };
      state.push(kitchenInfo);
    },
    deleteKitchen(state, action) {
      state.filter((kitchen) => kitchen !== action.payload);
    },
  },
});

const store = configureStore({
  reducer: kitchenSlice.reducer,
});
export const counterActions = kitchenSlice.actions;
export default store;
