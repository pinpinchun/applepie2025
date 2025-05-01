<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeIndex = ref('1')
const isMobile = ref(false);
const isPaid = ref(false);

const checkRWD = () => {
  if (window.innerWidth <= 1024 && window.innerWidth > 576){
    isPaid.value = true;
    isMobile.value = false;
  }

  if (window.innerWidth <= 576){
    isPaid.value = false;
    isMobile.value = true;
  }
}

onMounted(() => {
  checkRWD()
  window.addEventListener('resize', checkRWD)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkRWD)
})
</script>

<template>
  <div class="common-layout">
    <el-container>
      <!-- Header Navigation -->
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
      >
        <!-- Logo -->
        <el-menu-item index="0" class="menu-logo">
          <img src="/src/assets/visual/logo.svg" alt="applepie logo" class="logo" />
          <span class="logoText">蘋果派計畫</span>
        </el-menu-item>

        <!-- Desktop Nav -->
        <template v-if="!isMobile && !isPaid">
          <el-menu-item index="1"><a href="#about" class="nav-link">關於計畫</a></el-menu-item>
          <el-menu-item index="2"><a href="#why" class="nav-link">為什麼參加</a></el-menu-item>
          <el-menu-item index="3"><a href="#process" class="nav-link">活動流程</a></el-menu-item>
          <el-menu-item index="4"><a href="#team" class="nav-link">團隊介紹</a></el-menu-item>
          <el-menu-item index="5"><a href="#registration" class="nav-link">報名資訊</a></el-menu-item>
        </template>
      </el-menu>

      <!-- Mobile Nav -->
      <nav class="nav-box" v-if="isMobile || isPaid">
        <input type="checkbox" id="menu">
        <label for="menu" class="line">
          <div class="menu"></div>
        </label>

        <div class="menu-list">
          <ul>
            <li><a href="#about">關於計畫</a></li>
            <li><a href="#why">為什麼參加</a></li>
            <li><a href="#process">活動流程</a></li>
            <li><a href="#team">團隊介紹</a></li>
            <li><a href="#registration">報名資訊</a></li>
          </ul>
        </div>
      </nav>
      <section class="declaration">
        <h1>蘋果派計畫</h1>
        <h4 v-if="!isMobile && !isPaid">兩天找到屬於你的 Passion Project</h4>
        <h4 v-else>兩天找到屬於你的 <br>Passion Project</h4>
        <h5 v-if="!isMobile && !isPaid">"在迷惘的人生中，至少要為一件熱情的事而行動。"</h5>
        <h5 v-else>"在迷惘的人生中，<br>至少要為一件熱情的事而行動。"</h5>
        <a href="#registration" class="btn">
          <svg height="18" width="18" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
              <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
          </svg>
          <span class="text">立即報名</span>
        </a>
        <section id="about" class="zone1">
          <h2>蘋果派計畫是什麼？</h2>
          <div class="intro">
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="活動照片">
            <div>
              <p>在讀高中的你，是否覺得在學校學了很多，卻根本不知道自己喜歡什麼？會不會有點擔心，未來選擇的科系自己會不喜歡，卻又不知道該怎麼辦？</p>
              <p>這些迷惘、挫折，我們都經歷過。</p>
              <p>即使到了大學，我們身邊還是有許多的同學不知道自己想幹嘛：雖然不討厭自己的科系，卻也說不上喜歡。每天都過得還可以，卻一點都不令人興奮。</p>
              <p>而「<span style="color: brown;">蘋果派計畫</span>」正是為了幫助你解決這個問題。</p>
            </div>
          </div>
        </section>
        <section id="why" class="zone2">
          <h2>為什麼要參加「蘋果派計畫」？</h2>
          <h3>因為 <span style="background-color: aliceblue;"> 「找到自己的熱情」</span> 這件事，<br>
            學校從來沒有教，但人生真的需要。</h3>
            <ul>
              <li>
                <p>
                  如果你也曾經迷惘，不知道自己想要什麼，<br>
                  如果你也渴望，能為自己真正在乎的事踏出一步——<br>
                  那麼，「蘋果派計畫」就是為你而設計的探索營。<br>
                </p>
              </li>
              <li>
                <p>
                  它不是要你準備好才來參加，<br>
                  而是邀請你在混亂中暫停一下腳步，<br>
                  用兩天的時間，開始這件小小但重要的事。<br>
                </p>
              </li>
              <li>
                <p>
                  不是為了分數、不是為了升學，而是為了自己。
                </p>
              </li>
              <li>
                <p style="color: rgb(217 165 102);">
                  因為，在迷惘的人生中，至少要為一件熱情的事而行動。
                </p>
              </li>
            </ul>
        </section>
      </section>
    </el-container>
  </div>
