<template>
  <div>
    <div id="skip">
      <a rel="bookmark" href="#movie">최신 영화 소식</a>
      <a rel="bookmark" href="#event">새로운 이벤트</a>
      <a rel="bookmark" href="#new">새로운 영화</a>
      <a rel="bookmark" href="#help">공지사항</a>
    </div>
    <Header />

    <MainBanner />

    <MainMovie />

    <MainEvent />

    <MainOpening />

    <MainNew />

    <MainHelp />

    <CommonFooter />
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
