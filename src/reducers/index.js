import { combineReducers } from "redux";
import { selectSong } from "../actions";

const songsReducer = () => {
  return [
    { title: "chak de india", duration: "4:05" },
    { title: "dangal", duration: "5:45" },
    { title: "bhag milkha bhag", duration: "5:23" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
