<template>
  <div class="navbar-wrapper">
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
            <i class="fa-sharp fa-solid fa-caret-down"></i>
            <router-link to="/apps">برنامه ها</router-link> 
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

          <li class="navbar__link">
            <i class="fa-sharp fa-solid fa-caret-down"></i>
            <router-link to="/apps">بازی ها</router-link>
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

          <li class="navbar__link">
            <i class="fa-sharp fa-solid fa-caret-down"></i>
            <router-link to="/apps">آموزش ها</router-link>
            <ul class="navbar__dropdown navbar__dropdown__3">
              <li class="navbar__dropdown__link"> آموزشی</li>
              <li class="navbar__dropdown__link"> ترفندها</li>
              <li class="navbar__dropdown__link"> مقایسه</li>
              <li class="navbar__dropdown__link"> سیستمی</li>
              <li class="navbar__dropdown__link"> معرفی نرم افزار و وبسایت</li>
            </ul>
          </li>

          <li class="navbar__link">
            <i class="fa-sharp fa-solid fa-caret-down"></i>
            <router-link to="/apps">اخبار و مقالات</router-link>
             
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
  </div>

  <div class="hamburger__menu">
    <div class="x-box">
      <i @click="closeHumb" class="fa fa-times" style="cursor:pointer;"></i>
    </div>
    <ul class="hamburger__menu__link">
      <li class="hamburger__list">
        <div @click="openApps" class="hamburger__link">برنامه ها <i class="fa fa-plus hamburger__icon__1"></i></div>
        <ul class="hamburger__dropdown hamburger__dropdown__1">
          <li class="hamburger__dropdown__link">مالتی مدیا
            <ul class="inner__list">
              <li class="hamburger__dropdown__link">
                <p> پخش کننده صوتی و تصویری </p>
              </li>
              <li class="hamburger__dropdown__link">
                <p> ضبط و ویرایش ویدئو </p>
              </li>
              <li class="hamburger__dropdown__link">
                <p> مبدل صوتی و تصویری </p>
              </li>
              <li class="hamburger__dropdown__link">
                <p> پلاگین های صوتی و تصویری </p>
              </li>
              <li class="hamburger__dropdown__link">
                <p> ضبط و ویرایش صوت </p>
              </li>
              <li class="hamburger__dropdown__link">
                <p> تصویر برداری از صفحه نمایش </p>
              </li>
            </ul>
          </li>
          <li class="hamburger__dropdown__link"> امنیتی
            <ul class="inner__list">
              <li class="hamburger__dropdown__link"> آنتی ویروس </li>
              <li class="hamburger__dropdown__link"> ضد هرزنامه و ضدجاسوسی </li>
              <li class="hamburger__dropdown__link"> مدیریت رمز عبور </li>
              <li class="hamburger__dropdown__link"> نظارت و کنترل </li>
              <li class="hamburger__dropdown__link"> حذف ایمن اطلاعات </li>
              <li class="hamburger__dropdown__link"> قفل گذاری </li>
              <li class="hamburger__dropdown__link"> تست و نفوذ </li>
            </ul>
          </li>
          <li class="hamburger__dropdown__link"> گرافیک
            <ul class="inner__list">
              <li class="hamburger__dropdown__link"> طراحی دو بعدی </li>
              <li class="hamburger__dropdown__link"> طراحی سه بعدی </li>
              <li class="hamburger__dropdown__link"> ویرایش تصویر </li>
              <li class="hamburger__dropdown__link"> انیمیشن سازی </li>
              <li class="hamburger__dropdown__link"> مبدل تصویر </li>
              <li class="hamburger__dropdown__link"> ابزار فونت </li>
              <li class="hamburger__dropdown__link"> ابزار آیکون </li>
              <li class="hamburger__dropdown__link"> پلاگین </li>
              <li class="hamburger__dropdown__link"> دیگر </li>
              <li class="hamburger__dropdown__link"> بک گراند و اسکرین سیور </li>
              <li class="hamburger__dropdown__link"> طراحی مهندسی </li>
              <li class="hamburger__dropdown__link"> عکاسی </li>
            </ul>
          </li>
          <li class="hamburger__dropdown__link"> دیسک
            <ul class="inner__list">
              <li class="hamburger__dropdown__link"> مبدل </li>
              <li class="hamburger__dropdown__link"> ابزار ایمیج </li>
              <li class="hamburger__dropdown__link"> ریکاوری </li>
            </ul>
          </li>
          <li class="hamburger__dropdown__link"> اینترنت و شبکه
            <ul class="inner__list">
              <li class="hamburger__dropdown__link"> مرورگر اینترنت </li>
              <li class="hamburger__dropdown__link"> مدیریت دانلود </li>
              <li class="hamburger__dropdown__link"> ابزار اینترنت </li>
              <li class="hamburger__dropdown__link"> اف تی پی </li>
              <li class="hamburger__dropdown__link"> اشتراک فایل </li>
              <li class="hamburger__dropdown__link"> کنترل از راه دور </li>
              <li class="hamburger__dropdown__link"> سرور و ابزارها </li>
              <li class="hamburger__dropdown__link"> مدیریت Wifi </li>
            </ul>
          </li>
          <li class="hamburger__dropdown__link"> ارتباطات
            <ul class="inner__list">
              <li class="hamburger__dropdown__link"> چت و مسنجر</li>
              <li class="hamburger__dropdown__link"> ایمیل</li>
              <li class="hamburger__dropdown__link"> فکس و تلفن</li>
              <li class="hamburger__dropdown__link"> شبکه اجتماعی</li>
            </ul>
          </li>
          <li class="hamburger__dropdown__link"> اداری و کاری
            <ul class="inner__list">
              <li class="hamburger__dropdown__link"> آفیس و ترجمه</li>
              <li class="hamburger__dropdown__link"> پی دی اف</li>
              <li class="hamburger__dropdown__link"> ارائه</li>
              <li class="hamburger__dropdown__link"> مدیریت پروژه</li>
              <li class="hamburger__dropdown__link"> مترجم متن</li>
              <li class="hamburger__dropdown__link"> سازمان دهنده و تقویم و یادآور</li>
              <li class="hamburger__dropdown__link"> ماشین حساب و مبدل</li>
              <li class="hamburger__dropdown__link"> مدیریت مشتری</li>
              <li class="hamburger__dropdown__link"> پرینترو اسکنر</li>
              <li class="hamburger__dropdown__link"> مجازی ساز و Vm</li>
              <li class="hamburger__dropdown__link"> یادداشت</li>
            </ul>
          </li>
          <li class="hamburger__dropdown__link"> توسعه
            <ul class="inner__list">
              <li class="hamburger__dropdown__link"> زبان برنامه نویسی</li>
              <li class="hamburger__dropdown__link"> مفسر و کامپایلر</li>
              <li class="hamburger__dropdown__link"> IDE</li>
              <li class="hamburger__dropdown__link"> کتابخانه و سورس</li>
              <li class="hamburger__dropdown__link"> پایگاه داده و دیتابیس</li>
              <li class="hamburger__dropdown__link"> رمزگذاری و محافظت</li>
              <li class="hamburger__dropdown__link"> نقشه ذهنی</li>
              <li class="hamburger__dropdown__link"> طراحی وبسایت</li>
              <li class="hamburger__dropdown__link"> طراحی اپلیکیشن</li>
              <li class="hamburger__dropdown__link"> ابزار برنامه نویسی</li>
            </ul>
          </li>
          <li class="hamburger__dropdown__link"> آموزشی
            <ul class="inner__list">
              <li class="hamburger__dropdown__link"> گرافیک و طراحی</li>
              <li class="hamburger__dropdown__link"> مک اوس</li>
              <li class="hamburger__dropdown__link"> اکشن</li>
              <li class="hamburger__dropdown__link"> برنامه نویسی</li>
              <li class="hamburger__dropdown__link">کسب و کار</li>
              <li class="hamburger__dropdown__link"> مهندسی </li>
              <li class="hamburger__dropdown__link"> ریاضیات</li>
              <li class="hamburger__dropdown__link"> عمومی</li>
            </ul>
          </li>
          <li class="hamburger__dropdown__link"> علمی و پژوهشی
            <ul class="inner__list">
              <li class="hamburger__dropdown__link">آسمان و فضا</li>
            </ul>
          </li>
          <li class="hamburger__dropdown__link"> سیستم عامل
            <ul class="inner__list">
              <li class="hamburger__dropdown__link"> سیستم عامل High Sierra</li>
              <li class="hamburger__dropdown__link"> سیستم عامل Sierra</li>
              <li class="hamburger__dropdown__link"> سیستم عامل El Capitan</li>
            </ul>
          </li>
          <li class="hamburger__dropdown__link"> حسابداری و مالی
            <ul class="inner__list">
              <li class="hamburger__dropdown__link"> حسابدار شخصی و امور مالی</li>
              <li class="hamburger__dropdown__link"> مالی</li>
            </ul>
          </li>
          <li class="hamburger__dropdown__link"> کاربردی
            <ul class="inner__list">
              <li class="hamburger__dropdown__link"> بازیابی اطلاغات</li>
              <li class="hamburger__dropdown__link"> گرفتن نسخه پشتیبان</li>
              <li class="hamburger__dropdown__link"> بهینه ساز</li>
              <li class="hamburger__dropdown__link"> فشرده ساز فایل</li>
              <li class="hamburger__dropdown__link"> مدیریت فایل</li>
              <li class="hamburger__dropdown__link"> جستجوگر </li>
              <li class="hamburger__dropdown__link"> ابزار سخت افزار</li>
            </ul>
          </li>
          <li class="hamburger__dropdown__link"> اپل
            <ul class="inner__list">
              <li class="hamburger__dropdown__link"> نرم‌افزار های سیستمی</li>
              <li class="hamburger__dropdown__link"> ابزارهای سیستمی</li>
            </ul>
          </li>
          <li class="hamburger__dropdown__link"> سلامت
            <ul class="inner__list">
              <li class="hamburger__dropdown__link"> سلامت</li>
              <li class="hamburger__dropdown__link"> ابزارها</li>

            </ul>
          </li>
        </ul>

      </li>

      <li class="hamburger__list">
        <div @click="openGames" class="hamburger__link"> بازی ها <i class="fa fa-plus hamburger__icon__2"></i></div>
        <ul class="hamburger__dropdown hamburger__dropdown__2">
          <li class="hamburger__dropdown__link"> ماجراجویی</li>
          <li class="hamburger__dropdown__link"> ورزشی</li>
          <li class="hamburger__dropdown__link"> اکشن</li>
          <li class="hamburger__dropdown__link"> تیراندازی</li>
          <li class="hamburger__dropdown__link"> مسابقه ای</li>
          <li class="hamburger__dropdown__link"> سرگرم کننده</li>
          <li class="hamburger__dropdown__link"> معمایی</li>
          <li class="hamburger__dropdown__link"> استراتژی</li>
          <li class="hamburger__dropdown__link"> نقش آفرینی</li>
          <li class="hamburger__dropdown__link"> کودکان</li>
          <li class="hamburger__dropdown__link"> شبیه سازی</li>
          <li class="hamburger__dropdown__link"> علمی تخیلی</li>
          <li class="hamburger__dropdown__link"> ترسناک</li>
        </ul>
      </li>
      <li class="hamburger__list">
        <div @click="openCourses" class="hamburger__link"> آموزش ها<i class="fa fa-plus hamburger__icon__3"></i>
        </div>
        <TransitionGroup name="hamburger">
          <ul class="hamburger__dropdown hamburger__dropdown__3">
            <li class="hamburger__dropdown__link"> آموزشی</li>
            <li class="hamburger__dropdown__link"> ترفندها</li>
            <li class="hamburger__dropdown__link"> مقایسه</li>
            <li class="hamburger__dropdown__link"> سیستمی</li>
            <li class="hamburger__dropdown__link"> معرفی نرم افزار و وبسایت</li>
          </ul>
        </TransitionGroup>
      </li>
      <li class="hamburger__list">
        <div @click="openNews" class="hamburger__link"> اخبار و مقالات<i class="fa fa-plus hamburger__icon__4"></i>
        </div>
        <ul class="hamburger__dropdown hamburger__dropdown__4">
          <li class="hamburger__dropdown__link"> اخبار مک</li>
          <li class="hamburger__dropdown__link"> اخبار آیفون و آی پد</li>
          <li class="hamburger__dropdown__link"> اخبار OSX</li>
          <li class="hamburger__dropdown__link"> اخبار iOS</li>
          <li class="hamburger__dropdown__link"> اخبار نرم افزارها</li>
          <li class="hamburger__dropdown__link"> اخبار iWatch</li>
          <li class="hamburger__dropdown__link"> اخبار برنامه نویسی</li>
          <li class="hamburger__dropdown__link"> اخبار Apple</li>
        </ul>
      </li>
      <li class="hamburger__link"> بازارچه اپل<sup class="mb-2 small">(بتا)</sup></li>
      <li class="hamburger__link"> تیکت ها</li>
      <li class="hamburger__link">تماس با ما</li>
      <li class="hamburger__link"> ورود</li>
      <li class="hamburger__link"> ثبت نام</li>
    </ul>
  </div>
