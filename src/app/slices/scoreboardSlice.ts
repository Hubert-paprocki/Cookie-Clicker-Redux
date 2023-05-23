import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import {
  collection,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import { firestore } from "../../firebase";

interface Scoreboard {
  readonly id: string;
  readonly username: string;
  readonly score: number;
}

interface ScoreboardState {
  scoreList: Scoreboard[];
}

const initialState: ScoreboardState = {
  scoreList: [],
};

const scoreboardSlice = createSlice({
  name: "scoreboard",
  initialState,
  reducers: {
    setScoreList: (state, action: PayloadAction<Scoreboard[]>) => {
      state.scoreList = action.payload;
    },
  },
});

export const { setScoreList } = scoreboardSlice.actions;

export const fetchScoreList = (): AppThunk<void> => async (
  dispatch: Dispatch
) => {
  const scoresRef = collection(firestore, "scores");

  const unsubscribe = onSnapshot(scoresRef, (querySnapshot: QuerySnapshot) => {
    const newData: Scoreboard[] = querySnapshot.docs.map((doc) => {
      const { username, score } = doc.data();
      return {
        id: doc.id,
        username,
        score,
      };
    });

    newData.sort((a, b) => b.score - a.score);
    dispatch(setScoreList(newData.slice(0, 25)));
  });

  return () => unsubscribe();
};

export default scoreboardSlice.reducer;
