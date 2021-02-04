/**
 * In the programming language of your choice, write a program that parses a sentence and replaces each
 * word with the following: first letter, number of distinct characters between first and last character, and
 * last letter.  For example, Smooth would become S3h.  Words are separated by spaces or non-alphabetic
 * characters and these separators should be maintained in their original form and location in the answer.
 */

import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");

  useEffect(() => {
    if (first) {
      let newSentence = "";
      const nonAlphabetic = first.match(/[^A-Za-z]/g);
      const alphabetic = first.split(/[^A-Za-z]/g);

      alphabetic.forEach((f, i) => {
        const space =
          nonAlphabetic && nonAlphabetic[i] ? nonAlphabetic[i] : " ";
        const count =
          String.prototype.concat(...new Set(f.slice(1, -1))).length || "";

        newSentence += f.substr(0, 1) + count + f.substr(-1, 1) + space;
      });
      setSecond(newSentence);
    }
  }, [first]);

  return (
    <div className="App">
      Enter a sentence:{" "}
      <input type="text" onChange={({ target }) => setFirst(target.value)} />
      <p>{first}</p>
      <p>{second}</p>
    </div>
  );
}
