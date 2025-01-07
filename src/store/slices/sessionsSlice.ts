import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Session } from '../../types';

interface SessionsState {
  sessions: Session[];
  loading: boolean;
  error: string | null;
}

const initialState: SessionsState = {
  sessions: [],
  loading: false,
  error: null,
};

const sessionsSlice = createSlice({
  name: 'sessions',
  initialState,
  reducers: {
    setSessions: (state, action: PayloadAction<Session[]>) => {
      state.sessions = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setSessions, setLoading, setError } = sessionsSlice.actions;
export default sessionsSlice.reducer;