import {queryT} from "@/network/request";
export function getCategory() {
  return queryT({
    url: '/category'
  })
}

export function getSubcategory (maitKey) {
  return  queryT({
    url: "/subcategory",
    params: {
      maitKey
    }
  })
}

export function getSubcategoryDetail (miniWallkey, type) {
  return  queryT({
    url: "/subcategory/detail",
    params: {
      miniWallkey,
      type
    }
  })
}
