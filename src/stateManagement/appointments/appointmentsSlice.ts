import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../Auth/firebaseConfig";
import { IAppointments, IUserData } from "../../utils/interface";
import { getDataById } from "../../api/userApi";
interface IInitialState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  allAppointments: IAppointments[];
  filteredAppointments: IAppointments[];
}
export const getAllAppointments = createAsyncThunk(
  "users/getAllAppointments",
  async (_, thunkAPI) => {
    try {
      const docRef = collection(db, "appointments");
      const appointmentSnapshot = await getDocs(docRef);
      const appointmentsWithUserData: IAppointments[] = [];

      for (const appointmentDoc of appointmentSnapshot.docs) {
        const appointmentData = appointmentDoc.data();
        const userId = appointmentData.to;
        const userDocRef = doc(db, "users", userId);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          const combinedData: IAppointments = {
            title: appointmentData.title,
            description: appointmentData.description,
            date: appointmentData.date,
            status: appointmentData.status,
            id: appointmentDoc.id,
            toUser: userDocSnap.data() as IUserData,
          };
          console.log({ combinedData });

          appointmentsWithUserData.push(combinedData);
        } else {
          console.log("not found");
        }
      }
      return appointmentsWithUserData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const initialState: IInitialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  allAppointments: [],
  filteredAppointments: [],
};
const appointmentsSlice = createSlice({
  name: "appointmentsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllAppointments.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getAllAppointments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.allAppointments = action.payload;
      })
      .addCase(getAllAppointments.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});
// export const {} = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
