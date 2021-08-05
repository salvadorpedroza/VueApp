<template>
  <main id="home">
    <section class="left-side-section">
      <div>
        <h1>Home</h1>
      </div>
    </section>
    <section class="right-side-section">
      <section class="logout-section">
        <div>
          <a class="blue-link">Log Out</a>
        </div>
      </section>
      <section class="main-section">
        <div class="row d-flex justify-content-center mt-4 mx-0">
          <div class="col-lg-8">
            <div class="mx-3">
              <span class="back-button" @click="back()">
                <img class="arrow-left back-icon" />
                Back
              </span>
            </div>
            <div v-if="step === 1" class="card mx-3">
              <h5 class="card-header">Personal Info</h5>
              <div class="card-body">
                <div class="row mt-3 pt-2">
                  <div class="col-lg-6 col-md-6 mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input
                      type="text"
                      class="input-text"
                      v-model="personalInfo.name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div class="col-lg-6 col-md-6 mb-3">
                    <label for="last_name" class="form-label">Last Name</label>
                    <input
                      type="text"
                      class="input-text"
                      v-model="personalInfo.lastName"
                      id="last_name"
                      placeholder="Last Name"
                    />
                  </div>
                  <div class="col-lg-6 col-md-6 mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input
                      type="email"
                      class="input-text"
                      v-model="personalInfo.email"
                      id="email"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div class="col-lg-6 col-md-6 mb-3">
                    <label for="phone_number" class="form-label"
                      >Phone Number</label
                    >
                    <input
                      type="text"
                      class="input-text"
                      v-model="personalInfo.phoneNumber"
                      id="phone_number"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div class="col-lg-6 col-md-6 mb-3">
                    <label for="postal_code" class="form-label"
                      >Postal Code</label
                    >
                    <input
                      type="text"
                      class="input-text"
                      v-model="personalInfo.postalCode"
                      id="postal_code"
                      placeholder="Postal Code"
                    />
                  </div>
                  <div class="col-lg-6 col-md-6 mb-3">
                    <label for="address" class="form-label">Address</label>
                    <input
                      type="text"
                      class="input-text"
                      v-model="personalInfo.address"
                      id="address"
                      placeholder="Address"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div v-if="step === 2" class="card mx-3">
              <h5 class="card-header">Select Class</h5>
              <div class="card-body">
                <div class="col-12">
                  <radio-card
                    radioName="class"
                    radioId="a"
                    radioValue="A"
                    header="Class A"
                    shape="square"
                    description="Between 0-20 years old"
                    v-model="classAge"
                  ></radio-card>
                  <radio-card
                    radioName="class"
                    radioId="b"
                    radioValue="B"
                    header="Class B"
                    shape="square"
                    description="Between 20-40 years old"
                    v-model="classAge"
                  ></radio-card>
                  <radio-card
                    radioName="class"
                    radioId="c"
                    radioValue="C"
                    header="Class C"
                    shape="square"
                    description="Between 40-60 years old"
                    v-model="classAge"
                  ></radio-card>
                  <radio-card
                    radioName="class"
                    radioId="d"
                    radioValue="D"
                    header="Class D"
                    shape="square"
                    description="More than 60 years old"
                    v-model="classAge"
                  ></radio-card>
                </div>
              </div>
            </div>
            <div v-if="step === 3" class="card mx-3">
              <h5 class="card-header">Select a Date</h5>
              <div class="card-body">
                <slide-container>
                  <radio-card
                    radioName="date"
                    radioId="date1"
                    radioValue="January 2021"
                    header="January"
                    shape="circle"
                    description="2021"
                    v-model="date"
                  ></radio-card>
                  <radio-card
                    radioName="date"
                    radioId="date2"
                    radioValue="February 2021"
                    header="February"
                    shape="circle"
                    description="2021"
                    v-model="date"
                  ></radio-card>
                  <radio-card
                    radioName="date"
                    radioId="date3"
                    radioValue="March 2021"
                    header="March"
                    shape="circle"
                    description="2021"
                    v-model="date"
                  ></radio-card>
                  <radio-card
                    radioName="date"
                    radioId="date4"
                    radioValue="April"
                    header="April"
                    shape="circle"
                    description="2021"
                    v-model="date"
                  ></radio-card>
                  <radio-card
                    radioName="date"
                    radioId="date5"
                    radioValue="May 2021"
                    header="May"
                    shape="circle"
                    description="2021"
                    v-model="date"
                  ></radio-card>
                  <radio-card
                    radioName="date"
                    radioId="date6"
                    radioValue="June 2021"
                    header="June"
                    shape="circle"
                    description="2021"
                    v-model="date"
                  ></radio-card>
                </slide-container>
              </div>
            </div>
            <div class="row justify-content-center py-3">
              <button class="circle-button btn-primary" @click="next()">
                <img class="arrow-left-white next-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
import RadioCard from "@/components/RadioCard.vue";
import SlideContainer from "@/components/SlideContainer";
import { mapMutations } from "vuex";

export default {
  name: "home",
  components: {
    RadioCard,
    SlideContainer,
  },
  data() {
    return {
      step: Number,
      personalInfo: {
        name: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        postalCode: "",
        address: "",
      },
      classAge: "",
      date: "",
    };
  },
  methods: {
    ...mapMutations(["SET_PERSONAL_INFO", "SET_CLASS_AGE", "SET_DATE"]),
    next() {
      switch (this.step) {
        case 1: {
          this.SET_PERSONAL_INFO(this.personalInfo);
          this.step++;
          break;
        }
        case 2: {
          this.SET_CLASS_AGE(this.classAge);
          this.step++;
          break;
        }
        case 3: {
          this.SET_DATE(this.date);
          this.$router.push({ name: "Data" });
          break;
        }
      }
    },
    back() {
      if (this.step > 1) {
        this.step--;
      }
    },
  },
  mounted() {
    this.step = 1;
  },
};
</script>

<style scoped>
.back-icon {
  height: 2em;
}

.next-icon {
  height: 2em;
  transform: rotate(180deg);
}

.back-button {
  cursor: pointer;
}
</style>
