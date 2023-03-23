<template>
  <div class="app-wrapper">
    <header class="header">
      <img src="@/img/colorful_macos_big_sur_apple-wallpaper-1920x1080.jpg" alt="" class="bg">
      <div class="bg-header"></div>
      <div class="container">
        <div class="bread-crumb">
          <router-link to="/">صفحه‌ اصلی</router-link>
          <i class="fa fa-angle-left mx-1"></i>
          <a>برنامه ها</a>
        </div>
      </div>

      <div class="search-app">
        <SearchBox />
      </div>

      <div class="container">
        <div dir="rtl" class="app__sorting">

          <div class="app__sorting-right">
            <i class="fa-brands fa-app-store-ios ms-2"></i>
            <h5>جدیدترین برنامه‌های مک</h5>
          </div>

          <div class="app__sorting-left">
            <div class="ms-2">نمایش بر اساس :</div>
            <div class="apps__sort ms-3">
              <input @click="SortToNew" v-model="check" type="radio" name="x" value="new" checked>
              <label class="form-controll">جدید‌‌ترین</label>
            </div>
            <div class="apps__sort ms-3">
              <input @click="SortToBest" v-model="check" type="radio" name="x" value="best">
              <label class="form-controll">محبوب‌ترین</label>
            </div>
            <div class="apps__sort ms-3">
              <input @click="SortToMost" v-model="check" type="radio" name="x" value="most">
              <label class="form-controll">بیشترین‌دانلود</label>
            </div>
          </div>

        </div>

        <div class="app__items mt-4">
          <div class="row g-4">
            <div class="app__item col-4" v-for="(app, index) in paginatedArray" :key="index">
              <a class="app__item-wrapper" href="">
                <div class="app__item-logo">
                  <img :src="require(`@/img/${app.src}`)" alt="">
                </div>
                <div class="app__item-left">
                  <div class="app__item-title"> {{ app.title }} </div>
                  <div class="app__item-version"> نسخه : {{ app.version }} </div>
                </div>
              </a>
            </div>
          </div>
        </div>

<!-- <div :page-count="" ></div> -->

        <div class="pagination__wrapper">
          <paginate dir="rtl" :page-count="pageCount" :page-range="7" :margin-pages="2" :click-handler="clickCallback"
            :prev-text="'صفحه‌ی قبلی'" :next-text="'صفحه‌ی بعدی'" :container-class="'pagination'"
            :page-class="'page-item'">
          </paginate>‌
        </div>

      </div>
      <footer-section></footer-section>
    </header>


  </div>
</template>

<script>
import { AppsArray } from '../data/appsdata'
import FooterSection from '../FooterSection.vue'
import Paginate from "vuejs-paginate-next";
import SearchBox from '../SearchBox.vue'

export default {

  data()
  {
    return {
      paginatedArray: [],
      sortedArray: AppsArray.data().AppsArray,
      check: '',
      pageCount: '',

    }
  },

  mixins: [AppsArray],

  setup()
  {
    let Ischecked = false
    return { Ischecked, }
  },

  components: { SearchBox, FooterSection, Paginate: Paginate },

  methods: {
    
    SortToNew()
    {
      let sortedTimes = this.AppsArray.sort((p1, p2) => (p1.time > p2.time) ? -1 : (p1.time < p2.time) ? 1 : 0)
      this.sortedArray = sortedTimes
      this.clickCallback(1)
      let page1 = document.querySelector('.page-item:nth-child(2) .page-link')
      page1.click()
    },

    SortToBest()
    {
      let sortedPoint = this.AppsArray.sort((p1, p2) => (p1.point > p2.point) ? -1 : (p1.point < p2.point) ? 1 : 0)
      this.sortedArray = sortedPoint
      this.clickCallback(1)
      let page1 = document.querySelector('.page-item:nth-child(2) .page-link')
      page1.click()
    },

    SortToMost()
    {
      let sortedDownloads = this.AppsArray.sort((p1, p2) => (p1.downloads > p2.downloads) ? -1 : (p1.downloads < p2.downloads) ? 1 : 0)
      this.sortedArray = sortedDownloads
      this.clickCallback(1)
      let page1 = document.querySelector('.page-item:nth-child(2) .page-link')
      page1.click()
    },

    clickCallback(pageNum)
    {
      let currentPage = pageNum
      let rowsCount = 12
      let endIndex = rowsCount * currentPage
      let startIndex = endIndex - rowsCount
      
      this.pageCount = this.sortedArray.length / rowsCount
      this.paginatedArray = this.sortedArray.slice(startIndex, endIndex)
    },
  },
  mounted()
  {
    this.SortToNew()
    this.clickCallback(1)

    // english digits to persian digits

    setInterval(() =>
    {
      let paginationLink = document.querySelectorAll('.page-link')

      String.prototype.toIranDigits = function ()
      {
        var id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return this.replace(/[0-9]/g, function (w)
        {
          return id[+w]
        });
      }

      paginationLink.forEach(page =>
      {
        page.innerHTML = page.innerHTML.toIranDigits()
      })
    }, 0);

    // pagination function

  }

}
</script>

