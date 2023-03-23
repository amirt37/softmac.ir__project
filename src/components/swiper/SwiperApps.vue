<template>
  <swiper 
  dir="rtl" 
  :slidesPerView="1.1"
  :spaceBetween="15"
  :grid="{ rows: 2,}" 
  :breakpoints="{
      '640': {
        slidesPerView: 1.2,
        spaceBetween: 15,
        grid :{ rows: 2,} 
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 20,
        grid :{ rows: 2,} 

      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 20,
        grid :{ rows: 2,} 
      },
    }"
   :modules="modules" class="mySwiper">

  <swiper-slide v-for="(app , index) in AppsData" :key="index">
      <div class="app__right mx-3">
        <img :src="require(`@/img/${app.src}`)" alt="">
      </div>
      <div class="app__left">
        <h3 class="app__title">{{ app.title }}</h3>
        <div class="app__version"> نسخه : {{ app.version }}</div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

// import required modules
import {Grid, Navigation } from "swiper";

export default {
  props:['AppsData'],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup()
  {
  
    return {
       modules:[Grid, Navigation,]
    };
  },
  methods: {

  }
,
  mounted(){
    let root = document.querySelector(':root')
    console.log(root);
  }
}
</script>

<style scoped>

@font-face {
  font-family: "vazir";
  src: url("@/font/Vazir.eot") format('eot'),
    url("@/font/Vazir.woff") format('woff'),
    url("@/font/Vazir.woff2") format('woff2');

}
.swiper {
  width: 100%;
  height: 230px;
  cursor: grab;
}

.swiper-wrapper{
  transform: translate3d(0px, 0px, 0px);
  transition-duration: 0ms;
  transition: 0.5s;
}

.swiper-slide {
  font-family: "vazir";
  font-size: 18px;
  background-color: var(--bgswiper); 
  /* background-color: rgb(37, 46, 61);  */
  color: var(--color);
  /* color: rgb(213, 213, 213); */
  border-radius: 7px; 
  height: calc((100% - 40px) / 2) !important;
  cursor: pointer;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: flex-start;
  -ms-flex-pack: flex-start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  -webkit-align-items: flex-start;
  align-items: center;
}

.app__left{
}
.app__title{
  font-family: 'Public Sans', sans-serif;
  font-size: 18px;
}
  
.app__version{
  font-size: 12px;
  
}

@media only screen and (max-width: 1200px) {
  /* .swiper {
    margin-top: 100px;
    width: 950px;
  } */

}

@media only screen and (max-width: 992px) {
  /* .swiper {
    margin-top: 100px;
    width: 740px;
  } */
}

@media only screen and (max-width: 768px) {
  /* .swiper {
    margin-top: 100px;
    width: 520px;
  } */
}

@media only screen and (max-width: 576px) {
  .swiper {
    /* margin-top: 100px; */
    /* width: 220px; */
  }

}

</style>