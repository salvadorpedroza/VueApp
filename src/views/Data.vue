<template>
  <div class="px-3 py-4">
    <h1>Vuex</h1>
    <div class="row d-flex justify-content-center mt-4">
      <div class="col-lg-4 col-md-5 col-sm-6">
        <div class="card mx-3 p-3">
          <label><b>Name:</b> {{ personalInfo.name }}</label>
          <label><b>Laste Name:</b> {{ personalInfo.lastName }}</label>
          <label><b>Email:</b> {{ personalInfo.email }}</label>
          <label><b>Phone Number:</b> {{ personalInfo.phoneNumber }}</label>
          <label><b>Postal Code:</b> {{ personalInfo.postalCode }}</label>
          <label><b>Address:</b> {{ personalInfo.address }}</label>
          <label><b>Class:</b> {{ classAge }}</label>
          <label><b>Date:</b> {{ date }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "data",
  props: {
    msg: String,
  },
  computed: {
    ...mapState(["personalInfo", "classAge", "date"]),
  },
};
</script>


