<template>
  <div class="block">
    <span class="demonstration"></span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
</template>
<style scoped>
  .block {
    display: inline;
    /* float: left; */
  }
</style>
<script>
  export default {
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        value1: '2021-1-1'
      };
    }
  };
</script>