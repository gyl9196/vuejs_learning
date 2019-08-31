<template>
<div>
  <home-header></home-header>
  <home-swiper></home-swiper>
</div>
</template>

<script>
import HomeHeader from './componentes/Header'
import HomeSwiper from './componentes/Swiper'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>