</template>

<style scoped>
/* 共用 */
h1 {
  font-family: 'Noto Serif TC', serif;
  font-weight: 700;
  font-size: 3.75rem;
  line-height: 1;
  margin: 6rem 0 1.5rem;
}

h2 {
  font-family: 'Noto Serif TC', serif;
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 2.25rem;
  margin-bottom: 3rem;
  text-align: left;
}

h3 {
  font-family: 'Noto Serif TC', serif;
  font-size: 1.3rem;
  line-height: 2.5rem;
  margin-bottom: 3rem;
  color: rgb(217 165 102);
}

h4 {
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: 0.025em;
  margin-bottom: 3rem;
}

h5 {
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-bottom: 3rem;
  font-style: italic;
}

p {
  font-family: 'Noto Sans TC', sans-serif;
  color: rgb(55 65 81);
  line-height: 1.625;
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  text-align: left;
}

.el-container{
  flex-direction: column;
}

/* NAV */
.el-menu {
  margin: 1rem 1rem 0.5rem;
  border-bottom: 0;
  border-radius: 40px;
  padding: 0 1rem;
  height: 65px;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
  background-color: unset;
}

.el-menu--horizontal>.el-menu-item.is-active{
  border-bottom: 0;
}

.el-menu--horizontal.el-menu, .el-menu--horizontal>.el-menu-item{
  border-bottom: 0px;
}

.common-layout .el-menu .menu-logo {
  cursor: unset;
  margin-right: auto;
  margin-left: 0;
}

.logo {
  width: 40px;
  margin-right: 0.75rem;
}

.logoText {
  font-family: 'Noto Serif TC', serif;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: #D9A566;
}

.el-menu .el-menu-item a, a {
  font-family: 'Noto Sans TC', sans-serif;
  text-decoration: none;
  color: #374151;
  font-size: 1.25rem;
  position: relative;
}

.el-menu .el-menu-item a:hover, a:hover {
  color: #D9A566;
}

.el-menu-item:not(:first-of-type){
  padding: 0;
}

.el-menu-item:not(:nth-of-type(2)){
  margin-left: 3rem;
}

.el-menu-item:last-of-type{
  margin-right: 1rem;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 0;
  height: 2px;
  background: #D9A566;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* 手機選單 */
.line {
  width: 24px;
  height: 24px;
  background: #fff;
  cursor: pointer;
  display: block;
  padding: 16px;
  position: fixed;
  z-index: 2;
  right: 0;
}
.line .menu,
.line .menu::before,
.line .menu::after {
  background: #222;
  content: "";
  display: block;
  position: absolute;
  transition: background ease 0.15s, top ease 0.15s 0.15s, transform ease 0.15s;
  width: 20px;
}
.line .menu {
  left: 18px;
  top: 27px;
  height: 1px;
}

.line .menu::before {
  top: -6px;
  height: 1.5px;
}

.line .menu::after {
  top: 6px;
  height: 2px;
}
/* 點選選單變叉叉 */
#menu:checked + .line .menu {
  background: transparent;
}

#menu:checked + .line .menu::before {
  transform: rotate(45deg);
}

#menu:checked + .line .menu::after {
  transform: rotate(-45deg);
}

#menu:checked + .line .menu::before,
#menu:checked + .line .menu::after {
  top: 0;
  transition: top ease 0.15s, transform ease 0.15s 0.15s;
}

