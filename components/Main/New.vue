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
              <div class="new_right"></div>
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
      data: fakeData
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/components/main/new.scss';

</style>
