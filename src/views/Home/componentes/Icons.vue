<template>
  <div class="icons">
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" />
      </div>
      <p class="icon-desc">热门景点</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" />
      </div>
      <p class="icon-desc">热门景点</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons'
}
</script>

<style lang="scss" scoped>
  .icons {
    overflow: hidden;
    height: 0;
    padding-bottom: 50%;
    display: flex;
    flex-wrap: wrap;
    .icon {
      position: relative;
      overflow: hidden;
      float: left;
      width: 25%;
      padding-bottom: 25%;
      height: 0;
      text-align: center;
      .icon-img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 1.5rem;
        box-sizing: border-box;
        padding: .1rem;
        .icon-img-content {
          display: block;
          margin: 0 auto;
          height: 100%;
        }
      }
       .icon-desc {
        position: absolute;
        font-size: .8rem;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1rem;
        line-height: 1rem;
      }
    }
  }

</style>
