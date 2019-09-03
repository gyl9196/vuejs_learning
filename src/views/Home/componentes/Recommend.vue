<template>
  <div>
    <div class="title">热销推荐</div>
    <ul style="margin: 0; padding: 0; list-style-type: none;">
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">显示详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg',
        title: '北京故宫紫禁城',
        desc: '紫禁城中，感受皇家帝王的气息'
      }, {
        id: '00002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg',
        title: '北京故宫紫禁城',
        desc: '紫禁城中，感受皇家帝王的气息'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg',
        title: '北京故宫紫禁城',
        desc: '紫禁城中，感受皇家帝王的气息'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/mixin.scss';

  .title {
    font-size: .8rem;
    line-height: 2rem;
    text-indent: .5rem;
    background: #eee;
  }
  .item {
    display: flex;
    overflow: hidden;
    height: 6rem;
    .item-img {
      width: 5.8rem;
      height: 5.8rem;
      padding: .1rem;
    }
    .item-info {
      flex: 1;
      padding-left: .5rem;
      // 只有加上这个才会出现 ...
      min-width: 0;
      .item-title {
        margin: 0;
        padding: 0;
        border: 0;
        line-height: 2.5rem;
        font-size: 1rem;
        @include ellipsis()
      }
      .item-desc {
        margin: 0;
        padding: 0;
        border: 0;
        color: #ccc;
        font-size: .8rem;
        height: 1rem;
        @include ellipsis()
      }
      .item-button {
        margin-top: .5rem;
        background: #ff9300;
        padding: .2rem;
        font-size: .8rem;
        border-radius: .8rem;
        color: #fff;
      }
    }
  }
</style>
