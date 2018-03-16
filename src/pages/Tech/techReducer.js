import { SEARCHSONG_WAIT , SEARCHSONG_SUCCESS , SEARCHSONG_FAIL } from './actionTypes'
import { GETSONG_WAIT , GETSONG_SUCCESS , GETSONG_FAIL } from './actionTypes'

export const songlist = (state = [], action) => {
    switch (action.type) {
      case SEARCHSONG_WAIT:
        return {
            ...state,
            songs: [],
            loading: true,
        }
      case SEARCHSONG_SUCCESS:
        return {
            ...state,
            songs: action.songs,
            loading: false,
        }
      case SEARCHSONG_FAIL:
        return {
            ...state,
            songs: [],
            loading: false,
      }
      default:
        return {
            ...state,
            loading: false,
        }
    }
}

export const getsong = (state = [], action) => {
    switch (action.type) {
      case GETSONG_WAIT:
        return {
            ...state,
            url:"",
            information: action.information
        }
      case GETSONG_SUCCESS:
        return {
            ...state,
            url:action.url,
            information: action.information
        }
      case GETSONG_FAIL:
        return {
            ...state,
            url:"",
            information: action.information
        }
      default:
        return {
            url:"",
            information:{
                id:"",
                name:"",
                singer:"",
                state:"",
            }
        }
    }
}
 