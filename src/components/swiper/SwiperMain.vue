<template>
  <swiper dir="rtl" :slidesPerView="1" :freeMode="true" :rewind="true" :navigation="false" :modules="modules"
    :spaceBetween="15" class="mySwiper">
    <swiper-slide>
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <div class="col-lg-12 border__radios">
            <div class="image__slider image__slider__horizon row">
              <div class="col-2">
                <img class="icon__size" style="border-radius: 8px;"
                  src="../../img/93a66939-e522-4928-b251-22fabb237a7b.webp" alt="">
              </div>
              <div class="col-9 me-4">
                <h4 class="horizon__title title__size"> بازی زیبای horizon chase 2 رو از دست ندید!</h4>
                <p class="horizon__text text__size">یک بازی زیبا و مجبوب از سری Arcade اپل، توانایی و سرعت عمل خود را
                  به رخ بکشید!</p>
              </div>
            </div>
          </div>

          <div class="col-lg-12 mt-3 border__radios">
            <div class="image__slider row image__slider__batman">
              <div class="col-2 ">
                <img class="icon__size" style="border-radius: 8px;"
                  src="../../img/download.jpg" alt="">
              </div>
              <div class="col-9 me-4">
                <h4 class="office__title title__size">Batman: Arkham City</h4>
                <p class="office__text text__size">بازی جدید و هیجانی بتمن رو از دست ندید!</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">

          <div class="col-lg-12 border__radios">
            <div class="image__slider row image__slider__office">
              <div class="col-2">
                <img class="icon__size" src="../../img/icons8-microsoft-office-2019-96.png" alt="">
              </div>
              <div class="col-9 me-4">
                <h4 class="office__title title__size">مجموعه نرم افزار های مایکروسافت</h4>
                <p class="office__text text__size">لیست کامل برنامه های مایکروسافت برای مک</p>
              </div>
            </div>
          </div>

          <div class="col-lg-12 mt-3 border__radios">
            <div class="image__slider row image__slider__cleanmac">
              <div class="col-2 ">
                <img class="icon__size" style=" margin-right: 10px;" src="../../img/cleanmymac_x_macos_bigsur_icon_190288.png" alt="">
              </div>
              <div class="col-9 me-4">
                <h4 class="mac__title title__size">وقت پاکسازی مکتون رسیده!</h4>
                <p class="mac__text text__size"> با بروز رسانی جدید CLEAN MY MAC به راحتی مکتون رو پاک سازی کنید</p>
              </div>
            </div>
          </div>

        </div>

        <div class="col-md-12 mt-md-3 col-lg-4 mt-lg-0">

          <div class="col big__box">
            <div class="image__slider row image__slider__adguard">
              <div class="col-2 ">
                <img style=" position: absolute; top: 15px; right: 15px;" src="../../img/adguard_macos_bigsur_icon_190469.png" alt="">

                <div class="col-9 me-4">
                  <h4 class="adguard__title title__size">با تبلیغات خداحافظی کنید !</h4>
                  <p class="adguard__text text__size">اگر از دیدن تبلیغات زیاد در وبسایت ها خسته شده اید کافیست تا این
                    برنامه را
                    نصب
                    و
                    استفاده کنید نسخه جدید ادگارد شما را از شر تبلیغات نجات میدهد!</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <div class="col-lg-12 border__radios">
            <div class="image__slider image__slider__horizon row">
              <div class="col-2">
                <img class="icon__size" style="border-radius: 8px;"
                  src="../../img/93a66939-e522-4928-b251-22fabb237a7b.webp" alt="">
              </div>
              <div class="col-9 me-4">
                <h4 class="horizon__title title__size"> بازی زیبای horizon chase 2 رو از دست ندید!</h4>
                <p class="horizon__text text__size">یک بازی زیبا و مجبوب از سری Arcade اپل، توانایی و سرعت عمل خود را
                  به رخ بکشید!</p>
              </div>
            </div>
          </div>

          <div class="col-lg-12 mt-3 border__radios">
            <div class="image__slider row image__slider__batman">
              <div class="col-2 ">
                <img class="icon__size" style="border-radius: 8px;"
                  src="../../img/download.jpg" alt="">
              </div>
              <div class="col-9 me-4">
                <h4 class="office__title title__size">Batman: Arkham City</h4>
                <p class="office__text text__size">بازی جدید و هیجانی بتمن رو از دست ندید!</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">

          <div class="col-lg-12 border__radios">
            <div class="image__slider row image__slider__office">
              <div class="col-2">
                <img class="icon__size" src="../../img/icons8-microsoft-office-2019-96.png" alt="">
              </div>
              <div class="col-9 me-4">
                <h4 class="office__title title__size">مجموعه نرم افزار های مایکرو سافت</h4>
                <p class="office__text text__size">لیست کامل برنامه های مایکروسافت برای مک</p>
              </div>
            </div>
          </div>

          <div class="col-lg-12 mt-3 border__radios">
            <div class="image__slider row image__slider__cleanmac">
              <div class="col-2 ">
                <img class="icon__size" style=" margin-right: 10px;" src="../../img/cleanmymac_x_macos_bigsur_icon_190288.png" alt="">
              </div>
              <div class="col-9 me-4">
                <h4 class="mac__title title__size">وقت پاکسازی مکتون رسیده!</h4>
                <p class="mac__text text__size"> با بروز رسانی جدید CLEAN MY MAC به راحتی مکتون رو پاک سازی کنید</p>
              </div>
            </div>
          </div>

        </div>

        <div class="col-md-12 mt-md-3 col-lg-4 mt-lg-0">

          <div class="col big__box">
            <div class="image__slider row image__slider__adguard">
              <div class="col-2 ">
                <img style=" position: absolute; top: 15px; right: 15px;" src="../../img/adguard_macos_bigsur_icon_190469.png" alt="">

                <div class="col-9 me-4">
                  <h4 class="adguard__title title__size">با تبلیغات خداحافظی کنید !</h4>
                  <p class="adguard__text text__size">اگر از دیدن تبلیغات زیاد در وبسایت ها خسته شده اید کافیست تا این
                    برنامه را
                    نصب
                    و
                    استفاده کنید نسخه جدید ادگارد شما را از شر تبلیغات نجات میدهد!</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper";


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup()
  {
    return {
      modules: [FreeMode, Navigation],
    };
  },
}
</script>

