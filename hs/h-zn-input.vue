<template>
  <el-input
    v-model="input"
    placeholder="输入中文字母数字下划线数字框"
    @input="input=input.replace( /^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/, '')"
    :maxlength="maxlength"
  ></el-input>
</template>

<script>
export default {
  name: "h-zn-input",
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