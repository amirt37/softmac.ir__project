<template>
    <div class="qoute">
        <i class="qoute__icon fas fa-quote-right"></i>
        <div dir="rtl" class="qoute__text"> چیزهای مورد علاقه من در زندگی، رایگان هستند، پس واضح است که با ارزش ترین
            منبع ما زمان می باشد. </div>
        <img class="qoute__img" src="@/img/billgates.jpg" alt="">
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
                        <li v-for="(app, index) in gamesMenu" :key="index" class="bottom__item"><a href="">{{ app }}</a>
                        </li>
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
                        <li v-for="(app, index) in coursesMenu" :key="index" class="bottom__item"><a href=""> {{ app }}</a>
                        </li>

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
    </div>
</template>

<script>
import { AppsArray } from '@/components/data/appsdata';

export default {
    mixins: [AppsArray],
    data()
    {
        return {
            appsMenu: AppsArray.data().appsList,
            gamesMenu: AppsArray.data().gamesList,
            newsMenu: AppsArray.data().newsList,
            coursesMenu: AppsArray.data().coursesList,
        }
    },
}
</script>

<style>
@font-face {
    font-family: "vazir";
    src: url("../font/Vazir.eot") format('eot'),
        url("../font/Vazir.woff") format('woff'),
        url("../font/Vazir.woff2") format('woff2');
}

.qoute {
    font-family: "vazir";
}

.bottom {
    font-family: "vazir";
}

.footer {
    font-family: "vazir";
}
</style>