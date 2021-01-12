const express = require("express");
const router = express.Router();
const path = require("path");
var axios = require("axios");
const url = "https://api.stackexchange.com/2.2";


router.get("/api/answers/:answerID", (req, res) => {
  if (req.params.answerID) {
    let data1 = axiosRes1.data;
    let answerIDs = data1.items.map(item => item.answer_id);
    console.log(answerIDs);
    answerIDs.forEach(answerID => {
      axios
        .get(
          `${url}/answers/${answerID}/comments?order=desc&sort=votes&site=stackoverflow`
        )
        .then(axiosRes2 => {
          let data2 = axiosRes2.data;
          let commentIDs = data2.items.map(item => item.comment_id);
          console.log(commentIDs);
        })
        .catch(err => console.log(err.message));
    });
  }
});

router.get("/api/test", (req, res) => {
  res.sendFile("appSimple.html", {
    root: path.join(__dirname, "../../../public")
  });
});
module.exports = router;