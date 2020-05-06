import React, { Component } from "react";
import firebase from "./utils/firebase";

// components
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import AddApplication from "./components/AddApplication";
import EditJob from "./components/EditJob";
import ApplicationList from "./components/ApplicationList";

require("./styles/main.scss");

export class App extends Component {
  constructor() {
    super();
    this.state = {
      applications: [],
      selectedJob: {},
      loading: false,
      editView: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    const dbRef = firebase.database().ref();

    dbRef.on("value", (res) => {
      const data = res.val();

      const applications = [];
      for (let key in data) {
        const stateData = data[key];
        stateData.id = key;

        applications.push(stateData);
      }

      this.setState({ applications, loading: false });
    });
  }

  handleEdit = (job) => {
    this.setState({ selectedApplication: job, editView: true });
  };

  handleClose = () => {
    this.setState({ editView: false, selectedJob: {} });
  };

  render() {
    const { applications, loading, selectedJob, editView } = this.state;

    return (
      <div className="App">
        <Header />
        <main className="main">
          <AddApplication />
          {editView && (
            <EditJob job={selectedJob} closeEdit={this.handleClose} />
          )}
          <ApplicationList
            loading={loading}
            applications={applications}
            handleEdit={this.handleEdit}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
