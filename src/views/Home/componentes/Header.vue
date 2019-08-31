<template>
  <div class='header'>
    <div class='header-left'>返回</div>
    <div class='header-input'>内容</div>
    <div class='header-right'>城市</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang='scss' scoped>
  .header {
    display: flex;
    line-height: 3rem;
    background-color: #00bcd4;
    color: #fff;
    .header-left {
      width: 3rem;
    }
    .header-input {
      flex: 1;
      background: #fff;
    }
    .header-right {
      width: 3rem;
      text-align: center;
    }
  }
</style>
