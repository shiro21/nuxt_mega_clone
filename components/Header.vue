<template>
  <header id="header">
    <div class="container_box">
      <div class="row_box">
        <div class="header">
          <h1>
            <a href="#">
              <em><img src="~/assets/imgs/logo.png" alt="MEGABOX"></em>
              <strong><img src="~/assets/imgs/logo-sub.png" alt="LIFE THEATER"></strong>
            </a>
          </h1>
          <div id="mNav">
            <h2 class="ir_su">전체메뉴</h2>
            <NuxtLink to="/" class="list"><span></span></NuxtLink>
          </div>
          <nav class="nav">
            <ul>
              <li><a href="#">영화</a></li>
              <li><a href="#">큐레이션</a></li>
              <li><a href="#">영화관</a></li>
              <li><a href="#">특별관</a></li>
              <li><a href="#">스토어</a></li>
              <li><a href="#">이벤트</a></li>
              <li><a href="#">로그인</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/assets/components/header.scss";

</style>