<style>
@font-face {
  font-family: "vazir";
  src: url("@/font/Vazir.eot") format('eot'),
    url("@/font/Vazir.woff") format('woff'),
    url("@/font/Vazir.woff2") format('woff2');
  font-weight: normal;
  font-style: normal;
}

body {
  background-color: var(--bgcolor) !important;
}

.container {
  width: 1100px !important;
  padding: 0 !important;
}

.app-wrapper {
  /* height: 300rem; */
}

.bread-crumb {
  color: hsla(0, 0%, 84%, .5);
  /* width: 1100px; */
  /* margin: 0; */
  text-align: right;
  text-decoration: none;
  backdrop-filter: blur(0px);
  padding: 6.4rem 0 0 0;
  font-size: 10px;
}

.bread-crumb a {
  color: hsla(0, 0%, 84%, .5);
  text-decoration: none;
}

.bread-crumb a:hover {
  color: hsla(0, 0%, 84%, .5);
}

.bread-crumb i {
  margin-top: -50px !important;
}

.search-app {
  padding-top: 7.6rem;
  backdrop-filter: blur(0px);
}

.app__sorting {
  /* position: absolute; */
  margin-top: 4rem;
  padding: 0 0 10px 0;
  backdrop-filter: blur(0px);
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ffffff80;
}

.app__sorting-right {
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 18px;
}

.app__sorting-right h5 {
  padding: 0;
  margin: 0;
}

.app__sorting-right i {
  font-size: 24px !important;
}

.app__sorting-left {
  color: #cfcfcf;
  font-size: 13px;
  display: flex;
  align-items: start;

}

.check {
  background-color: #fff;
  width: 14px;
  height: 14px;
  border-radius: 100% !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

input[type="radio"] {
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  background-color: #ffffff00;
  margin: 0 0 0 8px;
  font: inherit;
  color: currentColor;
  width: 8px;
  height: 8px;
  padding: 3px;
  outline: 0.1em solid #ffffff;
  outline-offset: 3px;
  transition: 120ms transform ease-in-out;

  border-radius: 50%;
  /* transform: translateY(-0.075em); */

  display: grid;
  place-content: center;
}

input[type="radio"]::before {
  content: "";

  width: 13px;
  height: 13px;
  border-radius: 100%;
  transform: scale(0);
  opacity: .2;
}

@keyframes boxShadow {
  0% {
    box-shadow: 0 0 0px 10px #b7b7b7;
    transform: scale(0);
    opacity: 0.4;

  }

  100% {
    box-shadow: 0 0 0px 15px #b7b7b7;
    transform: scale(1);
    opacity: 0.11;
    /* display: none; */
  }
}

input[type="radio"]:checked::before {
  transform: scale(1);
  animation: boxShadow ease .5s;

}

input[type="radio"]:checked {
  background-color: #4e53ff;
}

.display_block {
  display: block;
}

.app__left-label {
  margin-left: 10px 0 0 0 !important;
}

.apps__sort {
  display: flex;
  align-items: center;
}

.app__items {
  backdrop-filter: blur(0px);

}

.app__item-wrapper {
  text-decoration: none;
  color: var(--color);
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: row-reverse;
  border-radius: 10px;
  height: 100px;
  padding: 10px;
  background-color: var(--bgapp);
}

.app__item-wrapper:hover {
  color: var(--color);
}

.app__item-left {
  margin-right: 10px;
  text-align: right;
}

.app__item-logo {
  width: 60px;
  height: 60px;
  margin: 0 10px;
}

.app__item-title {
  font-size: 14px;
  font-weight: 700;
}

.app__item-title:hover {
  color: #214ce7;
}

.app__item-version {
  font-size: 11px;
  margin-top: 10px;
}

.pagination__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pagination {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 620px;
  height: 39px;
  padding: 0;
  margin: 40px auto 0 auto;
  background-color: var(--bgapp);
  border-radius: 8px;

}

.page-item {
  border-radius: 8px;
  /* transform: scale(1); */
  cursor: pointer;

}

.page-link {
  /* position: absolute !important; */
  /* top: 0; */
  background-color: transparent !important;
  color: #85888d !important;
  border: none !important;
  font-size: 10px !important;
  border-radius: 8px;
  /* padding: 0 2px; */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: none;

}

.page-item:not(:first-child) .page-link{
  margin-left: 0 !important;
}

.page-item:not(:first-child),
.page-item:not(:last-child){
  margin-left: 4px !important;
}

.active:focus {
  box-shadow: none !important;
}

.page-item:first-child,
.page-item:last-child,
.page-item:first-child .page-link,
.page-item:last-child .page-link {
  width: 90px !important;
}

.page-item:first-child {
  position: absolute;
  right: 5px;
}

.page-item:last-child {
  position: absolute;
  left: 5px;
}

.disabled:first-child,
.disabled:last-child {
  display: none !important;
}

.active {
  background-color: #214ce7;
  font-weight: 700;

}

.active .page-link {
  color: #fff !important;
}

@media only screen and (max-width: 1200px) {
  .container {
    width: 960px !important;
  }
}

@media only screen and (max-width: 992px) {
  .container {
    width: 740px !important;
  }
}

@media only screen and (max-width: 768px) {
  .container {
    width: 540px !important;
  }
}

@media only screen and (max-width: 576px) {
  .container {
    width: 95% !important;
  }
}
</style>