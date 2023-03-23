<template>
  <swiper dir="rtl" :freeMode="false" :navigation="false" :slidesPerView="1.1" :spaceBetween="15" :grid="{ rows: 1 }"
    :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 10,
        grid: { rows: 1 }
      },
      '768': {
        slidesPerView: 1,
        spaceBetween: 15,
        grid: { rows: 3 }
      },
      '1024': {
        slidesPerView: 2,
        spaceBetween: 20,
        grid: { rows: 3 }
      },
    }" :modules="modules" class="mySwiper">

    <swiper-slide v-for="(course, index) in AppsData" :key="index">
      <div class="courses-wrapper">
        <div class="courses__right ms-md-3 ms-0">
          <img :src="require(`@/img/${course.src}`)" alt="">
        </div>
        <div class="courses__left mt-4 mt-md-0">
          <h3 class="courses__title"> {{ course.title }} </h3>
          <div class="courses__version my-2"> {{ course.date }}</div>
          <p class="courses__text"> {{ course.text }} </p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/grid";
import { Grid, FreeMode, Navigation } from "swiper";

export default {
  props: ['AppsData'],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(props)
  {
    console.log(props);
    return {
      modules: [Grid, FreeMode, Navigation ]
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
  height: 500px;
  cursor: grab;
}

.swiper-wrapper {

}
.swiper-slide {
  font-family: "vazir";
  font-size: 18px;
  color: var(--color);
  background-color: var(--bgswiper);
  border-radius: 7px;
  height: calc((100% - 50px) / 3) ;
  cursor: pointer;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: flex-start;
  -ms-flex-pack: flex-start;
  -webkit-justify-content: flex-start;
  justify-content: center;
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  -webkit-align-items: center;
  align-items: center;
}
.courses-wrapper {
  height: 150px;
  padding: 20px ;
  width: 100%;
  color: var(--color);
  display: flex;
  justify-content: start;
  align-items: center;
}
.courses__left {
  height: 100px;
}
.courses__right{
  /* height: 100px; */
  display: flex;
  align-content: center;
  justify-content: center;
}
.courses__right img{
  /* height: 100%; */
  border-radius: 5px;
}

.courses__title {
  font-weight: 700;
  font-size: 14px;
}
.courses__version {
  font-size: 10px;
}
.courses__text{
  font-size: 12px;
}

@media only screen and (max-width: 1200px) {
  /* .swiper {
    margin-top: 100px;
    width: 950px;
  } */
  .courses__title{
    font-size: 12px;
  }
  .courses__version{
    font-size: 8px;
  }
  .courses__text{
    font-size: 10px;
  }
}

@media only screen and (max-width: 992px) {
  .courses__title{
    font-size: 14px;
  }
  .courses__version{
    font-size: 10px;
  }
  .courses__text{
    font-size: 12px;
  }
  /* .swiper {
    margin-top: 100px;
    width: 740px;
  } */
}

@media only screen and (max-width: 768px) {
  .swiper , .courses-wrapper{
    height: 340px;
  }
  .swiper-slide{
    height: 100% ;    
  }
  .courses-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
  }
  .courses__right img{
    width: 220px;
  }
  .courses__left{
    height: 140px;
  }
  /* .swiper {
    margin-top: 100px;
    width: 520px;
  } */
}

@media only screen and (max-width: 576px) {
  .swiper , .courses-wrapper{
    height: 400px;
  }
  .courses__right{
    width: 100%;
  }
  .courses__right img{
    width: 100% !important;
    height: 180px;
  }
  .courses__left{
    height: 110px;
  }
  .swiper {
    /* margin-top: 100px; */
    /* width: 220px; */
  }

}
</style>