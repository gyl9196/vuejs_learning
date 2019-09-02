<template>
<div>
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>
</div>
</template>

<script>
import HomeHeader from './componentes/Header'
import HomeSwiper from './componentes/Swiper'
import HomeIcons from './componentes/Icons'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>
