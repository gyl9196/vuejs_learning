<template>
<div class="wrapper">
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img
        class="swiper-image"
        :src="item.imgUrl"
      />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'https://h-des-activity-fecp.qunarzz.com/h_des_activity_fe_h_des_activity_fe/973dc1ae0da73a58410186df08ff25cb.jpg'
        },
        {
          id: '0002',
          imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/a685001bbf5e77a203ff8815e953efbe.jpg_945x288_52b6ec01.jpg'
        },
        {
          id: '0003',
          imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/3f5ff03fa0c024b930f515e63ae2c702.jpg_945x288_7dff4510.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  //用来穿透scoped，修改第三方css
  .wrapper /deep/ .swiper-pagination-bullet-active {
     background: #fff !important;
  }
  // wrapper用来处理 防止抖动！！理解是，预留占用空间！
  .wrapper {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 30%;
    background: #eee;
    .swiper-image {
      width: 100%;
    }
  }
</style>
