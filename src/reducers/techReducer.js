const songlist = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
            ...state,
            songs: action.songs,
        }
      case 'SEARCH_SONG':
        return {
            ...state,
            songs: action.songs,
        }
      default:
        return {
            ...state,
        }
    }
}
  
export default songlist