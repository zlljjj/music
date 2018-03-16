import { get } from './const'


export function searchSongApi(params) {
  return get('http://localhost:4000/search', params, 'application/x-www-form-urlencoded')
}

export function getSongApi(params) {
    return get('http://localhost:4000/music/url', params, 'application/x-www-form-urlencoded')
  }