<template>
  <div>
    <a
      ref="githubLink"
      href="https://github.com/tinabals"
      target="_blank"
      class="hidden"
    >
    </a>
    Redirecting to Github ...
  </div>
</template>

<script>
export default {
  name: 'GithubPage',
  mounted() {
    this.$refs.githubLink.click()
    this.$router.push('/')
  },
}
</script>

<style></style>
