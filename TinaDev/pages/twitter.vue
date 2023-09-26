<template>
  <div>
    <a
      ref="twitterLink"
      href="https://twitter.com/tinabals_codes"
      target="_blank"
      class="hidden"
    >
    </a>
    Redirecting to twitter ...
  </div>
</template>

<script>
export default {
  name: 'TwitterPage',
  mounted() {
    this.$refs.twitterLink.click()
    this.$router.push('/')
  },
}
</script>

<style></style>
