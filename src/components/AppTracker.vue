<template lang="pug">
div
  div(v-if="data.length > 0")
    AppHistory
  .container
    AppForm
</template>

<script>
import AppForm from "./AppForm";
import AppHistory from "./AppHistory";
import { mapGetters } from "vuex";

export default {
  components: {
    AppForm,
    AppHistory
  },
  computed: {
    ...mapGetters(["data"])
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
  },
  methods: {
    add() {
      this.data.push({
        status: this.form.status,
        jobTitle: this.form.jobTitle,
        company: this.form.company,
        jobPostingURL: this.form.jobPostingURL,
        notes: this.form.notes,
        createdAt: Date.now(),
        updatedAt: Date.now()
      });
      this.clear();
    },
    edit(id) {
      this.form = this.data[id];
    },
    clear() {
      this.form = {
        id: null,
        status: null,
        jobTitle: "",
        company: "",
        jobPostingURL: "",
        notes: ""
      };
    },
  }
};
</script>