/* 選單開合 */
#menu:checked ~ .menu-list {
  height: 280px;
}

.menu-list {
  width: 100vw;
  height: 60px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 1;
  transition: all 0.3s;
  overflow: hidden;
}
/* 選單向外推 */
.menu-list ul {
  margin-top: 60px;
  margin-left: 10px;
}
.menu-list ul > li {
  display: block;
}

.menu-list a {
  display: block;
  line-height: 2.5;
  width: 100%;
  height: 100%;
}

/* 隱藏核許框 */
input#menu {
  display: none;
}

.el-menu-item:not(:first-of-type){
  padding: 0;
}

/* 宣言 */
.declaration{
  text-align: center;
  height: 70vh;
}

.declaration::before{
  content: "";
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background: url(/src/assets/visual/bg1.jpg) no-repeat bottom center / cover;
}

.btn {
  border: none;
  width: 10em;
  height: 3em;
  border-radius: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background: #D9A566;
  cursor: pointer;
  transition: all 450ms ease-in-out;
  margin: 0 auto 6rem;
}

.sparkle {
  fill: #ffffff;
  transition: all 800ms ease;
}

.text {
  font-weight: 600;
  color: #ffffff;
  font-size: 1.25rem;
  padding-bottom: 3px;
}

.btn:hover {
  background: linear-gradient(0deg,#f3b47c,#ea9d3f);
  box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),
  inset 0px -4px 0px 0px rgba(0, 0, 0, 0.2),
  0px 0px 0px 4px rgba(255, 255, 255, 0.2),
  0px 0px 180px 0px #ffffff;
  transform: translateY(-2px);
}

.btn:hover .text {
  color: white;
}

.btn:hover .sparkle {
  fill: rgb(255, 255, 255);
  transform: scale(1.2);
} 

/* 計畫介紹 */
.zone1 {
  background-color: #f2f4f5;
  border-radius: 80px 80px 0 0;
  padding: 4rem 5rem 8rem;
}

.zone1 h2, .zone2 h2 {
  position: relative;
  width: fit-content;
}

.zone1 h2::after, .zone2 h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 10%;
  width: 80%;
  height: 2px;
  background: #D9A566;
  border-radius: 1px;
}

.intro {
  display: flex;
  gap: 3rem;
  align-items: center;
}

.intro img{
  object-fit: cover;
  width: 50%;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  border-radius: 0.375rem;
}

/* 說明計畫 */
.zone2 {
  background-color: #d9dada;
  border-radius: 80px;
  padding: 4rem 5rem 8rem;
  margin-top: -5rem;
}

.zone2 ul {
  list-style: none;
  margin: 0 auto;
  width: 50%;
  min-width: 400px;
  padding: 0;
}

.zone2 li {
  background-color: #f2f4f5;
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  padding: 0.3rem 2rem;
  border-radius: 0.125rem;
  border-left-width: 4px;
  border-color: rgb(217 165 102);
  border-left-style: solid;
  margin-top: 2rem;
}

/* 響應式斷點 */

@media (max-width: 1024px) {
  .el-menu {
    position: fixed;
    z-index: 2;
    margin-top: 0.5rem;
  }

  .nav-box{
    height: 75px  ;
  }

  .line{
    top: 10px;
  }

  #menu:checked ~ .menu-list{
    height: 360px;
  }
  
  .menu-list{
    height: calc(60px + 1rem);
    top: 0;
  }

  .menu-list ul{
    margin-top: 75px;
    margin-left: 65px;
  }

  .intro {
    flex-direction: column;
    gap: 2rem;
  }

  .intro img{
    width: 100%;
  }

  .zone2 {
    padding: 4rem 3rem 8rem;
  }
}

@media (max-width: 564px) {
  h3 {
    font-size: 1.2rem;
  }

  .zone1, .zone2 {
    padding: 4rem 3rem 8rem;
    box-sizing: border-box;
  }

  .zone1 h2::after, .zone2 h2::after {
    width: 0;
    height: 0;
  }

  .zone2 ul {
    min-width: 300px;
  }
}
</style>

