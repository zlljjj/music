import { searchSongApi } from '../api/api'


export const searchSong = (keywords) => (dispatch,getstate) => {
    dispatch({ type:"SEARCHSONG_WAIT" })
    searchSongApi({
        keywords: keywords,
    }).then((res) => {
        if(res.code === 200){
            dispatch({ type:"SEARCHSONG_SUCCESS" , songs: res.result.songs})
        } else {
            dispatch({ type:"SEARCHSONG_FAIL" })
        }
    }) 
}