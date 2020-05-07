<template lang="pug">
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
          b-link(v-if="data.item.jobPostingURL.startsWith('http')" :href="data.item.jobPostingURL") Link
        template(v-slot:cell()="data")
          i {{ data.value }}
        template(v-slot:cell(createdAt)="data")
          i {{ formatDate(data.item.createdAt) }}
        template(v-slot:cell(updatedAt)="data")
          i {{ formatDate(data.item.updatedAt) }}

        template(v-slot:cell(options)="data")
          b-button(variant="danger" @click="remove(data.index)") X
          b-button(variant="info" @click="populateEditForm(data.index)") edit
</template>
<script>
import moment from "moment";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      fields: [
        { key: "status", sortable: true },
        { key: "jobTitle", sortable: true },
        { key: "company", sortable: true },
        "URL",
        "notes",
        { key: "createdAt", sortable: true },
        { key: "updatedAt", sortable: true },
        "options"
      ]
    };
  },
  computed: {
    ...mapGetters(["data"])
  },
  methods: {
    ...mapActions(["populateEditForm","remove"]),
    formatDate(date) {
      return moment(date).format("MMMM Do YYYY");
    },
    rowClass(item, type) {
      if (!item || type !== "row") return;
      switch (item.status) {
        case "OfferReceived":
          return "table-success";
        case "Rejected":
          return "table-info";
      }
    }
  }
};
</script>