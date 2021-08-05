<template>
  <div class="radio-container">
    <input
      type="radio"
      :id="radioId"
      :name="radioName"
      :value="radioValue"
      :checked="isChecked"
      @change="$emit('change', radioValue)"
      :required="required"
    />
    <label :for="radioId" class="radio" :class="shape">
      <div class="header-container">
        <span class="radio-header">{{ header }}</span>
        <img class="icon" />
      </div>
      <div class="justify-content-center d-flex">
        <span class="radio-description">{{ description }}</span>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: "radio-card",
  model: {
    prop: "checked",
    event: "change",
  },
  props: {
    radioId: String,
    radioName: String,
    radioValue: String,
    checked: String,
    required: String,
    header: String,
    description: String,
    shape: {
      type: String,
      default: "circle",
    },
  },
  computed: {
    isChecked() {
      return this.checked == this.radioValue;
    },
  },
};
</script>