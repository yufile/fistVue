<template>
  <div class="param-info" v-if="Object.keys(itemParams).length !==0">
      <table class="info-table" v-for="(tables,index) in itemParams.rule.tables" :key="index">
        <tr v-for="(info,indey) in tables" :key="indey">
          <td v-for="(tr,indez) in info" :key="indez">{{tr}}</td>
        </tr>
      </table>

    <table class="info-table2">
      <tr v-for="(table,indey) in itemParams.info.set" :key="indey" >
        <td>{{table.key}}</td>
        <td>{{table.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
name: "DetailParamsInfo",
  props :{
    itemParams: {
      type: Object,
      default() {
        return []
      }
    }
  },
}
</script>

<style scoped>
.param-info {
  border-bottom: 4px solid #e7e7e7;
  padding-bottom: 20px;
}
.info-table,.info-table2 {
  width: 100%;
  margin: 0 20px;
  font-size: 16px;
  text-align: justify;
}
.info-table tr{
  display: flex;
  flex: 1;
  height: 44px;
  margin-right: 30px;
}
.info-table2 tr {
  display: flex;
  flex: 1;
  margin-right: 30px;
}
.info-table tr td {
  flex: 1;
  border-bottom: 1px solid #d2d2d2;
  line-height: 44px;
}
.info-table2 tr td {
  display: flex;
  border-bottom: 1px solid #d2d2d2;
  padding: 10px 0;
  align-items: center;
}
.info-table2 tr td:nth-of-type(1) {
  flex: 4;
}
.info-table2 tr td:nth-of-type(2) {
  flex: 6;
  color: var(--color-tint);
}
</style>
