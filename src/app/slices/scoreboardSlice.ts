import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import { collection, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import { firestore } from "../../firebase";

interface Scoreboard {
  readonly id: string;
  readonly username: string;
  readonly score: number;
}

interface ScoreboardState {
  scoreList: Scoreboard[];
  loadedCount: number;
  error: string | null;
}

const initialState: ScoreboardState = {
  scoreList: [],
  loadedCount: 10,
  error: null,
};

const scoreboardSlice = createSlice({
  name: "scoreboard",
  initialState,
  reducers: {
    setScoreList: (state, action: PayloadAction<Scoreboard[]>) => {
      state.scoreList = [...action.payload];
      state.error = null; // Clear any previous error
    },
    loadMoreScores: (state) => {
      state.loadedCount += 10;
      state.error = null; // Clear any previous error
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setScoreList, loadMoreScores, setError } = scoreboardSlice.actions;

export const fetchScoreList = (): AppThunk<void> => async (
  dispatch: Dispatch,
  getState
) => {
  try {
    const state = getState().scoreboard;
    const scoresQuery = query(
      collection(firestore, "scores"),
      orderBy("score", "desc"),
      limit(state.loadedCount)
    );

    const unsubscribe = onSnapshot(
      scoresQuery,
      (querySnapshot) => {
        const newData: Scoreboard[] = querySnapshot.docs.map((doc) => {
          const { username, score } = doc.data();
          return {
            id: doc.id,
            username,
            score,
          };
        });
        dispatch(setScoreList(newData));
      },
      (error) => {
        dispatch(setError(error.message));
      }
    );
  } catch (error:any) {
    dispatch(setError(error.message));
  }
};

export default scoreboardSlice.reducer;
