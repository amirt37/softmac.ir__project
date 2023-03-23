<template>
  <!-- <div class="navbar-wrapper">
        <nav class="navbar">
          <div class="left__nav">
            <div class="logo__box">
              <span style="font-weight: bold; font-size: 16px;">S<span>
                  <i class="fa-brands fa-apple" style="font-size:15px; "></i>
                </span>ftmac
              </span>
            </div>
            <p style="font-size: 10px; color: rgb(143, 141, 141);">برای جامعه مکینتاش ایران</p>
          </div>
          <div class="right__nav">
            <ul class="menu__link">
              <li class="navbar__link">
                <i class="fa-sharp fa-solid fa-caret-down"></i> برنامه ها

                <ul class="navbar__dropdown navbar__dropdown__1">
                  <li class="navbar__dropdown__link"><i class="fa-solid fa-caret-left"></i> مالتی مدیا
                    <ul class="navbar__dropleft navbar__dropleft__1">
                      <li class="navbar__dropleft__link"> پخش کننده صوتی و تصویری </li>
                      <li class="navbar__dropleft__link"> ضبط و ویرایش ویدئو </li>
                      <li class="navbar__dropleft__link"> مبدل صوتی و تصویری </li>
                      <li class="navbar__dropleft__link"> پلاگین های صوتی و تصویری </li>
                      <li class="navbar__dropleft__link"> ضبط و ویرایش صوت </li>
                      <li class="navbar__dropleft__link"> تصویر برداری از صفحه نمایش </li>
                    </ul>
                  </li>
                  <li class="navbar__dropdown__link"><i class="fa-solid fa-caret-left"></i> امنیتی
                    <ul class="navbar__dropleft navbar__dropleft__2">
                      <li class="navbar__dropleft__link"> آنتی ویروس </li>
                      <li class="navbar__dropleft__link"> ضد هرزنامه و ضدجاسوسی </li>
                      <li class="navbar__dropleft__link"> مدیریت رمز عبور </li>
                      <li class="navbar__dropleft__link"> نظارت و کنترل </li>
                      <li class="navbar__dropleft__link"> حذف ایمن اطلاعات </li>
                      <li class="navbar__dropleft__link"> قفل گذاری </li>
                      <li class="navbar__dropleft__link"> تست و نفوذ </li>
                    </ul>
                  </li>
                  <li class="navbar__dropdown__link"><i class="fa-solid fa-caret-left"></i> گرافیک
                    <ul class="navbar__dropleft navbar__dropleft__3">
                      <li class="navbar__dropleft__link"> طراحی دو بعدی </li>
                      <li class="navbar__dropleft__link"> طراحی سه بعدی </li>
                      <li class="navbar__dropleft__link"> ویرایش تصویر </li>
                      <li class="navbar__dropleft__link"> انیمیشن سازی </li>
                      <li class="navbar__dropleft__link"> مبدل تصویر </li>
                      <li class="navbar__dropleft__link"> ابزار فونت </li>
                      <li class="navbar__dropleft__link"> ابزار آیکون </li>
                      <li class="navbar__dropleft__link"> پلاگین </li>
                      <li class="navbar__dropleft__link"> دیگر </li>
                      <li class="navbar__dropleft__link"> بک گراند و اسکرین سیور </li>
                      <li class="navbar__dropleft__link"> طراحی مهندسی </li>
                      <li class="navbar__dropleft__link"> عکاسی </li>
                    </ul>
                  </li>
                  <li class="navbar__dropdown__link"><i class="fa-solid fa-caret-left"></i> دیسک
                    <ul class="navbar__dropleft navbar__dropleft__4">
                      <li class="navbar__dropleft__link"> مبدل </li>
                      <li class="navbar__dropleft__link"> ابزار ایمیج </li>
                      <li class="navbar__dropleft__link"> ریکاوری </li>
                    </ul>
                  </li>
                  <li class="navbar__dropdown__link"><i class="fa-solid fa-caret-left"></i> اینترنت و شبکه
                    <ul class="navbar__dropleft navbar__dropleft__5">
                      <li class="navbar__dropleft__link"> مرورگر اینترنت </li>
                      <li class="navbar__dropleft__link"> مدیریت دانلود </li>
                      <li class="navbar__dropleft__link"> ابزار اینترنت </li>
                      <li class="navbar__dropleft__link"> اف تی پی </li>
                      <li class="navbar__dropleft__link"> اشتراک فایل </li>
                      <li class="navbar__dropleft__link"> کنترل از راه دور </li>
                      <li class="navbar__dropleft__link"> سرور و ابزارها </li>
                      <li class="navbar__dropleft__link"> مدیریت Wifi </li>
                    </ul>
                  </li>
                  <li class="navbar__dropdown__link"><i class="fa-solid fa-caret-left"></i> ارتباطات
                    <ul class="navbar__dropleft navbar__dropleft__6">
                      <li class="navbar__dropleft__link"> چت و مسنجر</li>
                      <li class="navbar__dropleft__link"> ایمیل</li>
                      <li class="navbar__dropleft__link"> فکس و تلفن</li>
                      <li class="navbar__dropleft__link"> شبکه اجتماعی</li>
                    </ul>
                  </li>
                  <li class="navbar__dropdown__link"><i class="fa-solid fa-caret-left"></i> اداری و کاری
                    <ul class="navbar__dropleft navbar__dropleft__7">
                      <li class="navbar__dropleft__link"> آفیس و ترجمه</li>
                      <li class="navbar__dropleft__link"> پی دی اف</li>
                      <li class="navbar__dropleft__link"> ارائه</li>
                      <li class="navbar__dropleft__link"> مدیریت پروژه</li>
                      <li class="navbar__dropleft__link"> مترجم متن</li>
                      <li class="navbar__dropleft__link"> سازمان دهنده و تقویم و یادآور</li>
                      <li class="navbar__dropleft__link"> ماشین حساب و مبدل</li>
                      <li class="navbar__dropleft__link"> مدیریت مشتری</li>
                      <li class="navbar__dropleft__link"> پرینترو اسکنر</li>
                      <li class="navbar__dropleft__link"> مجازی ساز و Vm</li>
                      <li class="navbar__dropleft__link"> یادداشت</li>
                    </ul>
                  </li>
                  <li class="navbar__dropdown__link"><i class="fa-solid fa-caret-left"></i> توسعه
                    <ul class="navbar__dropleft navbar__dropleft__8">
                      <li class="navbar__dropleft__link"> زبان برنامه نویسی</li>
                      <li class="navbar__dropleft__link"> مفسر و کامپایلر</li>
                      <li class="navbar__dropleft__link"> IDE</li>
                      <li class="navbar__dropleft__link"> کتابخانه و سورس</li>
                      <li class="navbar__dropleft__link"> پایگاه داده و دیتابیس</li>
                      <li class="navbar__dropleft__link"> رمزگذاری و محافظت</li>
                      <li class="navbar__dropleft__link"> نقشه ذهنی</li>
                      <li class="navbar__dropleft__link"> طراحی وبسایت</li>
                      <li class="navbar__dropleft__link"> طراحی اپلیکیشن</li>
                      <li class="navbar__dropleft__link"> ابزار برنامه نویسی</li>
                    </ul>
                  </li>
                  <li class="navbar__dropdown__link"><i class="fa-solid fa-caret-left"></i> آموزشی
                    <ul class="navbar__dropleft navbar__dropleft__9">
                      <li class="navbar__dropleft__link"> گرافیک و طراحی</li>
                      <li class="navbar__dropleft__link"> مک اوس</li>
                      <li class="navbar__dropleft__link"> اکشن</li>
                      <li class="navbar__dropleft__link"> برنامه نویسی</li>
                      <li class="navbar__dropleft__link">کسب و کار</li>
                      <li class="navbar__dropleft__link"> مهندسی </li>
                      <li class="navbar__dropleft__link"> ریاضیات</li>
                      <li class="navbar__dropleft__link"> عمومی</li>
                    </ul>
                  </li>
                  <li class="navbar__dropdown__link"><i class="fa-solid fa-caret-left"></i> علمی و پژوهشی
                    <ul class="navbar__dropleft navbar__dropleft__10">
                      <li class="navbar__dropleft__link">آسمان و فضا</li>
                    </ul>
                  </li>
                  <li class="navbar__dropdown__link"><i class="fa-solid fa-caret-left"></i> سیستم عامل
                    <ul class="navbar__dropleft navbar__dropleft__11">
                      <li class="navbar__dropleft__link"> سیستم عامل High Sierra</li>
                      <li class="navbar__dropleft__link"> سیستم عامل Sierra</li>
                      <li class="navbar__dropleft__link"> سیستم عامل El Capitan</li>
                    </ul>
                  </li>
                  <li class="navbar__dropdown__link"><i class="fa-solid fa-caret-left"></i> حسابداری و مالی
                    <ul class="navbar__dropleft navbar__dropleft__12">
                      <li class="navbar__dropleft__link"> حسابدار شخصی و امور مالی</li>
                      <li class="navbar__dropleft__link"> مالی</li>
                    </ul>
                  </li>
                  <li class="navbar__dropdown__link"><i class="fa-solid fa-caret-left"></i> کاربردی
                    <ul class="navbar__dropleft navbar__dropleft__13">
                      <li class="navbar__dropleft__link"> بازیابی اطلاغات</li>
                      <li class="navbar__dropleft__link"> گرفتن نسخه پشتیبان</li>
                      <li class="navbar__dropleft__link"> بهینه ساز</li>
                      <li class="navbar__dropleft__link"> فشرده ساز فایل</li>
                      <li class="navbar__dropleft__link"> مدیریت فایل</li>
                      <li class="navbar__dropleft__link"> جستجوگر </li>
                      <li class="navbar__dropleft__link"> ابزار سخت افزار</li>
                    </ul>
                  </li>
                  <li class="navbar__dropdown__link"><i class="fa-solid fa-caret-left"></i> اپل
                    <ul class="navbar__dropleft navbar__dropleft__14">
                      <li class="navbar__dropleft__link"> نرم‌افزار های سیستمی</li>
                      <li class="navbar__dropleft__link"> ابزارهای سیستمی</li>
                    </ul>
                  </li>
                  <li class="navbar__dropdown__link"><i class="fa-solid fa-caret-left"></i> سلامت
                    <ul class="navbar__dropleft navbar__dropleft__15">
                      <li class="navbar__dropleft__link"> سلامت</li>
                      <li class="navbar__dropleft__link"> ابزارها</li>

                    </ul>
                  </li>
                </ul>

              </li>

              <li class="navbar__link"><i class="fa-sharp fa-solid fa-caret-down"></i> بازی ها
                <ul class="navbar__dropdown navbar__dropdown__2">
                  <li class="navbar__dropdown__link"> ماجراجویی</li>
                  <li class="navbar__dropdown__link"> ورزشی</li>
                  <li class="navbar__dropdown__link"> اکشن</li>
                  <li class="navbar__dropdown__link"> تیراندازی</li>
                  <li class="navbar__dropdown__link"> مسابقه ای</li>
                  <li class="navbar__dropdown__link"> سرگرم کننده</li>
                  <li class="navbar__dropdown__link"> معمایی</li>
                  <li class="navbar__dropdown__link"> استراتژی</li>
                  <li class="navbar__dropdown__link"> نقش آفرینی</li>
                  <li class="navbar__dropdown__link"> کودکان</li>
                  <li class="navbar__dropdown__link"> شبیه سازی</li>
                  <li class="navbar__dropdown__link"> علمی تخیلی</li>
                  <li class="navbar__dropdown__link"> ترسناک</li>
                </ul>
              </li>
              <li class="navbar__link"><i class="fa-sharp fa-solid fa-caret-down"></i> آموزش ها
                <ul class="navbar__dropdown navbar__dropdown__3">
                  <li class="navbar__dropdown__link"> آموزشی</li>
                  <li class="navbar__dropdown__link"> ترفندها</li>
                  <li class="navbar__dropdown__link"> مقایسه</li>
                  <li class="navbar__dropdown__link"> سیستمی</li>
                  <li class="navbar__dropdown__link"> معرفی نرم افزار و وبسایت</li>
                </ul>
              </li>
              <li class="navbar__link"><i class="fa-sharp fa-solid fa-caret-down"></i> اخبار و مقالات
                <ul class="navbar__dropdown navbar__dropdown__4">
                  <li class="navbar__dropdown__link"> اخبار مک</li>
                  <li class="navbar__dropdown__link"> اخبار آیفون و آی پد</li>
                  <li class="navbar__dropdown__link"> اخبار OSX</li>
                  <li class="navbar__dropdown__link"> اخبار iOS</li>
                  <li class="navbar__dropdown__link"> اخبار نرم افزارها</li>
                  <li class="navbar__dropdown__link"> اخبار iWatch</li>
                  <li class="navbar__dropdown__link"> اخبار برنامه نویسی</li>
                  <li class="navbar__dropdown__link"> اخبار Apple</li>
                </ul>
              </li>
              <li class="navbar__link"><sup class="mb-2 small">(بتا)</sup> بازارچه اپل</li>
              <li class="navbar__link">درخواست برنامه</li>
              <li class="navbar__link">درباره ما</li>
              <li class="navbar__link">تماس با ما</li>
              <li class="navbar__link border-left">ورود یا ثبت نام</li>
            </ul>
            <div @click="openHumb" class="hamburger-box">
              <i class="fa-solid fa-bars bars__icon"></i>
            </div>
            <div class="search-wrapper">
              <a @click="searchFocus"><i class="fa-solid fa-magnifying-glass search__icon"></i></a>
            </div>
          </div>
        </nav>
      </div> -->
  <div class="all-wrapper">
    <header class="header">
      <img src="@/img/colorful_macos_big_sur_apple-wallpaper-1920x1080.jpg" alt="" class="bg">
      <div class="bg-header"></div>

      <div class="wrapper">
        <div class="header-title">
          <div class="main__title">
            <h4 style="font-size: 22px;">دانلود نرم افزار مک، دانلود بازی مک</h4>
            <p style=""> اولین اپ استور ایرانی مک</p>
          </div>
        </div>

        <SearchBox />

        <div class="swiper__main">
          <swiper-main />
        </div>

        <div class="main">
          <div class="main__header main__header1">
            <div dir="rtl" class="apps__wrapper">
              <div class="apps__right">
                <i class="ms-3 fa-brands fa-app-store-ios" style="font-size: 16px;" alt=""></i>
                <h5 class="apps__right__sort new__apps apps__right__active ms-3" @click="newApps">جدیدترین برنامه‌ها
                </h5>
                <h5 class="apps__right__sort top__apps" @click="topApps">برترین‌ها</h5>
              </div>
              <div class="apps__left">
                <a class="all__apps__link" href="#">مشاهده همه</a>
              </div>
            </div>
          </div>
          <TransitionGroup name="fade" mode="in-out">
            <div v-if="sortedTopAppsArray.length" class="swiper__app swiper__app1">
              <SwiperApps :AppsData="sortedTopAppsArray" />
            </div>
            <div v-if="sortedNewAppsArray.length" class="swiper__app swiper__app2">
              <SwiperApps :AppsData="sortedNewAppsArray" />
            </div>
          </TransitionGroup>
        </div>

        <div class="section">
          <div class="main__header">
            <div dir="rtl" class="apps__wrapper">
              <div class="apps__right">
                <i class="fa-sharp fa-solid fa-gamepad ms-3" style="font-size:16px; "></i>
                <h5 class="games__right__sort new__games games__right__active ms-3" @click="newGames">جدیدترین بازی‌ها
                </h5>
                <h5 class="games__right__sort top__games" @click="topGames">برترین‌ها</h5>
              </div>
              <div class="apps__left">
                <a class="all__apps__link" href="#">مشاهده همه</a>
              </div>
            </div>
          </div>
          <TransitionGroup name="fade" mode="in-out">
            <div v-if="sortedTopGamesArray.length" class="swiper__app">
              <SwiperApps :dark="dark" :AppsData="sortedTopGamesArray" />
            </div>
            <div v-else class="swiper__app">
              <SwiperApps :dark="dark" :AppsData="sortedNewGamesArray" />
            </div>
          </TransitionGroup>
        </div>

        <div class="section">
          <div class="main__header">
            <div dir="rtl" class="apps__wrapper">
              <div class="apps__right">
                <i class="fa-solid fa-book ms-3" style="font-size:16px;"></i>
                <h5 class="games__right__sort new__courses games__right__active ms-3" @click="newCourses">جدیدترین
                  آموزش‌ها
                </h5>
                <h5 class="games__right__sort top__courses" @click="topCourses">برترین‌ها</h5>
              </div>
              <div class="apps__left">
                <a class="all__apps__link" href="#">مشاهده همه</a>
              </div>
            </div>
          </div>
          <TransitionGroup name="fade" mode="in-out">
            <div v-if="sortedTopCoursesArray.length" class="swiper__app">
              <SwiperCourses :AppsData="sortedTopCoursesArray" />
            </div>
            <div v-else class="swiper__app">
              <SwiperCourses :AppsData="sortedNewCoursesArray" />
            </div>
          </TransitionGroup>
        </div>

        <div class="section">
          <div class="main__header">
            <div dir="rtl" class="apps__wrapper">
              <div class="apps__right">
                <i class="fa-solid fa-newspaper ms-3" style="font-size:16px;"></i>
                <h5 class="games__right__sort new__news games__right__active ms-3" @click="newNews">آخرین اخبار
                </h5>
                <h5 class="games__right__sort top__news" @click="topNews">برترین‌ها</h5>
              </div>
              <div class="apps__left">
                <a class="all__apps__link" href="#">مشاهده همه</a>
              </div>
            </div>
          </div>
          <TransitionGroup name="fade" mode="in-out">
            <div v-if="sortedTopNewsArray.length" class="swiper__app">
              <SwiperNews :AppsData="sortedTopNewsArray" />
            </div>
            <div v-else class="swiper__app">
              <SwiperNews :AppsData="sortedNewNewsArray" />
            </div>
          </TransitionGroup>
        </div>

        <footer-section></footer-section>
        <!-- <div class="qoute">
          <i class="qoute__icon fas fa-quote-right"></i>
          <div dir="rtl" class="qoute__text"> چیزهای مورد علاقه من در زندگی، رایگان هستند، پس واضح است که با ارزش ترین
            منبع ما زمان می باشد. </div>
          <img class="qoute__img" src="../img/billgates.jpg" alt="">
        </div>

        <div class="bottom">
          <div class="bottom__wrapper">
            <div dir="rtl" class="row justify-content-start">

              <div class="col-6 col-md-3">
                <ul class="bottom__list">
                  <li class="bottom__title">برنامه‌ها</li>
                  <li v-for="(app, index) in appsMenu" :key="index" class="bottom__item"><a href="">{{ app }}</a></li>
                </ul>
              </div>

              <div class="col-6 col-md-3">
                <ul class="bottom__list">
                  <li class="bottom__title">بازی‌ها</li>
                  <li v-for="(app, index) in gamesMenu" :key="index" class="bottom__item"><a href="">{{ app }}</a></li>
                </ul>
              </div>

              <div class="col-6 col-md-3 mt-4 mt-md-0">
                <ul class="bottom__list">
                  <li class="bottom__title">اخبار</li>
                  <li v-for="(app, index) in newsMenu" :key="index" class="bottom__item"><a href="">{{ app }}</a></li>
                </ul>
              </div>

              <div class="col-6 col-md-3 mt-4 mt-md-0">
                <ul class="bottom__list ">
                  <li class="bottom__title">آموزش‌ها</li>
                  <li v-for="(app, index) in coursesMenu" :key="index" class="bottom__item"><a href=""> {{ app }}</a></li>

                  <li class="bottom__icons bottom__title">شبکه‌های اجتماعی</li>
                  <li class="bottom__icon">
                    <i class="fab fa-telegram bottom__link"></i>
                    <i class="fab fa-instagram bottom__link"></i>
                    <i class="fab fa-twitter bottom__link"></i>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        <div dir="rtl" class="footer">
          <div class="footer__wrapper">
            <div class="footer__right">2023 | 1401 <span><i class="fas fa-copyright"></i></span> حقوق مطالب، تصاویر و طرح
              قالب برای سایت<span class="footer__softmac__icon"> سافت‌مک </span> محفوظ است.
              ساخته شده با <span> ( <i class="fas fa-heart"> </i> + <i class="fas fa-mug-hot"></i> ) </span> برای جامعه
              مکینتاش ایران.
            </div>
            <div class="footer__left">
              <span class="footer__left-logo">S<span> <i class="footer__logo__icon fa-brands fa-apple"
                    style="font-size:15px;"></i></span>ftmac</span>
              <p class="footer__left-text">Iran apple community</p>
            </div>
          </div>
        </div> -->
      </div>
    </header>
  </div>

  <!-- <div class="theme__controll">
    <i class="fas fa-adjust"></i>
  </div>
  <div class="to__top">
    <i class="fas fa-angle-up"></i>
  </div> -->