</template>

<script>
export default {
  setup()
  {
    // dropdowns opening

    function openApps()
    {
      dropdown(1)
    }

    function openGames()
    {
      dropdown(2)
    }

    function openCourses()
    {
      dropdown(3)
    }

    function openNews()
    {
      dropdown(4)
    }

    function dropdown(x)
    {
      let hamburgerDropdown = document.querySelector(`.hamburger__dropdown__${x}`)
      let icon = document.querySelector(`.hamburger__icon__${x}`)

      console.log();
      hamburgerDropdown.classList.toggle('display__block')

      if (icon.classList.contains('fa-plus'))
      {
        icon.className = `fa fa-minus hamburger__icon__${x}`
      }
      else
      {
        icon.className = `fa fa-plus hamburger__icon__${x}`
      }
    }

    function openHumb()
    {
      let humb = document.querySelector('.hamburger__menu')
      let all = document.querySelector('*:not(.hamburger__menu)')

      humb.classList.add('display-block')
      all.classList.add('overflow-hidden')
    }

    function closeHumb()
    {
      let humb = document.querySelector('.hamburger__menu')
      let all = document.querySelector('*:not(.hamburger__menu)')

      humb.classList.remove('display-block')
      all.classList.remove('overflow-hidden')
    }


    // nav search icon event

    function searchFocus()
    {
      let SearchInput = document.querySelector('.search__input')
      SearchInput.focus()
    }

    return { openApps, openGames, openCourses, openNews, openHumb, closeHumb, searchFocus, }
  },
  mounted()
  {

    let navbarWrapper = document.querySelector('.navbar-wrapper')
    let navbarFixed = document.querySelector('.navbar')

    document.addEventListener('scroll', function ()
    {
      if (document.documentElement.scrollTop > 0)
      {
        navbarFixed.classList.add('fixed')
        navbarWrapper.classList.add('wrapper__fixed')
      } else
      {
        navbarFixed.classList.remove('fixed')
        navbarWrapper.classList.remove('wrapper__fixed')
      }
    })
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

.display-block {
  transform: translateX(0);
}

.display-none {
  display: none;
}

.overflow-hidden {
  overflow: hidden;
}

.navbar-wrapper {
  font-family: "vazir";
  transition: all .3s ease;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;
  /* background: rgba(51, 51, 51, 0.9); */
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
}

.navbar {
  width: 1100px;
  position: fixed;
  border-bottom: 1px solid var(--bordercolor);
  margin: 0;
  /* padding: 30px 0 !important; */
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left__nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 3rem;
  align-content: center;
}

.right__nav {
  color: var(--color);
  display: flex;
  flex-direction: row-reverse;
  align-content: center;
  align-items: center;
  font-size: 12px;
  /* padding-bottom: 10px; */
}

.wrapper__fixed {
  background: var(--bgtransparent) !important;
  backdrop-filter: blur(20px);
}

.fixed {
  border-bottom: none;
}

.navbar__dropdown__link {

  padding: 11px 25px;
  display: flex;
  justify-content: flex-end;

}

.navbar__dropdown__1 .navbar__dropdown__link {
  justify-content: space-between;
}

.navbar__dropdown__link:hover {
  background: rgb(67, 67, 67);
}

.navbar__link:nth-child(1):hover .navbar__dropdown__1 {
  animation: dropdownHover ease .4s;
  display: block !important;
}

.navbar__link:nth-child(2):hover .navbar__dropdown__2 {
  animation: dropdownHover ease .4s;
  display: block !important;
}

.navbar__link:nth-child(3):hover .navbar__dropdown__3 {
  animation: dropdownHover ease .4s;
  display: block !important;
}

.navbar__link:nth-child(4):hover .navbar__dropdown__4 {
  animation: dropdownHover ease .4s;
  display: block !important;
}

@keyframes dropdownHover {
  0% {
    transform: translateY(15px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

.navbar__link a{
  margin-left: 3px;
  color: var(--color);
  text-decoration: none;
}

.navbar__link a:hover{
  color: var(--color);
}

.navbar__dropdown {
  display: none !important;
  position: absolute;
  margin: 0;
  padding: 7px 0;
  width: 200px;
  border-radius: 10px;
  background-color: var(--bgswiper);
  top: 50px;
  right: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: end;
  z-index: 5;
}

.navbar__dropdown::before {
  border-color: transparent transparent var(--bgswiper);
  border-style: solid;
  border-width: 0 6px 6px;
  bottom: 100%;
  content: " ";
  height: 0;
  pointer-events: none;
  position: absolute;
  right: 20px;
  width: 0;
}

.navbar__dropdown__1 li {
  position: relative;
}

.navbar__dropleft {
  display: none !important;
  position: absolute;
  margin: 0;
  padding: 7px 0;
  width: 200px;
  border-radius: 10px;
  background-color: var(--dropdown);
  top: 0;
  right: 70%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: right;
  text-align: right;
  z-index: 5;
  /* transition: 0.3s ease !important; */
}

.navbar__dropleft::before {
  border-color: transparent transparent var(--dropleft);
  border-style: solid;
  border-width: 0 6px 6px;
  transform: rotate(90deg);
  bottom: 100%;
  content: " ";
  height: 0;
  pointer-events: none;
  position: absolute;
  top: 15px;
  right: -8px;
  width: 0;
}

.navbar__dropleft__link {
  padding: 11px 25px;
  display: flex;
  justify-content: flex-end;
}

.navbar__dropleft__link:hover {
  background: rgb(67, 67, 67);
}

.navbar__dropleft__7 {
  top: -100px;
}

.navbar__dropleft__7::before {
  top: 115px;
}

.navbar__dropleft__8 {
  top: -100px;
}

.navbar__dropleft__8::before {
  top: 115px;
}

.navbar__dropleft__9 {
  top: -90px;
}

.navbar__dropleft__9::before {
  top: 105px;
}

.navbar__dropleft__13 {
  top: -150px;
}

.navbar__dropleft__13::before {
  top: 165px;
}

.navbar__dropleft__15 {
  top: -30px;
}

.navbar__dropleft__15::before {
  top: 45px;
}

@keyframes dropleftHover {
  0% {
    opacity: 0;
    transform: translateX(-15px);
  }

  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

.navbar__dropdown__1 li:nth-child(1):hover .navbar__dropleft__1 {
  animation: dropleftHover 0.4s ease;
  display: block !important;
}

.navbar__dropdown__1 li:nth-child(2):hover .navbar__dropleft__2 {
  animation: dropleftHover 0.4s ease;
  display: block !important;
}

.navbar__dropdown__1 li:nth-child(3):hover .navbar__dropleft__3 {
  animation: dropleftHover 0.4s ease;
  display: block !important;
}

.navbar__dropdown__1 li:nth-child(4):hover .navbar__dropleft__4 {
  animation: dropleftHover 0.4s ease;
  display: block !important;
}

.navbar__dropdown__1 li:nth-child(5):hover .navbar__dropleft__5 {
  animation: dropleftHover 0.4s ease;
  display: block !important;
}

.navbar__dropdown__1 li:nth-child(6):hover .navbar__dropleft__6 {
  animation: dropleftHover 0.4s ease;
  display: block !important;
}

.navbar__dropdown__1 li:nth-child(7):hover .navbar__dropleft__7 {
  animation: dropleftHover 0.4s ease;
  display: block !important;
}

.navbar__dropdown__1 li:nth-child(8):hover .navbar__dropleft__8 {
  animation: dropleftHover 0.4s ease;
  display: block !important;
}

.navbar__dropdown__1 li:nth-child(9):hover .navbar__dropleft__9 {
  animation: dropleftHover 0.4s ease;
  display: block !important;
}

.navbar__dropdown__1 li:nth-child(10):hover .navbar__dropleft__10 {
  animation: dropleftHover 0.4s ease;
  display: block !important;
}

.navbar__dropdown__1 li:nth-child(11):hover .navbar__dropleft__11 {
  animation: dropleftHover 0.4s ease;
  display: block !important;
}

.navbar__dropdown__1 li:nth-child(12):hover .navbar__dropleft__12 {
  animation: dropleftHover 0.4s ease;
  display: block !important;
}

.navbar__dropdown__1 li:nth-child(13):hover .navbar__dropleft__13 {
  animation: dropleftHover 0.4s ease;
  display: block !important;
}

.navbar__dropdown__1 li:nth-child(14):hover .navbar__dropleft__14 {
  animation: dropleftHover 0.4s ease;
  display: block !important;
}

.navbar__dropdown__1 li:nth-child(15):hover .navbar__dropleft__15 {
  animation: dropleftHover 0.4s ease;
  display: block !important;
}

.border-left {
  margin-left: 0 !important;
  /* border-left: 1px solid rgb(91, 89, 89); */
}

.hamburger-box {
  cursor: pointer;
  display: none;
}

.search-wrapper {
  /* margin-bottom: 20px; */
  border-right: 1px solid var(--bordercolor);
  margin-right: 20px;
}

.search-wrapper a i {
  color: var(--color);
  /* font-weight: 100; */
}

.search__icon {
  cursor: pointer;
  padding-right: 20px;
  color: rgb(125, 159, 174);
  font-size: 20px;
  height: 20px;
}

.small {
  font-weight: 100;
  color: rgb(178, 0, 0);
}

.logo {
  color: #fff;
  width: 16px;
  height: 16px;
  margin: 0 -2px 1.5px -1.8px;
}

.logo__box {
  color: var(--color);
  font-family: 'Public Sans', sans-serif;
  display: flex;
  justify-content: start;
  align-items: center;
}

.menu__link {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row-reverse;
  list-style-type: none;
}

.navbar__link {

  padding: 15px 0;
  position: relative;
  cursor: pointer;
  margin: 0 0 0 25px;
}

.navbar__link:last-child {
  margin: 0 0 0 10px;
}

.hamburger__menu {
  font-family: "vazir";
  transition: all ease .5s;
  transform: translateX(150vw);
  direction: rtl;
  padding: 20px;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  color: var(--color);
  background-color: var(--bgcolor);
  overflow-y: scroll;
}

.x-box {
  height: 3rem;
  margin-bottom: 10px;
  border-bottom: 1px solid rgb(90, 90, 90);
  color: var(--color);
  font-size: 20px;
}

.hamburger__menu__link {
  padding: 0;
  font-size: 13px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 36px;
}

.hamburger__link {
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  padding-right: 30px;
}

.fa-plus,
.fa-minus {
  position: absolute;
  right: 0;
  top: 13px;
}

.hamburger__dropdown {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s ease-out;
  position: relative;
  list-style: none;
}

.hamburger__dropdown__link {
  cursor: pointer;
  list-style: none;
  color: rgb(159, 151, 151);
  /* padding-right: 0; */
}

.hamburger__dropdown__link p {
  display: inline;
  padding: 0;
  margin: 0;
}

.hamburger-enter-active,
.hamburger-leave-from {
  transition: height 0.7s ease;
  /* -moz-transition: height 1s ease;
  -webkit-transition: height 1s ease;
  -o-transition: height 1s ease;
  transition: height 1s ease; */
}

.hamburger-enter-to,
.hamburger-leave-from {
  height: auto;
}

.hamburger-enter-from,
.hamburger-leave-to {
  height: 0;
}

.inner__list .hamburger__dropdown__link p:hover {
  color: rgb(255, 255, 255);
}

.inner__list {
  /* height: 0; */
  padding-right: 0;
}

.display__block {
  /* height: auto; */
  max-height: 1500px;
  transition: max-height 0.5s ease-in;
  display: block !important;
}

@media only screen and (max-width: 1200px) {
  .navbar {
    width: 960px;
  }
}

@media only screen and (max-width: 992px) {
  .navbar {
    width: 740px;
  }
}

@media only screen and (max-width: 768px) {
  .navbar {
    width: 540px;
  }
}

@media only screen and (max-width: 576px) {
  .navbar {
    width: 95%;
  }
}</style>