<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="icon in page" :key="icon.id">
          <div class="icon-img">
            <img
              class="icon-img-content"
              :src="icon.imgUrl"
            />
          </div>
          <p class="icon-desc">{{icon.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
        desc: '故宫'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '北京必游'
      }, {
        id: '0004',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        desc: '水上乐园'
      }, {
        id: '0005',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      }, {
        id: '0006',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
        desc: '古北水镇'
      }, {
        id: '0007',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        desc: '动植物园'
      }, {
        id: '0008',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
        desc: '奥利匹克塔'
      }, {
        id: '0009',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b4511345827006994aa1980a3886f0ac.png',
        desc: '北京世园会'
      }, {
        id: '0010',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/bf88c62458044ca2ef9d733690eef3fc.png',
        desc: '优惠券'
      }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.map((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/mixin.scss';

.icons /deep/ .swiper-container {
  height: 0;
  padding-bottom: 50%;
}
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
    padding: 0.1rem;
    .icon-img-content {
      display: block;
      margin: 0 auto;
      height: 100%;
    }
  }
  .icon-desc {
    position: absolute;
    font-size: 0.8rem;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1rem;
    line-height: 1rem;
    // 文字太长，变成...
    @include ellipsis()
  }
}
</style>
