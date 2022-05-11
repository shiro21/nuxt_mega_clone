<template>
  <div>
    <section id="new">
      <div class="container_box">
        <div class="row_box">
          <div class="new">
            <h2>새로운 영화</h2>
            <div class="new_wrap">
              <div class="new_left" :title="data.bgImage[1].alt" :style="{ backgroundImage: 'url(' + data.bgImage[1].image + ')' }">
                <div class="movie_play">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
                      <circle class="st0" cx="60" cy="60.4" r="56"/>
                      <path class="st1" d="M81,65.4c4.8-2.8,4.8-7.2,0-10L53.5,39.6c-4.8-2.8-8.7-0.5-8.7,5v31.7c0,5.5,3.9,7.8,8.7,5L81,65.4z"/>
                  </svg>
                </div>
              </div>
              <div class="new_right">
                <h3>{{data.newItems[0].title}}</h3>
                <span class="release">{{data.newItems[0].release}}</span>
                <div class="score">
                  <span class="icon" :class="[ { star0: data.newItems[0].score === 0 }, { star2: data.newItems[0].score > 0 && data.newItems[0].score < 2 }, { star1: data.newItems[0].score >= 2 } ]"></span>
                  <span class="icon" :class="[ { star0: data.newItems[0].score <= 2 }, { star2: data.newItems[0].score > 2 && data.newItems[0].score < 4 }, { star1: data.newItems[0].score >= 4 } ]"></span>
                  <span class="icon" :class="[ { star0: data.newItems[0].score <= 4 }, { star2: data.newItems[0].score > 4 && data.newItems[0].score < 6 }, { star1: data.newItems[0].score >= 6 } ]"></span>
                  <span class="icon" :class="[ { star0: data.newItems[0].score <= 6 }, { star2: data.newItems[0].score > 6 && data.newItems[0].score < 8 }, { star1: data.newItems[0].score >= 8 } ]"></span>
                  <span class="icon" :class="[ { star0: data.newItems[0].score <= 8 }, { star2: data.newItems[0].score > 8 && data.newItems[0].score < 10 }, { star1: data.newItems[0].score >= 10 } ]"></span>
                  <strong>{{data.newItems[0].score}} / 10</strong>
                </div>
                <ul class="summary">
                  <li class="genre"><span class="bar">{{data.newItems[0].genre}}</span>{{data.newItems[0].nation}}</li>
                  <li class="age"><span class="bar">{{data.newItems[0].timer}}</span>{{data.newItems[0].age}}</li>
                  <li class="description">{{data.newItems[0].description}}</li>
                </ul>
                <div class="select">
                  <div class="select1">
                    <label for="update" class="ir_su">시간</label>
                    <input type="text" id="update" name="update" :value="data.newItems[0].update" class="ui_select2">
                  </div>
                  <div class="select2">
                    <select name="uptime" id="uptime" class="ui_select2">
                      <option v-for="(timer, index) of data.newItems[0].uptime" :key="'c' + index" :value="timer">{{timer}}</option>
                    </select>
                  </div>
                  <div class="select3">
                    <label for="uptext" class="ir_su">{{data.newItems[0].address}}</label>
                    <input type="text" id="uptext" name="uptext" class="ui_input3" :placeholder="data.newItems[0].uptext" />
                  </div>
                </div>
                <div class="btn">
                  <NuxtLink to="/" class="white">좌석확인</NuxtLink>
                  <NuxtLink to="/" class="purple">예매하기</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import fakeData from '@/assets/js/fakeData';

export default {
  data() {
    return {
      data: fakeData,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/components/main/new.scss';

</style>
