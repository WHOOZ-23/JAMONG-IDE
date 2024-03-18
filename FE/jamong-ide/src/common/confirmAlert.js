import { createSlice } from '@reduxjs/toolkit';

const initAlertDialogInfo = {
  open: false,
  title: '',
  text: '',
  path: '',
};

export const alertDialogInfoSlice = createSlice({
  name: 'alert',
  initialState: { ...initAlertDialogInfo },
  reducers: {
    showAlert: (state, action) => {
      state = { ...initAlertDialogInfo, ...action.payload };
      return state;
    },
    // closeAlert: (state, action) => {
    //   state = { ...initAlertDialogInfo };
    //   console.log(state);
    //   return state;
    // },
    closeRedirectAlert: (state, action) => {
      state = { ...initAlertDialogInfo };
      console.log(state);
      return state;
    },
  },
});

export const { showAlert, closeRedirectAlert } = alertDialogInfoSlice.actions;
export default alertDialogInfoSlice.reducer;
