<template>
  <nav class="navbar bg-primary">
    <a class="navbar-brand text-white">
      <img
        height="24"
        src="@/assets/logo.png"
        alt="Logovue"
        class="d-inline-block align-text-top mx-2"
      />
      DayBook
    </a>
      <div class="d-flex">
        <button class="btn btn-outline-info mx-4">
          <i class="fa fa-sign-out-alt"></i>
        </button>
      </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
