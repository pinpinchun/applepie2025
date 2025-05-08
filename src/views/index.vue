<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeIndex = ref('1')
const isMobile = ref(false);
const isPad = ref(false);

const checkRWD = () => {
  if (window.innerWidth >= 1024){
    isPad.value = false;
    isMobile.value = false;
  }

  if (window.innerWidth <= 1024 && window.innerWidth > 576){
    isPad.value = true;
    isMobile.value = false;
  }

  if (window.innerWidth <= 576){
    isPad.value = false;
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
        <template v-if="!isMobile && !isPad">
          <el-menu-item index="1"><a href="#about" class="nav-link">關於計畫</a></el-menu-item>
          <el-menu-item index="2"><a href="#why" class="nav-link">為什麼參加</a></el-menu-item>
          <el-menu-item index="3"><a href="#process" class="nav-link">活動流程</a></el-menu-item>
          <el-menu-item index="4"><a href="#team" class="nav-link">團隊介紹</a></el-menu-item>
          <el-menu-item index="5"><a href="#registration" class="nav-link">報名資訊</a></el-menu-item>
        </template>
      </el-menu>

      <!-- Mobile Nav -->
      <nav class="nav-box" v-if="isMobile || isPad">
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
        <h4>兩天找到屬於你的 <br v-if="isMobile">Passion Project</h4>
        <h5>"在迷惘的人生中，<br v-if="isMobile">至少要為一件熱情的事而行動。"</h5>
        <a href="#registration" class="btn">
          <svg height="18" width="18" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
              <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
          </svg>
          <span class="text">立即報名</span>
        </a>
        <section id="about" class="zone1">
          <h2 class="zone_title">蘋果派計畫是什麼？</h2>
          <div class="highschool">
            <h3>身為高中生的你，是否也有這樣的感覺——</h3>
            <p>「在學校學了很多，卻不知道學這些對未來有什麼用？」</p>
            <p>「花了無數時間讀書、考試、補習，卻從沒時間了解自己真正喜歡什麼。」</p>
            <p>「好不容易擁有自主學習的時間，卻除了自習和發呆，不知道該做什麼。」</p>
            <p>「想到要選大學科系，卻只覺得茫然，不知道未來該往哪裡走。」</p>
          </div>
          <div class="intro">
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="活動照片">
            <div class="intro_text">
              <p><span style="font-weight: 700;">這些迷惘與無力，我們也走過。</span><br><br>
                即使到了大學，身邊仍有很多同學，<br>
                不討厭自己的科系，卻也談不上喜歡。<br>
                每天過得還行，卻一點也不令人興奮。<br><br>
                事實上，根據調查，<br><span style="font-weight: 700;">近六成的人後悔當初選的科系——</span><br>
                因為在選擇之前，多數人從來沒有機會好好認識自己。<br><br>
                而「<span style="color: brown;">蘋果派計劃</span>」，正是為了改變這件事。
              </p>
            </div>
          </div>
        </section>
        <section id="name" class="zone2">
          <h2 class="zone_title">為什麼叫「蘋果派計畫」？</h2>
          <h4>「探索熱情，就像做一顆蘋果派——<br v-if="isMobile || isPad">開始了，就有故事。」</h4>
          <p>在繪本《環遊世界做蘋果派》中，小女孩原本只是想做一顆蘋果派，<br>
            卻發現食材不足、超市也沒開，於是展開了旅程——<br>
            去義大利割一把金黃色的小麥，再到法國向母雞借一顆蛋，<br>
            又到英國向乳牛打聲招呼，順便擠了些牛奶……<br><br>

            終於，她完成了那顆蘋果派，也順便環遊了世界。<br><br>

            有時，一顆蘋果派，也能開啟一場冒險。<br>
            一個簡單的起心動念，便足以帶我們踏上一段意想不到的旅程。
          </p>
          <img src="../assets/visual/friend.png" alt="">
        </section>
        <section id="process" class="zone3">
          <h2 class="zone_title">「蘋果派計劃」會如何進行？</h2>
          <p>
            我們相信，找到熱情，不是一瞬間的靈光，<br>
            而是透過探索、整理、行動，一步步累積而來。<br><br>
            
            在這兩天的時間裡，我們會陪著你從「自我探索」出發，<br>
            找到你喜歡的、關心的、想學的、擅長的事，<br>
            幫助你重新認識自己。<br><br>
            
            接著，我們會引導你，將這些熱情的線索，<br>
            透過創意發想，轉化成屬於你的「熱情計畫」（Passion Project）。<br><br>
            
            最後，我們將陪你實際規劃行動，<br>
            並找到「踏出第一步」的方法，<br>
            讓熱情不只是停留在想像中，而能真正出發。
          </p>
          <div class="timeline_zone">
            <div class="timeline">
              <div class="timeline-dot"></div>
              <h3>第一階段：自我探索</h3>
              <p>從喜歡的、關心的、想學的、擅長的事出發，透過探索活動，重新連結自己心底真正的熱情。</p>
              <ul>
                <li>探索興趣與價值觀</li>
                <li>發現自己的優勢與特質</li>
                <li>釐清自己真正關心與好奇的議題</li>
              </ul>
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" alt="自我探索活動照片">
            </div>
            <div class="timeline">
              <div class="timeline-dot"></div>
              <h3>第二階段：創意發想</h3>
              <p>用工具激發創意，梳理各種關於自己的線索，一步步發想出讓自己心動的 Passion Project。</p>
              <ul>
                <li>終極二選一</li>
                <li>團體腦力激盪</li>
                <li>專案主題初步確定</li>
              </ul>
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" alt="熱情計畫轉化活動照片" class="w-full h-auto rounded-md shadow-md">
            </div>
            <div class="timeline">
              <div class="timeline-dot"></div>
              <h3>第三階段：專案規劃</h3>
              <p>把「想做的事」變成「可以出發的事」，並設定清晰目標和可行路徑，讓熱情不再只是想像。</p>
              <ul>
                <li>設定專案願景與目標</li>
                <li>拆解行動里程碑</li>
                <li>撰寫可行的初步行動計劃</li>
              </ul>
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" alt="行動計畫活動照片" class="w-full h-auto rounded-md shadow-md">
            </div>
            <div class="timeline">
            <div class="timeline-dot"></div>
            <h3>第四階段：踏出行動</h3>
            <p>最後，我們會帶著你實際規劃，並找到「踏出行動的第一步」方法，讓想像不再只是空談，而能真正出發。</p>
            <ul>
              <li>設計「測試計劃」</li>
              <li>練習「不完美但開始行動」</li>
              <li>在實作中反思、聚焦、成長</li>
            </ul>
            <img src="../assets/visual/work.jpg" alt="行動計畫活動照片" class="w-full h-auto rounded-md shadow-md">
            </div>
          </div>
          <h4>「蘋果派計劃」陪你從迷惘出發，<br v-if="isPad">找到熱情，踏出屬於自己的第一步。 </h4>
        </section>
        <section id="why" class="zone4">
          <h2 class="zone_title">參加「蘋果派計劃」的理由</h2>
          <ul>
            <li>
                <h1>1</h1>
                <h3>因為，<span style="background-color:burlywood; color: aliceblue;">找到自己的熱情</span> 這件事<br>學校從來沒教，但人生真的需要。</h3>
                <p>
                  在考試和分數裡長大的我們，<br>
                  很少有機會探索不同選項。<br><br>
                  但未來的人生，<br>
                  不是靠選擇題裡的標準答案。<br><br>
                  要走哪條路、要成為什麼樣的人，<br>
                  這一切，<br>
                  都得從認識自己、探索熱情開始。
                </p>
              </li>
              <li>
                <h1>2</h1>
                <h3>因為，當你投入喜歡的事，<br><span style="background-color:burlywood; color: aliceblue;">生活真的會不一樣。</span></h3>
                <p>
                  專注在真正熱愛的事情上，<br>
                  不只會找回自信與成就感，<br>
                  也會讓你更願意面對挑戰、承受挫折，<br>
                  並且持續前進。<br><br>
                  找到熱情的人，<br>
                  不是因為人生變容易了，<br>
                  而是即使遇到困難，<br>
                  他們也有一個願意為之努力的理由。
                </p>
              </li>
              <li>
                <h1>3</h1>
                <h3>因為，在這裡，<br><span style="background-color:burlywood; color: aliceblue;">你不必一個人摸索。</span></h3>
                <p>
                  探索本來就是一件孤單又不確定的事，<br>
                  但在這裡，<br>
                  你會有一群同行的人。<br><br>
                  我們走過迷惘，<br>
                  所以更懂得如何陪伴，<br>
                  讓你不用再一個人迷路。
                </p>
              </li>
            </ul>
        </section>
        <section id="name" class="zone5">
          <p>如果你也曾經迷惘，不知道自己想要什麼；<br>
            如果你也渴望，為真正熱愛的事踏出一步——<br>
            那麼，「蘋果派計劃」就是為你設計的探索營。<br><br>
            
            這趟旅程，不需要你已經準備好，<br>
            只需要你願意，在混亂中暫停一下腳步，<br>
            用兩天的時間，開始這件小小但重要的事。<br><br>
            
            不是為了分數、不是為了升學，而是為了自己。<br>
            因為，在迷惘的人生中，至少要為一件熱情的事而行動。
          </p>
        </section>
        <section id="registration" class="zone6">
          <h2 class="zone_title">報名資訊</h2>
          <div class="regist">
            <div class="regist_left">
              <h3>營隊資訊</h3>
              <ul>
                <li>
                  <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <div>
                      <span class="font-bold">報名條件：</span>
                      <p>即將升高一～升大一的高中生，不限體制內外。</p>
                  </div>
                </li>
                <li>
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    <div>
                        <span class="font-bold">活動時間：</span>
                        <p>2025/07/03 (四) ～ 07/04 (五) 9:00-21:00</p>
                    </div>
                </li>
                <li>
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    <div>
                        <span class="font-bold">活動地點：</span>
                        <p>國立臺灣大學水源校區</p>
                    </div>
                </li>
                <li>
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    <div>
                        <span class="font-bold">營隊費用：</span>
                        <p>報名費用：1200元（包含兩天餐費、場地費及課程教材等）<br><span style="color: red; display: block; margin: 10px 0;">＊若為清寒家庭，提供相關證明即可全額免費參加。</span></p>
                    </div>
                </li>
                <li>
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    <div>
                        <span class="font-bold">名額限制：</span>
                        <p>每梯次30人，小班制教學。</p>
                    </div>
                </li>
              </ul>
            </div>
            <div  class="regist_right">
              <h3>報名流程</h3>
              <ul>
                <li>
                  <div class="sNumber">
                    <span>1</span>
                  </div>
                  <div>
                      <span class="font-bold">填寫報名表單：</span>
                      <p>建議預留30分鐘填寫，表單將於6/1（日）截止！</p>
                  </div>
                </li>
                <li>
                  <div class="sNumber">
                    <span>2</span>
                  </div>
                  <div>
                      <span class="font-bold">初步面談：</span>
                      <p>我們可能會在 6/7（六）至 6/12（四）之間與部分學員安排約 15 分鐘的聊聊時間，了解你對營隊的期待。</p>
                  </div>
                </li>
                <li>
                  <div class="sNumber">
                    <span>3</span>
                  </div>
                  <div>
                      <span class="font-bold">錄取通知：</span>
                      <p>我們將會在6/13（五）寄送錄取、備取通知信。</p>
                  </div>
                </li>
                <li>
                  <div class="sNumber">
                    <span>4</span>
                  </div>
                  <div>
                      <span class="font-bold">完成報名：</span>
                      <p>收到錄取通知信後，需要在24小時內完成匯款，即完成報名。</p>
                  </div>
                </li>
                <li>
                  <a href="https://docs.google.com/forms/d/1C6MolNlxDacQE8LnTwH7W296eDRGffziTF1R0IsbHt4/edit" target="_blank">前往報名表單</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="who" class="zone7">
          <h2 class="zone_title">我們是誰？</h2>
          <div class="whoweare">
            <div class="people">
              <div class="people_img">
                <img src="../assets/visual/friend.png" alt="">
              </div>
              <div class="people_intro">
                <h3><span>品恩</span><br>課程發起人</h3>
                <p>台大心理系畢業，曾在多家教育機構擔任課程設計師，致力於幫助青少年探索自我與未來方向。</p>
              </div>
            </div>
            <div class="people">
              <div class="people_img">
                <img src="../assets/visual/friend.png" alt="">
              </div>
              <div class="people_intro">
                <h3><span>宥廷</span><br>營隊pm</h3>
                <p>台大心理系畢業，曾在多家教育機構擔任課程設計師，致力於幫助青少年探索自我與未來方向。</p>
              </div>
            </div>
            <div class="people">
              <div class="people_img">
                <img src="../assets/visual/friend.png" alt="">
              </div>
              <div class="people_intro">
                <h3><span>Passion Project</span><br>引導員團隊</h3>
                <p>台大心理系畢業，曾在多家教育機構擔任課程設計師，致力於幫助青少年探索自我與未來方向。</p>
              </div>
            </div>
          </div>
        </section>
        <div class="footer">
          <div class="footer_logo">
            <img src="/src/assets/visual/logo.svg" alt="applepie logo" class="logo" />
            <span class="logoText">蘋果派計畫</span>
            <p>兩天找到屬於你的 Passion Project</p>
          </div>
          <p>© 2025 蘋果派計畫. All rights reserved.</p>
        </div>
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
  color: #fff;
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
  z-index: 22;
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
  height: 2px;
}

.line .menu::before {
  top: -6px;
  height: 2px;
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
  z-index: 20;
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
  background: url(/src/assets/visual/bg.jpg) no-repeat center / cover;
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
  padding: 4rem 5rem 10rem;
}

.zone_title{
  position: relative;
  width: fit-content;
}

.zone_title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 10%;
  width: 80%;
  height: 2px;
  background: #D9A566;
  border-radius: 1px;
}

