import { get } from './const'

//验证码图片
export function searchSongApi(params) {
  return get('http://localhost:4000/search', params, 'application/x-www-form-urlencoded')
}

