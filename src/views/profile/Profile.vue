<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>我的</div>
      </template>
    </nav-bar>
    <scroll class="scroll">
      <list-view/>

      <section class="account">
        <div class="account-item">
          <div class="number">
            <span class="balance">0.00</span>元
          </div>
          <div class="account-info">我的余额</div>
        </div>
        <div class="account-item">
          <div class="number">
            <span class="balance">0</span>个
          </div>
          <div class="account-info">我的优惠</div>
        </div>
        <div class="account-item">
          <div class="number">
            <span class="balance">0</span>分
          </div>
          <div class="account-info">我的积分</div>
        </div>
      </section>
      <user-info :list-data="orderList" class="order-list"/>
      <user-info :list-data="serviceList" class="service-list"/>
    </scroll>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import ListView from "@/views/profile/childrenComps/ListView";
import UserInfo from "@/views/profile/childrenComps/UserInfo";
import Scroll from "@/components/common/scroll/Scroll";
export default {
name: "Cart",
  components: {
    Scroll,
    ListView,
    NavBar,
    UserInfo
  },
  data() {
    return {
      orderList: [
        {icon: '#order', iconColor: '#ff8198', info: '我的消息'},
        {icon: '#point', iconColor: '#fc7b53', info: '积分商城'},
        {icon: '#vip', iconColor: '#ffc636', info: '会员卡'},
      ],
      serviceList: [
        {icon: '#service', iconColor: '#ff8198', info: '我的购物车'},
        {icon: '#download', iconColor: '#ff8198', info: '下载购物APP'},
      ]
    }
  }
}
</script>

<style scoped>
#profile {
  height: calc(100vh - 44px);
  background-color: #f2f2f2;
}
.scroll {
  height: 100%;
  overflow: hidden;
}
.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}

.account {
  display: flex;
}

.account-item {
  width: 100%;
  background-color: #fff;
  margin-right: 1px;
  text-align: center;
}

.account-item:last-of-type {
  margin-right: 0;
}

.account-item {
  color: #666;
  font-size: 13px;
  padding: 18px;
}

.account-item .balance {
  font-size: 24px;
  font-weight: 700;
  color: #ff5f3e;
}

.account-info {
  margin-top: 6px;
}

.order-list, .service-list {
  margin-top: 12px;
}
</style>
