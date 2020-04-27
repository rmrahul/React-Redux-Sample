import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title : 'No scarpt ', duration : "4:03"},
        {title : 'All star ', duration : "4:20"},
        {title : 'I want that way ', duration : "3:03"},
        {title : 'No ways ', duration : "4:21"},
        {title : 'Other ways ', duration : "4:21"},
        {title : 'No scarpt6 ', duration : "4:03"},
        {title : 'No scarpt7 ', duration : "4:03"},
        {title : 'No scarpt8 ', duration : "4:03"},
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs : songsReducer,
    selectedSong : selectedSongReducer,
})