</template> 

<script>

import SwiperMain from './swiper/SwiperMain.vue';
import SwiperApps from './swiper/SwiperApps.vue';
import SwiperCourses from './swiper/SwiperCourses.vue';
import SwiperNews from './swiper/SwiperNews.vue';
import { AppsArray } from './data/appsdata';
import { TransitionGroup } from 'vue';
import SearchBox from './SearchBox.vue';
import FooterSection from './FooterSection.vue';


// import { watch } from 'vue';

export default {

  components: {
    SwiperMain,
    SwiperApps,
    SwiperCourses,
    SwiperNews,
    TransitionGroup,
    SearchBox,
    FooterSection
  },
  mixins: [AppsArray],

  data()
  {
    return {
      sortedTopAppsArray: [],
      sortedNewAppsArray: [],
      sortedTopGamesArray: [],
      sortedNewGamesArray: [],
      sortedTopCoursesArray: [],
      sortedNewCoursesArray: [],
      sortedTopNewsArray: [],
      sortedNewNewsArray: [],
      inputValue: '',

    }
  },
  methods: {
    // sort apps
    topApps()
    {
      let newApps = document.querySelector('.new__apps')
      let topApps = document.querySelector('.top__apps')

      newApps.classList.remove('apps__right__active')
      topApps.classList.add('apps__right__active')

      let sortedPoints = this.AppsArray.sort((p1, p2) => (p1.point > p2.point) ? -1 : (p1.point < p2.point) ? 1 : 0).slice(0, 12)
      this.sortedNewAppsArray = []
      this.sortedTopAppsArray = sortedPoints
    },
    newApps()
    {
      let newApps = document.querySelector('.new__apps')
      let topApps = document.querySelector('.top__apps')

      topApps.classList.remove('apps__right__active')
      newApps.classList.add('apps__right__active')

      let sortedDates = this.AppsArray.sort((p1, p2) => (p1.time > p2.time) ? -1 : (p1.time < p2.time) ? 1 : 0).slice(0, 12)
      this.sortedTopAppsArray = []
      this.sortedNewAppsArray = sortedDates
    },

    // sort games
    topGames()
    {

      let newGame = document.querySelector('.new__games')
      let topGame = document.querySelector('.top__games')

      newGame.classList.remove('games__right__active')
      topGame.classList.add('games__right__active')

      let sortedPoints = AppsArray.data().gamesArray.sort((p1, p2) => (p1.point > p2.point) ? -1 : (p1.point < p2.point) ? 1 : 0).slice(0, 12)
      this.sortedNewGamesArray = []
      this.sortedTopGamesArray = sortedPoints
    },
    newGames()
    {
      document.querySelector('.swiper-wrapper').classList.add('translate3d')
      let newGame = document.querySelector('.new__games')
      let topGame = document.querySelector('.top__games')

      topGame.classList.remove('games__right__active')
      newGame.classList.add('games__right__active')

      let sortedDates = AppsArray.data().gamesArray.sort((p1, p2) => (p1.time > p2.time) ? -1 : (p1.time < p2.time) ? 1 : 0).slice(0, 12)
      this.sortedTopGamesArray = []
      this.sortedNewGamesArray = sortedDates
    },

    // sort courses   
    topCourses()
    {
      let newCrs = document.querySelector('.new__courses')
      let topCrs = document.querySelector('.top__courses')

      newCrs.classList.remove('games__right__active')
      topCrs.classList.add('games__right__active')

      let sortedPoints = AppsArray.data().coursesArray.sort((p1, p2) => (p1.point > p2.point) ? -1 : (p1.point < p2.point) ? 1 : 0).slice(0, 12)
      this.sortedNewCoursesArray = []
      this.sortedTopCoursesArray = sortedPoints
      console.log(sortedPoints);
    },
    newCourses()
    {
      let newCrs = document.querySelector('.new__courses')
      let topCrs = document.querySelector('.top__courses')

      topCrs.classList.remove('games__right__active')
      newCrs.classList.add('games__right__active')

      let sortedTimes = AppsArray.data().coursesArray.sort((p1, p2) => (p1.time > p2.time) ? -1 : (p1.time < p2.time) ? 1 : 0).slice(0, 12)
      this.sortedTopCoursesArray = []
      this.sortedNewCoursesArray = sortedTimes
      console.log(sortedTimes);
    },

    // sort news
    topNews()
    {
      let newApps = document.querySelector('.new__news')
      let topApps = document.querySelector('.top__news')

      newApps.classList.remove('games__right__active')
      topApps.classList.add('games__right__active')

      let sortedPoints = AppsArray.data().newsArray.sort((p1, p2) => (p1.point > p2.point) ? -1 : (p1.point < p2.point) ? 1 : 0).slice(0, 12)
      this.sortedNewNewsArray = []
      this.sortedTopNewsArray = sortedPoints
      console.log(sortedPoints);
    },
    newNews()
    {
      let newApps = document.querySelector('.new__news')
      let topApps = document.querySelector('.top__news')

      topApps.classList.remove('games__right__active')
      newApps.classList.add('games__right__active')

      let sortedDates = AppsArray.data().newsArray.sort((p1, p2) => (p1.time > p2.time) ? -1 : (p1.time < p2.time) ? 1 : 0).slice(0, 12)
      this.sortedTopNewsArray = []
      this.sortedNewNewsArray = sortedDates
      console.log(sortedDates);
    },
  },

  mounted()
  {
    // sorting apps when loaded  

    this.newApps()
    this.newGames()
    this.newCourses()
    this.newNews()
  }
}
</script>


