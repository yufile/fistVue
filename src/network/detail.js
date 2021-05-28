import {queryT} from "@/network/request";

export function getDetail(iid) {
  return queryT({
    url: '/detail',
    params:{
      iid
    }
  })
}

export function getRecommend() {
  return queryT({
    url:'/recommend'
  })
}

export class GoodMore {
  // constructor()
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.servicesSum = services.length;
    this.realPrice = itemInfo.lowNowPrice;
  }
}
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
    this.sell = shopInfo.cSells;
    this.src = shopInfo.shopUrl
  }
}
