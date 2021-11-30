<template>
  <article class="card">
    <main>
      <img src="../../assets/Nov23_Post2-1000x1000.jpeg" alt="" />
    </main>
    <footer>
      <h3>#pwrup the grammys</h3>
    </footer>
  </article>
</template>



<style scoped lang="scss">
.card {
  width: 100%;
  main {
    overflow: hidden;
    cursor: pointer;
  }
  footer {
    padding: toRem(15) toRem(10);
    @include headline6();
    background-color: $black;
    opacity: 0.7;
    color: $white;
  }
  &:hover {
    img {
      transform: scale(1.1);
      transition: 0.5s;
    }
    footer {
      background-color: $red-dark;
      transition: 0.5s;
    }
  }
}
</style>