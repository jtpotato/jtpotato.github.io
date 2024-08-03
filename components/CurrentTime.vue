<template>
  <div class="current-time">
    <p v-if="currentTime">Time: {{ currentTime }}</p>
  </div>
</template>

<script>
export default {
  name: "CurrentTime",
  data() {
    return {
      currentTime: "",
    };
  },
  mounted() {
    this.getTime();
    setInterval(() => {
      this.getTime();
    }, 1000);
  },
  methods: {
    getTime() {
      const date = new Date();
      this.currentTime = date.toLocaleTimeString("en-US", {
        timeZone: "Australia/Melbourne",
      });
    },
  },
};
</script>
