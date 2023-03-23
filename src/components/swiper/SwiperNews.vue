<template>
    <swiper 
    dir="rtl" 
    :loop="false"
    :centeredSlides="false"
    :grabCursor="true"
    :freeMode="false"
    :navigation="false"
    :slidesPerView="1.1"
    :spaceBetween="15"
    :grid="{ rows: 1,}" 
    :breakpoints="{
        '640': {
          slidesPerView: 2,
          spaceBetween: 10,
          grid :{ rows: 1,} 
        },
        '768': {
          slidesPerView: 3,
          spaceBetween: 15,
          grid :{ rows: 1,} 
  
        },
        '1024': {
          slidesPerView: 4,
          spaceBetween: 20,
          grid :{ rows: 1,} 
        },
      }"
     :modules="modules" class="mySwiper">
      <swiper-slide v-for="(news, index) in AppsData" :key="index">
        <div class="news__wrapper">
          <div class="news__right">
            <img :src="require(`@/img/${news.src}`)" alt="">
          </div>
          <div class="news__left mt-4 mt-md-3 mt-lg-4 mt-xl-3">
            <h3 class="news__title"> {{ news.title }} </h3>
            <div class="news__version my-2"> {{ news.date }}</div>
            <p class="news__text"> {{ news.text }} </p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </template>
  
  <script >
  import { Swiper, SwiperSlide } from "swiper/vue";
  // import { defineProps , defineComponent ,} from "vue";
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/free-mode";
  import "swiper/css/navigation";
  import "swiper/css/grid";
  
  // import required modules
  import {Grid, FreeMode, Navigation } from "swiper";
  // import AppsArray from '../data/appsdata.js'
  
  // defineComponent([Swiper, SwiperSlide])
  // defineProps(['AppsData'])
  // defineComponent({
  //   modules:[Grid,FreeMode, Navigation,]
  // })
  //  props, Swiper, SwiperSlide, Grid, FreeMode, Navigation
  
  export default {
    props:['AppsData'],
    components: {
      Swiper,
      SwiperSlide,
    },
    setup(props)
    {
      console.log(props);
      return {
         modules:[Grid,FreeMode, Navigation,]
      };
    },
    methods: {
  
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
  height: 360px;
  /* cursor: grab; */
}

.swiper-wrapper {

}
 .swiper-slide {
  font-family: "vazir";
  font-size: 18px;
  border-radius: 7px;
  overflow: hidden;
  /* background-color: rgb(37, 46, 61); */
  background-color: var(--bgswiper);
  /* color: var(--color); */
  height: 100%;
  cursor: pointer;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  /* -webkit-box-pack: flex-start; */
  /* -ms-flex-pack: flex-start; */
  /* -webkit-justify-content: flex-start; */
  justify-content: center;
  /* -webkit-box-align: flex-start; */
  /* -ms-flex-align: flex-start; */
  -webkit-align-items: center;
  align-items: center;
}
.news__wrapper {
  
  background-color: var(--bgswiper);
  height: 360px ;
  padding: 20px ;
  width: 100%;
  color: var(--color);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
.news__left {
  height: 160px;
}
.news__right{
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
}
.news__right img{
  object-fit: cover;
  width: 100% !important;
  border-radius: 5px;
}

.news__title {
  font-weight: 700;
  font-size: 14px;
}
.news__version {
  font-size: 10px;
}
.news__text{
  font-size: 12px;
}

@media only screen and (max-width: 1200px) {
  .swiper , .news__wrapper{
    height: 340px;
  }
  .news__title{
    font-size: 12px;
  }
  .news__version{
    font-size: 8px;
  }
  .news__text{
    font-size: 10px;
  }
}

@media only screen and (max-width: 992px) {
  .swiper , .news__wrapper{
    height: 340px;
  }
  .news__title{
    font-size: 14px;
  }
  .news__version{
    font-size: 10px;
  }
  .news__text{
    font-size: 12px;
  }
  /* .swiper {
    margin-top: 100px;
    width: 740px;
  } */
}

@media only screen and (max-width: 768px) {
  .swiper{
    /* height: 360px; */
  }
  .swiper-slide{
    /* height: 100% ;     */
  }
  .news__wrapper {
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
  }
  .news__right img{
    width: 220px;
  }
  .news__left{
    /* height: 140px; */
  }
  /* .swiper {
    margin-top: 100px;
    width: 520px;
  } */
}

@media only screen and (max-width: 576px) {
  .swiper , .news__wrapper{
    height: 400px;
  }
  .news__right{
    width: 100%;
  }
  .news__right img{
    width: 100% !important;
    height: 180px;
  }
  .news__left{
    height: 110px;
  }
  .swiper {
    /* margin-top: 100px; */
    /* width: 220px; */
  }

}
</style>