import React, { Component } from "react";
import firebase from "./utils/firebase";

// components
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import AddApplication from "./components/AddApplication";
import ApplicationList from "./components/ApplicationList";

require("./styles/main.scss");

export class App extends Component {
  constructor() {
    super();
    this.state = {
      applications: [],
      selectedJob: {},
    };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on("value", (res) => {
      const data = res.val();

      const applications = [];
      for (let key in data) {
        const stateData = data[key];
        stateData.id = key;

        applications.push(stateData);
      }

      this.setState({ applications: applications });
    });
  }

  handleSelect = (application) => {
    this.setState({ selectedApplication: application });
  };

  render() {
    const { applications, selectedJob } = this.state;

    return (
      <div className="App">
        <Header />
        <main className="main">
          <AddApplication />
          <ApplicationList
            applications={applications}
            handleSelect={this.handleSelect}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
