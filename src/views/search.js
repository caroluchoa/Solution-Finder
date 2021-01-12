import React from "react";
import NavBar from "../components/nav-bar";
import Search from "../components/search";
import Loader from "../components/loader";
import LoadedBody from "../components/loaded-body";
import Answer from "../components/answer";

var qs = require("querystring");
var axios = require("axios");

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.ansCounter = this.ansCounter.bind(this);
    this.state = {
      nav: <NavBar />,
      body: (
        <div>
          <Search search={this.search} />
        </div>
      ),
      answerlst: [],
      noScoreAns: [],
      ansCount: 0,
    };
  }
  ansCounter() {
    this.setState({
      ansCount: this.state.ansCount + 1,
    });
    return this.state.ansCount;
  }
  search(ev) {
    if (ev.charCode === 13) {
      var query = ev.target.value.trim();

      this.setState({
        nav: <NavBar search={this.search} />,
        body: <Loader />,
      });
      axios
        .request({
          url: "/stackoverflow/api/question/",
          method: "POST",
          data: qs.stringify({
            query: query,
          }),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((gres) => {
          var stackOverflowQuestionIds = [];
          stackOverflowQuestionIds.forEach((qId) => {
            axios
              .request({
                url: "/stackoverflow/api/question/" + qId,
                method: "GET",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "Access-Control-Allow-Origin": "*",
                },
              })
              .then((sres) => {
                sres.data.forEach((dta) => {
                  console.log(dta);
                  if (dta.replyScores.length) {
                    let avg =
                      dta.replyScores.reduce((x, y) => x + y) /
                      dta.replyScores.length;
                    console.log(avg);

                    if (avg >= 0) {
                      this.setState({
                        answerlst: this.state.answerlst.concat(
                          <Answer key={this.ansCounter()} answer={dta.answer} />
                        ),
                        body: (
                          <LoadedBody
                            answerlst={this.state.answerlst}
                            noScoreAns={this.state.noScoreAns}
                          />
                        ),
                      });
                    }
                  } else {
                    this.setState({
                      noScoreAns: this.state.noScoreAns.concat(
                        <Answer key={this.ansCounter()} answer={dta.answer} />
                      ),
                      body: (
                        <LoadedBody
                          answerlst={this.state.answerlst}
                          noScoreAns={this.state.noScoreAns}
                        />
                      ),
                    });
                  }
                });
              })
              .catch((err) => console.log(err));
          });
        })
        .catch((err) => console.log(err));
    }
  }
  render() {
    return (
      <div>
        {this.state.body}
      </div>
    );
  }
}

export default SearchPage;