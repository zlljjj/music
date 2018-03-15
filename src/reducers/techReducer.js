export const songlist = (state = [], action) => {
    switch (action.type) {
      case 'SEARCHSONG_WAIT':
        return {
            ...state,
            songs: [],
            loading: true,
        }
      case 'SEARCHSONG_SUCCESS':
        return {
            ...state,
            songs: action.songs,
            loading: false,
        }
      case 'SEARCHSONG_FAIL':
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
 