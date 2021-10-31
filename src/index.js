import read from "../src/reader.js";
import json from "../src/parser.js";

class GameSavingLoader {

  static load() {
    read().then((response) => {
      return json(response);
    }).then((data) => {
      return data;
    })
  }
}

// GameSavingLoader.load().then((saving) => {
//   console.log(saving);
// }, (error) => {
//   // ...
// });