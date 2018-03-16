import { searchSongApi , getSongApi } from '../../api/api'
import { SEARCHSONG_WAIT , SEARCHSONG_SUCCESS , SEARCHSONG_FAIL } from './actionTypes'
import { GETSONG_WAIT , GETSONG_SUCCESS , GETSONG_FAIL } from './actionTypes'

export const searchSong = (keywords) => (dispatch,getstate) => {
    dispatch({ type: SEARCHSONG_WAIT })
    searchSongApi({
        keywords: keywords,
    }).then((res) => {
        if(res.code === 200){
            dispatch({ type: SEARCHSONG_SUCCESS , songs: res.result.songs})
        } else {
            dispatch({ type: SEARCHSONG_FAIL })
        }
    }) 
}

export const changeSong = (information) => (dispatch,getstate)=>{
    dispatch({ type: GETSONG_WAIT , information: information })
    getSongApi({
        id: information.id,
    }).then((res) => {
        if(res.code === 200){
            dispatch({ type: GETSONG_SUCCESS , url: res.data[0].url, information: information})
        } else {
            dispatch({ type: GETSONG_FAIL , information: information })
        }
    })
}