<template>
  <section id="help">
    <div class="container_box">
      <div class="row_box">
        <div class="help">
          <article class="help_box1">
            <h3>공지사항</h3>
            <div class="notice">
              <ul>
                <li>
                  <a :class="{active: noticeOpen}" @click="noticeChange('entire')" href="javascript:void(0)">전체 공지</a>
                  <ul :class="{dp_n: noticeOpen}">
                    <li v-for="(item, index) of fakeData.helpArray" :key="'a' + index">
                      <dl>
                        <dt><strong class="bar">{{item.area}}</strong> <em>{{item.createdAt}}</em></dt>
                        <dd>{{item.title}}</dd>
                      </dl>
                    </li>
                  </ul>
                </li>

                <li>
                  <a :class="{active: !noticeOpen}" @click="noticeChange('movie')" href="javascript:void(0)">전체 공지</a>
                  <ul :class="{dp_n: !noticeOpen}">
                    <li v-for="(item, index) of fakeData.helpArray2" :key="'b' + index">
                      <dl>
                        <dt><strong class="bar">{{item.area}}</strong> <em>{{item.createdAt}}</em></dt>
                        <dd>{{item.title}}</dd>
                      </dl>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </article>
          <article class="help_box2">
            <h3>메가박스 할인카드</h3>
            <div class="card">
            <ul>
              <li v-for="(item, index) of fakeData.helpCard" :key="'c' + index">
                <NuxtLink to="/">
                  <span><img :src="item.image" :srcset="item.srcset" :alt="item.alt"></span>
                  <strong>{{item.creditCompany}}</strong>
                  <em>{{item.benefit}}</em>
                </NuxtLink>
              </li>
            </ul>
            </div>
          </article>
          <article class="help_box3"></article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import fakeData from '@/assets/js/fakeData.js';

export default {
  data() {
    return {
      noticeOpen: true,
      fakeData
    }
  },
  methods: {
    noticeChange(list) {
      if(list === 'entire') {
        this.noticeOpen = true;
      } else if(list === 'movie') {
        this.noticeOpen = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/components/main/help.scss';

</style>
