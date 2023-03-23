<template>
  <main-header />
  <router-view></router-view>
  <div class="theme__controll">
    <i class="fas fa-adjust"></i>
  </div>
  <div class="to__top">
    <i class="fas fa-angle-up"></i>
  </div>

</template>

<script>

import MainHeader from './components/MainHeader.vue';

export default {

  components: { MainHeader },
  mounted()
  {
    // go to top with click


    // function scrollToTop() {
    //   var position =
    //       document.body.scrollTop || document.documentElement.scrollTop;
    //   if (position) {
    //       window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
    //       scrollAnimation = setTimeout("scrollToTop()", 30);
    //   } else clearTimeout(scrollAnimation);
    // }

    document.addEventListener('scroll', function ()
    {
      if (document.documentElement.scrollTop > 0)
      {
        toTop.classList.add('come__up')
      } else
      {
        toTop.classList.remove('come__up')
      }
    })

    let toTop = document.querySelector('.to__top')

    toTop.addEventListener('click', () => {
      document.documentElement.scrollTop = 0
      // document.documentElement.scrollTop -= window.scrollY * 0.05;
    })

    // change theme button 

    let changeTheme = document.querySelector('.theme__controll')
    let themeIcon = document.querySelector('.theme__controll i')
    let root = document.querySelector(':root')
    let dark = true

    changeTheme.addEventListener('click', () =>
    {
      dark = !dark


      themeIcon.classList.toggle('rotate')

      if (!dark)
      {
        root.style.setProperty('--bgcolor', '#d6d6d6');
        root.style.setProperty('--bgmiddle', 'rgba(186,185,185,0.4)');
        root.style.setProperty('--bordercolor', 'hsla(0,0%,84%,.1)');
        root.style.setProperty('--bgtransparent', '#c6c6c6a6');
        root.style.setProperty('--color', '#000');
        root.style.setProperty('--searchbox', 'rgba(183, 183, 183, 0.7)');
        root.style.setProperty('--dropdown', 'rgb(225, 225, 225)');
        root.style.setProperty('--dropleft', 'rgb(191, 195, 208)');
        root.style.setProperty('--btn', '#212836');
        root.style.setProperty('--bgbtn', '#c1c1c1');
        root.style.setProperty('--bgswiper', 'rgb(225, 221, 221)');
        root.style.setProperty('--bottom', '#c6c6c6');
        root.style.setProperty('--bgapp', 'rgba(255, 255, 255, 0.7)');
      }
      else
      {
        root.style.setProperty('--bgcolor', '#2c3340');
        root.style.setProperty('--bgmiddle', 'rgba(51, 51, 51, 0.7)');
        root.style.setProperty('--bordercolor', 'hsla(0,0%,84%,.1)');
        root.style.setProperty('--bgtransparent', 'rgba(44,51,64,.7)');
        root.style.setProperty('--color', 'rgb(225, 221, 221)');
        root.style.setProperty('--searchbox', 'rgba(41,45,52,.7)');
        root.style.setProperty('--dropdown', 'rgb(34, 37, 47)');
        root.style.setProperty('--dropleft', '#1f2633');
        root.style.setProperty('--btn', '#d6d6d6');
        root.style.setProperty('--bgbtn', '#212836');
        root.style.setProperty('--bgswiper', 'rgb(37, 46, 61)');
        root.style.setProperty('--bottom', '#212836');
        root.style.setProperty('--bgapp', 'rgba(39,46,59,.7)');
      }

    })
  }
}

</script>


<style>
:root {
  --bgcolor: #2c3340;
  --bgtransparent: rgba(44, 51, 64, .7);
  --searchbox: rgba(41, 45, 52, .7);
  --bordercolor: hsla(0, 0%, 84%, .1);
  --bgmiddle: rgba(51, 51, 51, 0.7);
  --color: rgb(225, 221, 221);
  --dropdown: rgb(34, 37, 47);
  --dropleft: #1f2633;
  --btn: #d6d6d6;
  --bgbtn: #212836;
  --bgswiper: rgb(37, 46, 61);
  --bottom: #212836;
  --bgapp: rgba(255, 255, 255, 0.7);
  --bgapp: rgba(39,46,59,.7);
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

.theme__controll,
.to__top {
  transition: all ease 0.4s;
  cursor: pointer;
  box-shadow: 0 2px 5px -3px black;
  background-color: var(--bgbtn);
  color: var(--btn);
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.theme__controll i {
  transition: all ease 0.6s;
  font-weight: 900;
}

.to__top {
  right: 70px;
  bottom: -100px;
}

.come__up {
  bottom: 20px;
}

.light {
  color: #212836;
  background-color: #d6d6d6;
}

.rotate {
  transform: rotate(-180deg);
}

</style>