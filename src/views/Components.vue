<template>
  <div class="px-3 py-4">
    <h1>Components</h1>
    <div class="row d-flex justify-content-center mt-4">
      <div class="col-lg-8">
        <div class="card mx-3">
          <div class="card-body">
            <h5 class="card-title">Radio Button</h5>
            <div class="row mt-3">
              <h6 class="card-subtitle mb-2 text-muted">Square Radio Button</h6>
              <div class="col-12">
                <radio-card
                  radioName="square"
                  radioId="square1"
                  radioValue="1"
                  header="square 1"
                  shape="square"
                  description="any description"
                  v-model="radioValue"
                ></radio-card>
                <radio-card
                  radioName="square"
                  radioId="square2"
                  radioValue="2"
                  header="square 2"
                  shape="square"
                  description="any description"
                  v-model="radioValue"
                ></radio-card>
                <radio-card
                  radioName="square"
                  radioId="square3"
                  radioValue="3"
                  header="square 3"
                  shape="square"
                  description="any description"
                  v-model="radioValue"
                ></radio-card>
              </div>
            </div>
            <div class="row mt-3">
              <h6 class="card-subtitle mb-2 text-muted">Circle Radio Button</h6>
              <div class="col-12">
                <radio-card
                  radioName="circle"
                  radioId="circle1"
                  header="circle 1"
                  shape="circle"
                  description="any description"
                ></radio-card>
                <radio-card
                  radioName="circle"
                  radioId="circle2"
                  header="circle 2"
                  shape="circle"
                  description="any description"
                ></radio-card>
                <radio-card
                  radioName="circle"
                  radioId="circle3"
                  header="circle 3"
                  shape="circle"
                  description="any description"
                ></radio-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center mt-4">
      <div class="col-lg-8">
        <div class="card mx-3">
          <div class="card-body">
            <h5 class="card-title">Forms</h5>
            <div class="row mt-3 pt-2">
              <h6 class="card-subtitle mb-2 text-muted">Input text</h6>
              <div class="col-lg-6 col-md-6">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input
                  type="text"
                  class="input-text"
                  id="exampleFormControlInput1"
                  placeholder="Name"
                />
              </div>
              <div class="col-lg-6 col-md-6">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input
                  type="email"
                  class="input-text"
                  id="exampleFormControlInput2"
                  placeholder="name@example.com"
                />
              </div>
            </div>
            <div class="row mt-3 pt-2">
              <h6 class="card-subtitle mb-2 text-muted">Input text line</h6>
              <div class="col-lg-6 col-md-6">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input
                  type="text"
                  class="input-text-line"
                  id="exampleFormControlInput3"
                  placeholder="Name"
                />
              </div>
              <div class="col-lg-6 col-md-6">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input
                  type="email"
                  class="input-text-line"
                  id="exampleFormControlInput4"
                  placeholder="name@example.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center mt-4">
      <div class="col-lg-8">
        <div class="card mx-3">
          <div class="card-body">
            <h5 class="card-title">Slider</h5>
            <div class="col-md-6 mt-3 pt-2">
              <slide-container>
                <radio-card
                  radioName="slide"
                  radioId="slide1"
                  header="circle 1"
                  shape="circle"
                  description="any description"
                ></radio-card>
                <radio-card
                  radioName="slide"
                  radioId="slide2"
                  header="circle 2"
                  shape="circle"
                  description="any description"
                ></radio-card>
                <radio-card
                  radioName="slide"
                  radioId="slide3"
                  header="circle 3"
                  shape="circle"
                  description="any description"
                ></radio-card>
                <radio-card
                  radioName="slide"
                  radioId="slide4"
                  header="circle 4"
                  shape="circle"
                  description="any description"
                ></radio-card>
                <radio-card
                  radioName="slide"
                  radioId="slide5"
                  header="circle 5"
                  shape="circle"
                  description="any description"
                ></radio-card>
                <radio-card
                  radioName="slide"
                  radioId="slide6"
                  header="circle 6"
                  shape="circle"
                  description="any description"
                ></radio-card>
              </slide-container>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RadioCard from "@/components/RadioCard.vue";
import SlideContainer from "@/components/SlideContainer";

export default {
  name: "components",
  components: {
    RadioCard,
    SlideContainer,
  },
  data() {
    return {
      radioValue: "",
    };
  },
};
</script>