<style>
/* transition handling v-leave-active */
.fade-enter-active {
  transition: opacity 1s ease;
}

.fade-leave-active {
  /* display: none; */
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


@font-face {
  font-family: "vazir";
  src: url("../font/Vazir.eot") format('eot'),
    url("../font/Vazir.woff") format('woff'),
    url("../font/Vazir.woff2") format('woff2');
  font-weight: normal;
  font-style: normal;
}

html {
  font-family: "vazir";
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "vazir";
  overflow-x: hidden;
  /*rgba(47, 56, 69)*/
}

.all-wrapper {
  transition: scroll ease 10s;
  background-color: var(--bgcolor);
  height: 200rem;
}

.header,
.bg {
  font-family: "vazir";
  width: 100%;
  height: 45rem;
  background-size: cover;
  /* background-image: url('../img/colorful_macos_big_sur_apple-wallpaper-1920x1080.jpg'); */
}

.bg-header {
  position: absolute;
  height: 45rem;
  width: 100%;
  background: linear-gradient(to bottom, rgba(51, 51, 51, 0.6), var(--bgmiddle) 70%, var(--bgcolor)),
    linear-gradient(to top, rgba(51, 51, 51, 0.6), var(--bgmiddle) 70%, var(--bgcolor));
}

.bg {
  position: absolute;
  width: 100%;
  height: 45rem;
  z-index: 0;
}

.wrapper {

  padding-top: 13rem;
  backdrop-filter: blur(0px);
  height: 200rem;
  color: #fff;

}

.container {
  width: 80% !important;
}

.header-title {
  /* padding-top: 7rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ccc;
  z-index: 999;
}

.border__top {
  border-top: 3px solid rgb(65, 69, 81);
}

.swiper__main {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}

.between {
  /* display: none; */
  height: 5rem;
  /* background-color: rgb(47, 56, 69); */
}

.main {
  /* background-color: rgb(47, 56, 69); */
  /* height: 20rem; */
  padding: 0;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "vazir";
}

.section {
  position: relative;
  /* height: 20rem; */
  padding: 0;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  font-family: "vazir";
}

.main__margin {
  /* margin-top: 0rem; */
}

.main__header {
  /* position: absolute;
  top: 0ex; */
  width: 1100px;
}

.swiper__app {
  /* -webkit-transition: all ease 3.3s; */
  margin: 0 auto;
  width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.apps__wrapper {
  color: #d6d6d6;
  /* height: 3rem; */
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.apps__right {
  font-size: 12px;
  display: flex;
  align-items: center;
  height: 3rem;
}

.apps__right i {
  color: var(--color);
}


.apps__right__sort {
  cursor: pointer;
  color: rgb(113, 109, 109);
  font-size: 16px;
  padding: 0;
  margin: 0;
}

.apps__right__sort:nth-child(2) {
  padding: 3px 0 3px 14px;
  border-left: 2px solid rgb(113, 109, 109);
}

.apps__right__active {
  color: var(--color);
}

.all__apps__link {
  font-size: 16px;
  color: rgb(113, 109, 109);
  text-decoration: none;
}

.games__right__active {
  color: var(--color) !important;
}

.games__right__sort {
  padding: 0;
  margin: 0;
  cursor: pointer;
  color: rgb(113, 109, 109);
  font-size: 16px;
}

.games__right__sort:nth-child(2) {
  padding: 3px 0 3px 14px;
  border-left: 2px solid rgb(103, 103, 103);
}

::-webkit-scrollbar {
  /* width: 6px; */
  border-radius: 8px;
  overflow: hidden;
}

::-webkit-scrollbar-button {
  display: none;
}

::-webkit-scrollbar-thumb {
  background-color: var(--btn);
}

::-webkit-scrollbar-track {
  background-color: var(--bgcolor);
  box-shadow: inset 0 0 10px -5px black;
}


.display-block {
  transform: translateX(0);
}

.display-none {
  display: none;
}

.overflow-hidden {
  overflow: hidden;
}


.translate3d {
  transform: translate3d(0px, 0px, 0px)
}

.qoute {
  margin: 5rem auto 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  position: relative;
  width: 1100px;
  height: 110px;
  border-radius: 10px;
  background-color: var(--bgswiper);

}

.qoute__icon {
  position: absolute;
  top: -20px;
  right: 20px;
  font-size: 40px;
  width: 40px;
  color: rgb(0, 122, 255);
}

.qoute__img {
  width: 75px;
  height: 75px;
  border-radius: 75px;
  margin: 0 4.5rem 0 1.5rem;
}

.qoute__text {
  color: var(--color);
  font-size: 14px;
  flex: 1;
}

.bottom {
  padding-top: 35px;
  margin-top: 3rem;
  height: 540px;
  background-color: var(--bgswiper);
  display: flex;
  justify-content: center;
}

.bottom__wrapper {
  width: 1100px;
}

.bottom__list {
  list-style: none;
  padding: 0%;
  margin: 0%;
}

.bottom__title {
  color: var(--color);
  width: 100% !important;
  padding-bottom: 15px;
  border-bottom: 1px solid hsla(0, 0%, 53%, .169);
}

.bottom__icons {
  margin-top: 30px;
}

.bottom__icon {
  margin: 6px 0 0 0;
  color: #999;
  font-size: 15px;
}

.bottom__item {
  font-size: 12px;
  margin-top: 10px;
}

.bottom__item a {
  padding: 2px 5px;
  display: inline;
  color: #999;
  text-decoration: none;
}

.bottom__item a:hover {
  color: #fff;
  cursor: pointer;
  background-color: #007bff;
}

.bottom__link {
  margin: 0 0 0 20px;
}

.bottom__link:hover {
  color: #007bff;
}

.footer {
  background: var(--bottom);
  height: 110px;
  display: flex;
  justify-content: center;
}

.footer__wrapper {
  width: 1100px;
  height: 110px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer__right {
  max-width: 390px;
  font-size: 11px;
  color: #999;
}

.footer__softmac__icon {
  cursor: pointer;
  color: #007bff;
}

.footer__softmac__icon:hover {
  color: #005ab9;
}

.footer__left {
  cursor: pointer;
  width: 100px;
  color: rgb(143, 141, 141);
  /* color: hsla(0, 0%, 84%, .3); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
}

.footer__left-logo {
  font-weight: bold;
  font-size: 18px;
  text-align: end;
  width: 100%;
  border-bottom: 1px solid var(--bgcolor);
}

.footer__left-text {
  padding: 0;
  margin: 8px 0 0 0;
  font-size: 10px;
}


@media only screen and (max-width: 1200px) {

  .footer__wrapper,
  .bottom__wrapper,
  .qoute,
  .swiper__app,
  .main__header {
    width: 960px;
  }

  .navbar__link {
    font-size: 12px;
    margin-left: 20px;
    font-weight: 100;
  }
}

@media only screen and (max-width: 992px) {

  .footer__wrapper,
  .bottom__wrapper,
  .qoute,
  .swiper__app,
  .main__header {
    width: 740px;
  }

  .header,
  .bg-header,
  .bg {
    height: 45rem;
  }

  .wrapper {
    padding-top: 12rem;
  }

  .navbar-wrapper {
    height: 5rem;
  }

  .navbar {
    height: 5rem;
  }

  .search-wrapper {
    margin-right: 15px;
  }

  .search__icon {
    cursor: pointer;
    padding-right: 15px;
    font-size: 16px;
  }

  .navbar__dropdown {
    top: 35px;
    right: -10px;
    width: 150px;
  }

  .between {
    height: 20rem;
  }

  .navbar__link {
    font-size: 8px;
    margin-left: 14px;
  }

  .section {
    margin-top: 2rem;
  }
}

@media only screen and (max-width: 768px) {

  .footer__wrapper,
  .bottom__wrapper,
  .qoute,
  .swiper__app,
  .main__header {
    width: 540px;
  }

  .header,
  .bg {
    height: 40rem;
  }

  .bg-header {
    height: 40rem;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .all-wrapper,
  .wrapper {
    height: 195rem;
  }

  .wrapper {
    padding-top: 11.5rem;
  }

  .navbar-wrapper {
    height: 4.5rem;
  }

  .navbar {
    height: 4.5rem;
  }

  .left__nav p {
    font-size: 8px !important;
  }

  .navbar__link {
    font-size: 6px;
    margin-left: 10px;
  }

  .swiper__main {
    display: none;
  }

  .apps__right__sort {
    /* font-size: 13px; */
  }

  .games__right__sort {
    /* font-size: 13px; */
  }

  .all__apps__link {
    /* font-size: 13px; */
  }

  .between {
    display: none;
  }


  .main {
    justify-content: flex-start;
  }

  .section {
    margin-top: 1rem;
  }

  .qoute {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  .qoute__img {
    width: 60px;
    height: 60px;
    margin: -30px 0 10px 0;
  }

  .qoute__text {
    padding: 5px 20px;
  }

  .bottom {
    height: 850px;
  }

  .footer {
    height: 180px;
  }

  .footer__wrapper {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .footer__left-logo {
    text-align: center;
  }

  .footer__right {
    text-align: center;
  }
}

@media only screen and (max-width: 576px) {

  .footer__wrapper,
  .bottom__wrapper,
  .qoute,
  .swiper__app,
  .main__header {
    width: 95%;
  }

  .header,
  .bg-header,
  .bg {
    height: 28rem;
  }

  .bg-header {
    background: linear-gradient(to top, rgba(47, 56, 69, 0.79) 15%, rgba(51, 51, 51, 0.7) 70%, ),
      linear-gradient(to bottom, rgba(47, 56, 69, 0.79) 15%, rgba(51, 51, 51, 0.7) 70%, )
  }

  .all-wrapper {
    height: 192rem;
  }

  .wrapper {
    height: 192rem;
    padding-top: 9.5rem;
  }

  .right__nav {
    margin-right: 15px;
  }

  .search__icon {
    font-size: 18px;
  }

  .menu__link {
    display: none;
  }

  .search-wrapper {
    /* border: none; */
  }

  .hamburger-box {
    display: block;
  }

  .bars__icon {
    font-size: 16px;
  }

  .main {
    position: relative;
    margin-top: 3rem !important;
  }

  .apps__right__sort,
  .all__apps__link,
  .games__right__sort {
    font-size: 13px;
  }


}
</style>