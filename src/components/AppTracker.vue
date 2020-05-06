<template lang="pug">
div
  .container
    .row
      .col-12
        h3 Job Application Tracker
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
        b-button.m-2(variant="danger" @click="clear()") Clear
        b-button(v-if="form.id === null" variant="success" @click="add()") add
        b-button(v-else variant="success" @click="clear()") update

  div(v-if="data.length > 0")
    .row
      .col-12
        b-table(head-variant="light",
                striped,
                responsive,
                hover,
                :tbody-tr-class="rowClass",
                :fields="fields",
                :items="data")
          template(v-slot:cell(url)="data")
            b-link(:href="data.item.jobPostingURL") Link
          template(v-slot:cell()="data")
            i {{ data.value }}
          template(v-slot:cell(createdAt)="data")
            i {{ formatDate(data.item.createdAt) }}
          template(v-slot:cell(updatedAt)="data")
            i {{ formatDate(data.item.updatedAt) }}

          template(v-slot:cell(options)="data")
            b-button(variant="danger" @click="remove(data.index)") X
            b-button(variant="info" @click="edit(data.index)") edit
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      form: {
        id: null,
        status: "Applied",
        jobTitle: "",
        company: "",
        jobPostingURL: "",
        notes: "",
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      fields: [
        { key: "status", sortable: true },
        { key: "jobTitle", sortable: true },
        { key: "company", sortable: true },
        "URL",
        "notes",
        { key: "createdAt", sortable: true },
        { key: "updatedAt", sortable: true },
        "options"
      ],
      data: [],
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
    remove(id) {
      this.data.splice(id, 1);
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
    rowClass(item, type) {
      if (!item || type !== "row") return;
      switch (item.status) {
        case "OfferReceived":
          return "table-success";
        case "Rejected":
          return "table-info";
      }
    },
    formatDate(date) {
      return moment(date).format("MMMM Do YYYY");
    }
  }
};
</script>