.highschool{
  margin: 3rem auto 5rem;
  width: fit-content;
}

.highschool h3 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.highschool p {
  font-size: 1.1rem;
  text-align: center;
  line-height: 1.3;
  margin-bottom: 0;
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

.intro_text{
  margin: 0 auto;
}

/* 命名由來 */
.zone2 {
  background-color: #ebe0d1;
  border-radius: 80px 80px 0 0;
  padding: 4rem 5rem 11rem;
  margin-top: -5rem;
  position: relative;
}

.zone2 h4 {
  color: #374151;
  font-weight: 500;
  font-style: italic;
  margin-top: 4rem;
}

.zone2 p {
  margin: 0 auto;
  width: fit-content;
}

.zone2 img{
  position: absolute;
  right: 5%;
  bottom: 65px;
  margin-top: 1rem;
  width: 20%;
  z-index: 2;
  max-width: 225px;
}

/* 如何進行 */
.zone3{
  background-color: #f3efeb;
  border-radius: 80px 80px 0 0;
  padding: 4rem 5rem 10rem;
  margin-top: -5rem;
  position: relative;
  z-index: 1;
}

.zone3>p{
  width: fit-content;
  margin: 4rem auto;
}

.timeline_zone{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.timeline {
  position: relative;
  border-top: 1px solid #E8C39E;
  width: 20%;
  margin: 0 auto 4rem;
  flex-grow: 1;
  padding: 0 30px 1rem;
  transition-duration: 300ms;
}

.timeline:hover {
  background-color: #ffffff;
}

.timeline-dot {
  width: 16px;
  height: 16px;
  background-color: #D9A566;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: -8px;
  transform: translateX(-50%);
}

.timeline h3{
  text-align: left;
  margin-bottom: 1rem;
}

.timeline ul{
  text-align: left;
  font-family: 'Noto Sans TC', sans-serif;
  color: rgb(55 65 81);
  font-size: 1.125rem;
  background-color: #f2f4f5;
  padding: 1rem 3rem;
}

.timeline img{
  width: 100%;
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  border-radius: 0.375rem;
  margin-top: 1rem;
}

/* 說明計畫 */
.zone4 {
  background-color: #d9dada;
  border-radius: 80px 80px 0 0;
  padding: 4rem 5rem 10rem;
  margin-top: -5rem;
  position: relative;
  z-index: 2;
}

.zone4 ul {
  list-style: none;
  margin: 0 auto;
  width: 100%;
  min-width: 400px;
  padding: 0;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.zone4 li {
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
  flex-grow: 1;
  min-width: 38 0px;
}

.zone4 h1{
  margin-top: 1rem;
  font-size: 3rem;
}

.zone4 h3{
  margin-bottom: 2rem;
}

.zone4 p{
  width: fit-content;
  margin: 0 auto 1.5rem;
  text-align: left;
}

/* 結語 */
.zone5 {
  background-color: #D96D5B;
  padding: 4rem 5rem;
  margin-top: -5rem;
  position: relative;
  z-index: 3;
}

.zone5 p {
  color: #fff;
  margin: 0 auto;
  width: fit-content;
  font-size: 1.25rem;
}

/* 報名資訊 */
.zone6 {
  background-color: #d0ddd3;
  padding: 4rem 5rem;
  position: relative;
  z-index: 4;
}

.regist {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  max-width: 56rem;
  margin: 0 auto;
}

.regist>div{
  background-color: #fff;
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  padding: 1rem 2rem 2rem;
  border-radius: 0.125rem;
  text-align: left;
}

.regist h3{
  margin-bottom: 1rem;
}

.regist ul{
  list-style: none;
  margin: 0;
  padding: 0;
}

.regist li{
  align-items: flex-start;
  display: flex;
}

.regist li div{
  text-align: left;
}

.regist svg{
  width: 1.25rem;
  color: rgb(217 165 102);
  margin-top: 0.25rem;
  margin-right: 0.75rem;
}

.font-bold{
  font-family: 'Noto Sans TC', sans-serif;
  color: rgb(55 65 81);
  line-height: 1.625;
  font-size: 1.125rem;
  font-weight: 700;
}

.regist p {
  margin-top: 0.25rem;
  color: rgb(75 85 99);
}

.regist a{
  padding: 0.75rem 2rem;
  border-radius: 0.125rem;
  display: inline-block;
  background: #D9A566;
  color: white;
  transition: all 0.3s ease;
  text-decoration: inherit;
  margin: 1rem auto;
}

.regist a:hover{
  background: #C89355;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(217, 165, 102, 0.3);
}

.sNumber{
  background-color: rgb(217 165 102);
  color: rgb(255 255 255);
  border-radius: 9999px;
  justify-content: center;  
  align-items: center;
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  margin-top: 0.4rem;
  margin-right: 1rem;
}

/* 成員介紹 */
.zone7{
  background-color: #f6f6f6;
  padding: 4rem 5rem;
  position: relative;
  z-index: 5;
}

.whoweare{
  display: grid;
  max-width: 64rem;
  margin: 5rem auto;
  grid-template-columns: repeat(3, minmax(0, 1fr)); 
  gap: 2rem;
}

.people{
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  background-color: rgb(253 251 247);
  border-radius: 0.125rem;
  overflow: hidden;
  transition-duration: 300ms;
}

.people:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.people_img {
  height: 12rem;
  overflow: hidden;
}

.people_img img{
  width: 100%;
  height: 100%;
  object-fit: cover;  
}

.people_intro {
  padding: 1.5rem;
}

.people_intro h3{
  text-align: left;
  margin-bottom: 0  ;
}

.people_intro span{
  color: #374151;
}

/* footer */
.footer {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 150px;
  background-color: rgb(51 51 51);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer_logo {
  margin: 0 3rem;
  display: flex;
  align-items: center;
  width: 300px;
  flex-wrap: wrap;
}

.footer_logo .logo {
  width: 50px;
  /* background-color: #ffffff; */
  border-radius: 50%;
  padding: 10px 10px 10px 0;
}

.footer_logo p{
  color: rgb(156 163 175);
  margin: 0;
}

.footer>p{
  color: rgb(156 163 175);
  margin: 0 3rem;
}

/* 響應式斷點 */
@media (max-width: 1385px) {
  .timeline{
    width: 32%;
  }
}

@media (max-width: 1024px) {
  .el-menu {
    position: fixed;
    z-index: 25;
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

  .zone1, .zone3 {
    padding-bottom: 8rem;
  }

  .highschool{
    margin-top: 4rem;
    margin-bottom: 3rem;
  }

  .intro {
    flex-direction: column;
    gap: 2rem;
  }

  .intro img{
    width: 70%;
  }

  .intro_text p {
    text-align: center;
  }

  .zone2 {
    padding-bottom: 12rem;
  }

  .zone2 img{
    width: 25%;
    max-width: 200px;
  }

  .zone3>p {
    text-align: center;
  }
}

@media (max-width: 768px){
  .highschool p {
    line-height: 2.3;
  }

  .zone2 img {
    width: 40%;
    right: 10%;
  }

  .zone2 p, .zone4 p {
    text-align: center;
  }

  .zone3 h4{
    margin-top: 0;
  }

  .timeline{
    width: 100%;
    border-top: unset;
    border-left: 1px solid #E8C39E;
  }

  .timeline-dot {
    left: -8px;
    top: 50%;
    transform: translateY(-50%);
  }

  .regist{
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .zone7 {
    padding-bottom: 2rem;
  }

  .whoweare{
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .footer {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .footer_logo {
    width: 100%;
    justify-content: center;
  }

  .footer_logo p{
    margin-left: 2rem;
  }
}

@media (max-width: 564px) {

  h1{
    font-size: 3rem;
  }

  h2{
    font-size: 1.5rem;
  }

  h3, .text, .zone5 p, .regist a{
    font-size: 1.15rem;
  }

  h4, .highschool h3 {
    font-size: 1.3rem;
  }

  h5, p, .highschool p, .timeline ul, .font-bold {
    font-size: 1rem;
  }

  .zone_title {
    margin-left: auto;
    margin-right: auto;
  }

  .zone1, .zone2, .zone3, .zone4, .zone6, .zone7 {
    padding: 3rem 2rem 8rem;
  }

  .highschool{
    margin-bottom: 3rem;
  }

  .highschool p {
    margin-bottom: 1rem;
  }

  .intro img{
    width: 100%;
  }

  .zone2, .zone4 {
    padding-bottom: 10rem;
  }

  .zone4 ul {
    min-width: 300px;
  }
  
  .zone4 h1{
    font-size: 2.5rem;
  }

  .zone6 {
    padding-bottom: 5rem;
  }

  .zone7 {
    padding-bottom: 1rem;
  }

  .footer_logo{
    flex-direction: row;
    width: 80%;
    margin-bottom: 1rem;
  }
  
  .footer p{
    margin: 0;
  }
}
</style>

