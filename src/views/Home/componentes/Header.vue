<template>
  <div class='header'>
    <div class='header-left'>
      <div class="iconfont back-icon">&#xe7eb;</div>
    </div>
    <div class='header-input'>
      <span class="iconfont">&#xe8ef;</span>
      输入城市/景点/游玩主题
    </div>
    <div class='header-right'>
      城市
      <span class="iconfont arrow-down">&#xe7ec;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang='scss' scoped>
@import '~@/assets/styles/variables.scss';
  .header {
    display: flex;
    line-height: 2.5rem;
    background-color: $bgColor;
    color: #fff;
    .header-left {
      width: 2.5rem;
      text-align: center;
      .back-icon {
        font-size: 1.5rem
      }
    }
    .header-input {
      flex: 1;
      margin-top: 0.4rem;
      margin-right: 0.4rem;
      padding-left: 1rem;
      height: 1.7rem;
      line-height: 1.7rem;
      background: #fff;
      border-radius: .3rem;
      color: #ccc;
    }
    .header-right {
      width: 3.5rem;
      padding-right: .5rem;
      text-align: center;
      .arrow-down {
        margin-left: -.2rem;
      }
    }
  }
</style>
