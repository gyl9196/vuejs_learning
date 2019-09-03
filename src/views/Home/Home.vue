<template>
<div>
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>
  <home-recommend></home-recommend>

</div>
</template>

<script>
import HomeHeader from './componentes/Header'
import HomeSwiper from './componentes/Swiper'
import HomeIcons from './componentes/Icons'
import HomeRecommend from './componentes/Recommend'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  }
}
</script>
