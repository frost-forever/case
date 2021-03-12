import   {request} from "./request"

export function getHomeMultidata() {
  return request({
    //请求接口
    url: '/home/multidata'
  }) 
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  }) 
}