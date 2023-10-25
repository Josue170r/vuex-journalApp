<template>
  <div
      class="entry-container mb-3 pointer p-2"
      @click="$router.push({name: 'entry', params: {id: 100} } )"
    >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">10 </span>
      <span class="mx-1 fs-5">Septiembre </span>
      <span class="mx-2 fw-ligth">2023, Domingo</span>
    </div>

    <div class="entry-description">
      Tempor aute dolor laboris fugiat eu reprehenderit minim qui nulla. Cillum et in officia id cillum ad enim amet labore reprehenderit nisi. Ipsum mollit aute enim dolor cupidatat consectetur officia et. Est laborum nostrud reprehenderit eiusmod officia fugiat labore anim minim culpa esse consectetur sit consectetur. Ipsum mollit eiusmod anim velit nostrud est laborum.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.entry-container {
  border-bottom: 1px solid 2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;

  }
}

.entry-description {
  font-size: 14px;
}

</style>
