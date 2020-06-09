import React from "react";
import Header from "./Header";
import ContestList from "./ContestList";
import Contest from "./Contest";
import * as api from "../api";
import propTypes from "prop-types";

const pushState = (obj, url) => {
  window.history.pushState(obj, "", url);
};

const onPopState = (handler) => {
  window.onpopstate = handler;
};

class App extends React.Component {
  static propTypes = {
    initialData: propTypes.object.isRequired,
  };
  state = this.props.initialData;

  componentDidMount() {
    onPopState((event) => {
      this.setState({
        currentContestId: (event.state || {}).currentContestId,
      });
    });
  }

  componentWillUnmount() {
    onPopState(null);
    //cleantimers, listeners
  }

  fetchContest = (contestId) => {
    pushState({ currentContestId: contestId }, `/contests/${contestId}`);

    api
      .fetchContest(contestId)
      .then((contest) => {
        this.setState({
          currentContestId: contest._id,
          contests: {
            ...this.state.contests,
            [contest._id]: contest,
          },
        });
      })
      .catch(console.error);
  };

  fetchContestList = () => {
    pushState({ currentContestId: null }, `/`);

    api
      .fetchContestList()
      .then((contests) => {
        this.setState({
          currentContestId: null,
          contests,
        });
      })
      .catch(console.error);
  };

  fetchNames = (nameIds) => {
    if (nameIds.length === 0) {
      return;
    }
    api
      .fetchNames(nameIds)
      .then((names) => {
        this.setState({
          names,
        });
      })
      .catch(console.error);
  };

  addName = (newName, contestId) => {
    api
      .addName(newName, contestId)
      .then((resp) => {
        this.setState({
          contests: {
            ...this.state.contests,
            [resp.updatedContest._id]: resp.updatedContest,
          },
          names: {
            ...this.state.names,
            [resp.newName._id]: resp.newName,
          },
        });
      })
      .catch(console.error);
  };

  //this.state.contests[contestId]
  pageHeader() {
    if (this.state.currentContestId) {
      return this.currentContest.contestName;
    }

    return "Naming contest";
  }

  currentContest() {
    return this.state.contests[this.state.currentContestId];
  }
  lookUpName = (nameId) => {
    if (!this.state.names || !this.state.names[nameId]) {
      return { name: "..." };
    }
    return this.state.names[nameId];
  };
  currentcontent() {
    if (this.state.currentContestId) {
      return (
        <Contest
          contestListClick={this.fetchContestList}
          fetchNames={this.fetchNames}
          lookUpName={this.lookUpName}
          addName={this.addName}
          {...this.currentContest()}
        />
      );
    }

    return (
      <ContestList
        onContestClick={this.fetchContest}
        contests={this.state.contests}
      />
    );
  }
  render() {
    return (
      <div>
        <Header message={this.pageHeader()} />
        {this.currentcontent()}
      </div>
    );
  }
}

export default App;