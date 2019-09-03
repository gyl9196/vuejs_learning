<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul style="margin: 0; padding: 0; list-style-type: none;">
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
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
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
        title: '京城周末撒欢',
        desc: '在帝都过周末，不仅仅是城中游!'
      }, {
        id: '00002',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
        title: '京城溜娃必去',
        desc: '德智体美劳全面发展的亲子日，这些地方该去看看…'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
        title: '帝都必打卡',
        desc: '来北京必去的景点非这些地方莫属'
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

  .item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 36.3%;
    .item-img {
      width: 100%
    }
  }
  .item-info {
    padding-left: .5rem;
    margin-bottom: .5rem;
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
    border: 0;
    color: #ccc;
    font-size: .8rem;
    height: 1rem;
    @include ellipsis()
  }
}
</style>
