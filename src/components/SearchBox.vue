<template>
    <div class="search-box mt-1">
        <div class="search">
            <i @click.prevent="tapsearch" class="fa-solid fa-magnifying-glass main__search__icon"></i>
            <input v-model="input" type="text" id="input" dir="rtl" class="search__input" placeholder="جستجو">
        </div>
        <div v-if="input.length > 0" class="search__wrapper">
            <ul class="search__wrapper-list">

                <div class="apps__show">
                    <li v-if="input && filteredApps().length > 0" class="listed__apps border__bottom">
                        <i class="fab fa-app-store-ios"></i>
                        <p>برنامه‌ها</p>
                    </li>
                    <li class="search__wrapper-item" v-for="(app, index) in filteredApps()" :key="index">
                        <div class="listed__apps">
                            <img :src="require(`@/img/${app.src}`)" alt="" style="width: 14px; height: 14px;">
                            <p>{{ app.title }}</p>
                        </div>
                    </li>
                </div>

                <div class="games__show">
                    <li v-if="input && filteredgames().length > 0" class="listed__apps border__bottom ">
                        <i class="fas fa-gamepad"></i>
                        <p>بازی‌ها</p>
                    </li>
                    <li class="search__wrapper-item" v-for="(game, index) in filteredgames()" :key="index">
                        <div class="listed__apps">
                            <img :src="require(`@/img/${game.src}`)" alt="" style="width: 14px; height: 14px;">
                            <p>{{ game.title }}</p>
                        </div>
                    </li>
                </div>

                <div class="games__show">
                    <li v-if="input && filteredCourses().length > 0" class="listed__apps border__bottom ">
                        <i class="fas fa-gamepad"></i>
                        <p>آموزش‌ها</p>
                    </li>
                    <li class="search__wrapper-item" v-for="(course, index) in filteredCourses()" :key="index">
                        <div class="listed__apps">
                            <img :src="require(`@/img/${course.src}`)" alt="" style="width: 14px; height: 14px;">
                            <p>{{ course.title }}</p>
                        </div>
                    </li>
                </div>

                <div class="games__show">
                    <li v-if="input && filteredNews().length > 0" class="listed__apps border__bottom ">
                        <i class="fa-solid fa-newspaper"></i>
                        <p>اخبار</p>
                    </li>
                    <li class="search__wrapper-item" v-for="(news, index) in filteredNews()" :key="index">
                        <div class="listed__apps">
                            <img :src="require(`@/img/${news.src}`)" alt="" style="width: 14px; height: 14px;">
                            <p>{{ news.title }}</p>
                        </div>
                    </li>
                </div>

                <li class="search__wrapper-item"
                    v-if="input.length && !filteredApps().length && !filteredNews().length && !filteredgames().length > 0">
                    <p class="mt-3 me-3"> نتیجه ای برای جستجوی شما پیدا نشد !!</p>
                </li>

            </ul>
        </div>
    </div>
    <div class="space">^SPACE</div>
</template>

<script>
import { ref } from 'vue';
import { AppsArray } from './data/appsdata';

export default {
    mixins: [AppsArray],
    setup()
    {

        let Allgames = AppsArray.data().gamesArray
        let AllApps = AppsArray.data().AppsArray;
        let AllCourses = AppsArray.data().coursesArray
        let AllNews = AppsArray.data().newsArray

        // console.log(AllCourses);
        let input = ref("");

        function filteredApps()
        {
            return AllApps.filter((app) =>
                (app.title).toLowerCase().includes(input.value.toLowerCase())
            )
        }

        function filteredgames()
        {
            return Allgames.filter((game) =>
                (game.title).toLowerCase().includes(input.value.toLowerCase())
            )
        }

        function filteredCourses()
        {
            return AllCourses.filter((course) =>
                (course.title).includes(input.value)
            )
        }

        function filteredNews()
        {
            return AllNews.filter((news) =>
                (news.title).toLowerCase().includes(input.value.toLowerCase())
            )
        }

        return { filteredNews, filteredCourses, filteredApps, filteredgames, input }
    }
}
</script>

<style>

@font-face {
  font-family: "vazir";
  src: url("../font/Vazir.eot") format('eot'),
    url("../font/Vazir.woff") format('woff'),
    url("../font/Vazir.woff2") format('woff2');
}

.search-box {
    /* z-index: 99; */
    font-family: "vazir";
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.search__wrapper {
    font-family: "vazir";
    /* display: none; */
    margin-top: -1px;
}

.search {
    border-radius: 4px;
    border: 1px solid var(--bordercolor);
    padding: 5px 13px;
    background: var(--searchbox);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 600px;
    height: 50px;
    /* box-shadow: 0 5px 35px -5px var(--bgtransparent); */
}

.search__input {
    cursor: text;
    width: 90%;
    color: var(--color);
    font-size: 14px;
    border: none;
    outline: none;
    background-color: transparent;
}

.main__search__icon {
    cursor: pointer;
    color: rgb(88, 88, 88);
    font-size: 20px;
}

.main__search__icon:hover {
    color: rgb(138, 138, 138);
}

.active {
    display: block;
}

.search__wrapper-list {
    
    display: block;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border: 1px solid var(--bordercolor);
    padding: 0;
    margin: 0;
    background: linear-gradient(to top, var(--searchbox) 70%, var(--searchbox));
    /* display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center; */
    width: 600px;
    max-height: 200px;
    overflow-y: scroll;
    overflow-x: hidden;
    direction: rtl;
}

.search__wrapper-list::-webkit-scrollbar-track {
    background-color: var(--bordercolor);

}

.search__wrapper-list::-webkit-scrollbar {

    width: 6px;
    overflow: hidden;
}

.search__wrapper-list::-webkit-scrollbar-thumb {
    background-color: var(--color);
}

.search__wrapper-item {
    
    color: var(--color);
    cursor: pointer;
    list-style-type: none;
}

.search__wrapper-item:hover {
    background-color: rgb(39, 93, 239);
}

.listed__apps {
    width: max-content;
    width: 600px;
    font-size: 12px;
    display: flex;
    padding: 3px 8px 3px 0;
    justify-content: start;
}

.listed__apps p {
  color: var(--color);
  margin: 0 10px 0 0;
}

.border__bottom {
    color: rgb(39, 93, 239);
    border-bottom: 1px solid var(--bordercolor);
}

.space {
  color: hsla(0, 0%, 84%, .5);
  margin: 10px auto;
  width: 600px;
  font-size: 12px;
}

@media only screen and (max-width: 768px) {
    
  .search,
  .search__wrapper-list,
  .space {
    width: 500px;
  }
}

@media only screen and (max-width: 576px) {
    
  .search,
  .space {
    max-width: 95%;
  }

  .search__wrapper {
    max-width: 95%;
  }
  
  .search__wrapper-list {
    width: 100%;
  }
  }
</style>