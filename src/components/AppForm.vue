<template lang="pug">
div
  div(v-if="show")
    .row
      .col-6
        b-form-group(label="Status")
          b-form-select(v-model="form.status" :options="options")
      .col-6
        b-form-group(label="Title")
          b-form-input(v-model="form.jobTitle"
                      type="text"
                      required
                      placeholder="Enter job title")
    .row
      .col-6
        b-form-group(label="Company")
          b-form-input(v-model="form.company"
                      type="text"
                      required
                      placeholder="Enter company name")
      .col-6
        b-form-group(label="URL")
          b-form-input(v-model="form.jobPostingURL"
                      type="text"
                      required
                      placeholder="Enter url of job posting")
    .row
      .col-12
        b-form-group(label="Notes")
        b-form-textarea(v-model="form.notes"
                      placeholder="Enter notes"
                      rows="3"
                      max-rows="6")
    .row
      .col-12.m-1.text-right
        div(v-if="form.id === null")
          b-button.m-2(variant="danger" @click="clear()") Clear
          b-button(variant="success" @click="formAdd()") add
        div(v-else)
          b-button(variant="info" @click="closeForm()") close
  .row(v-else)
    .col-12.m-2
      b-button(variant="success" @click="showForm()") Add new
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["data", "form", "show"])
  },
  methods: {
    ...mapActions(["edit", "add", "closeForm", "showForm"]),
    formAdd() {
      this.add();
      this.closeForm();
    },
  },
  data() {
    return {
      options: [
        { value: null, text: "Please select an option" },
        { value: "Applied", text: "Applied" },
        { value: "PhoneInterviewScheduled", text: "Phone Interview Scheduled" },
        { value: "PhoneInterviewComplete", text: "Phone Interview Complete" },
        {
          value: "InPersonInterviewScheduled",
          text: "In Person Interview Scheduled"
        },
        {
          value: "InPersonInterviewComplete",
          text: "In Person Interview Complete"
        },
        { value: "OfferReceived", text: "Offer Received" },
        { value: "Rejected", text: "Rejected" }
      ]
    };
  }
};
</script>