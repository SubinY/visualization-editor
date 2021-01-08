<template>
  <!-- <a-input
    :value="innerText"
    @change="
      (e) => {
        innerText = e.target.value;
      }
    "
  ></a-input> -->
  <div>
    <p>{{ text }}</p>
    <p>{{ text1 }}</p>
  </div>
</template>

<script>
// import { Switch } from 'element-ui';
// import Switch from 'ant-design-vue/lib/switch';
// import 'ant-design-vue/lib/switch/style';
import PropTypes from '@luban-h5/plugin-common-props';
export default {
  name: 'rcCard',
  components: {
    // elSwitch: Switch
  },
  props: {
    text: PropTypes.string(),
    // text1: PropTypes.string({ label: '内容', defaultValue: '双击修改文字' }),
    text1: {
      type: String,
      default: 'default',
      visible: true,
      editor: {
        type: 'test',
        label: '测试',
        props: {}
      },
    },
  },
  data() {
    return {
      value: true,
    };
  },
  computed: {},
  methods: {
    onChange(checked) {
      console.log(`a-switch to ${checked}`);
    },
  },
};
</script>

<style lang='scss'>
</style>
