import {query,queryT} from "@/network/request";

export function getHomeMultidata() {
  return query({
    url: '/home/multidata'
  })
}
export function getHomeGoods(type,page) {
  return queryT({
    url:'/home/data',
    params: {
      type,
      page
    }
  })
}