<style scoped>
/* #app {
  height: 100%
} */

.swiper {
  margin-top: 100px;
  width: 1100px;
  cursor: grab;
}

.swiper-slide {}

.border__radios {
  /* backdrop-filter: blur(8px) ; */
  position: relative;
  display: flex;
  justify-content: center;
  height: 150px;
  overflow: hidden;
}

.big__box {
  position: relative;
  display: flex;
  justify-content: center;
  height: 316px;
  overflow: hidden;
}

/* .main {
  height: 100vh;
  background-color: rgb(39, 39, 39);
} */

.image__slider {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  align-content: center;
  backdrop-filter: blur(1px);
  cursor: pointer;
}

.image__slider::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  z-index: -1;
  /* filter: blur(1.5px);
  -moz-filter: blur(1.5px);
  -webkit-filter: blur(1.5px);
  -o-filter: blur(1.5px); */
}

.image__slider__horizon {
  background-image: url('../../img/pngtree-sci-fi-city-light-dot-luminous-building-street-purple-technology-background-picture-image_1446716.jpg');
  background-size: cover;
}

.image__slider__horizon::before {
  background: linear-gradient(to bottom, rgba(0, 106, 255, 0.721), rgba(167, 165, 165, 0.573));
}

.image__slider__office::before {
  background: linear-gradient(to bottom, rgb(248, 74, 0) , #ccc );
}

.image__slider__batman {
  background-image: url('../../img/051262.jpg');
  background-size: cover;
}

.image__slider__batman::before {
  background: linear-gradient(to bottom, rgba(26, 25, 25, 0.742), rgba(88, 26, 26, 0.534));
}

.image__slider__cleanmac {
  background-image: url('../../img/cleanmymac-x-raeumt-euren-pc-entfernt-mehr-benoetigten-datenmuell-316370.webp');
  background-size: cover;
  background-position: center;

}

.image__slider__cleanmac::before {
  background: linear-gradient(to bottom, rgba(228, 25, 120, 0.76), rgba(204, 204, 204, 0.873));
  /* backdrop-filter: blur(5px); */
}

.image__slider__adguard {
  background-image: url('../../img/x3dde13e7ce104fda4c574fdbb11e1e2dYKhLoSFyXW65EKZ9i2Pc8BzHw8irEo9gsrxIs7nC.jpg.pagespeed.ic.UCrL37ZdI5.webp');
  background-size: cover;
  background-position: center;

}

.image__slider__adguard::before {
  background: linear-gradient(to bottom, rgba(0, 175, 198, 0.863), rgba(255, 255, 255, 0.923));
}

.office__title {
  color: rgb(255, 255, 255);
  position: absolute;
  top: 20%;
  right: 25%;
}

.office__text {
  color: rgb(255, 255, 255);
  position: absolute;
  top: 55%;
  right: 25%;
}

.horizon__title {
  position: absolute;
  top: 15%;
  right: 25%;
  width: 70%;
}

.horizon__text {
  position: absolute;
  bottom: 13%;
  right: 25%;
  width: 70%;
}

.mac__title {
  position: absolute;
  top: 17%;
  right: 25%;
}

.mac__text {
  position: absolute;
  top: 45%;
  right: 25%;
  width: 70%;
}

.adguard__title {
  position: absolute;
  top: 40% !important;
  right: 5% !important;

}

.adguard__text {
  position: absolute;
  top: 50% !important;
  right: 5% !important;
  width: 90% !important;
}

.title__size {
  width: 60%;
  right: 33%;
  font-size: 16px;
}

.text__size {
  width: 64%;
  right: 33%;
  font-size: 10px;
}

.icon__size{
  position: absolute;
  top: 25%;
  width: 60px;
  height: 60px;
  margin-right: 10px;
}


@media only screen and (max-width: 1200px) {
  .swiper {
  margin-top: 100px;
  width: 950px;
  }

}

@media only screen and (max-width: 992px) {
  .swiper {
  margin-top: 100px;
  width: 740px;
  }
  .border__radios{
    height: 120px;
  }
  .big__box{
    height: 120px;
  }

  .horizon__text{
    top: 55%;
  }

  .adguard__title{
    top: 20% !important;
    right: 17% !important;
  }

  .adguard__text{
    top: 46% !important;
    right: 17% !important;
  }

  .title__size{
    right: 27%;
  }

  .text__size{
    right: 27%;
  }
}

@media only screen and (max-width: 768px) {
  .swiper {
  margin-top: 100px;
  width: 540px;
  }


}

@media only screen and (max-width: 576px) {

}
</style>