import React from "react";

const TextStats = (props) => {
  let { stats } = props;
  let statNotEmpty = Object.keys(stats).length > 0 ? true : false;
  return (
    <div className="text-stats-container col">
      <div className="text-stats-header">Statistics</div>
      <div className="text-stats-body">
        <table>
          <tbody>
            <tr>
              <td>Words</td>
              <td>{statNotEmpty && stats["words"]}</td>
            </tr>
            <tr>
              <td>Letters</td>
              <td>{statNotEmpty && stats["letters"]}</td>
            </tr>
            <tr>
              <td>Bigrams</td>
              <td>{statNotEmpty && stats["bigrams"]}</td>
            </tr>
            <tr>
              <td>Trigrams</td>
              <td>{statNotEmpty && stats["trigrams"]}</td>
            </tr>
            <tr>
              <td>Quadgrams</td>
              <td>{statNotEmpty && stats["quadgrams"]}</td>
            </tr>
            <tr>
              <td>Sentences</td>
              <td>{statNotEmpty && stats["sentences"]}</td>
            </tr>
            <tr>
              <td>Paragraphs</td>
              <td>{statNotEmpty && stats["paragraphs"]}</td>
            </tr>
            <tr>
              <td>Characters</td>
              <td>{statNotEmpty && stats["chars"]}</td>
            </tr>
            <tr>
              <td>Unique Words</td>
              <td>{statNotEmpty && stats["uniqueWords"]}</td>
            </tr>
            <tr>
              <td>Longest Word</td>
              <td>{statNotEmpty && stats["longestWord"]}</td>
            </tr>
            <tr>
              <td>Most Frequent Word</td>
              <td>{statNotEmpty && stats["mostFrequentWord"]}</td>
            </tr>
            <tr>
              <td>Grade Level*</td>
              <td>{statNotEmpty && stats["readability"]}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-stats-footnote">
        <p>
          *The grade level is based off the Coleman–Liau index.
          <a
            href="https://en.wikipedia.org/wiki/Coleman%E2%80%93Liau_index"
            target="_blank"
          >
            {" "}
            Learn more.
          </a>
        </p>
      </div>
    </div>
  );
};

export default TextStats;
