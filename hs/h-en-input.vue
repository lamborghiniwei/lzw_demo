<template>
  <el-input
    v-model="input"
    placeholder="只允许输入字母下划线数字框"
    @input="input=input.replace(/[^\w\.\/]/ig, '')"
    :maxlength="maxlength"
  ></el-input>
</template>

<script>
export default {
  name: "h-en-input",
  props: {
    maxlength: {
      type: [Number, String],
      default: 200
    }
  },
  data() {
    return {
      input: ""
    };
  },
  watch: {
    input(val) {
      this.$emit("input", val);
    }
  }
};
</script>