<template>
  <a-input
    style="color: red"
    placeholder="Basic usage"
    v-model="inValue"
  />
</template>

<script>
export default {
  name: 'test',
  components: {},
  props: {
    value: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    inValue: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit('change', v);
      },
    },
  },
  methods: {},
};
</script>

<style lang='scss'>
</style>
