/* Helper functions for parseTextStats()*/
function isLetter(c) {
  if (c) return c.length == 1 && !!c.match(/[A-Z|a-z|ü|é]/i);
}

function getWord(i, N, text) {
  let word = "";
  while (isLetter(text[i]) && i < N) {
    word += text[i];
    i += 1;
  }
  return word;
}

function computeAllGrams(words, set2, set3, set4, N, stats) {
  let i = 0;

  while (i <= N - 2) {
    //creating bigram and adding to set
    let bigram = `${words[i]}-${words[i + 1]}`;
    if (!set2.has(bigram)) set2.add(bigram);
    //creating trigram and adding to set
    if (words.length >= 3 && i < N - 2) {
      let trigram = `${words[i]}-${words[i + 1]}-${words[i + 2]}`;
      if (!set3.has(trigram)) set3.add(trigram);
    }
    //creating quadgram and adding to set
    if (words.length >= 4 && i < N - 3) {
      let quadgram = `${words[i]}-${words[i + 1]}-${words[i + 2]}-${
        words[i + 3]
      }`;
      if (!set4.has(quadgram)) set4.add(quadgram);
    }
    i += 1;
  }
  stats["bigrams"] = set2.size;
  stats["trigrams"] = set3.size;
  stats["quadgrams"] = set4.size;
}

function setWordStats(words, N, stats) {
  let allWords = {};
  for (let i = 0; i < N; ++i) {
    if (words[i] in allWords) {
      allWords[words[i]] += 1;
    } else {
      allWords[words[i]] = 1;
    }
  }

  let wordWithHigestFreq = Object.keys(allWords).reduce((a, b) =>
    allWords[a] > allWords[b] ? a : b
  );
  let mostFrequentWord =
    allWords[wordWithHigestFreq] == 1 ? "na" : wordWithHigestFreq;
  let longestWord = Object.keys(allWords).reduce((a, b) =>
    a.length > b.length ? a : b
  );

  let countOfUniqueWords = 0;
  for (const w in allWords) {
    if (allWords[w] == 1) countOfUniqueWords += 1;
  }

  stats["uniqueWords"] = countOfUniqueWords;
  stats["longestWord"] = longestWord;
  stats["mostFrequentWord"] = mostFrequentWord;
}

function setReadability(stats) {
  let letters = stats["letters"];
  let sentences = stats["sentences"];
  let words = stats["words"];

  let L = (letters / words) * 100;
  let S = (sentences / words) * 100;
  let result = Math.floor(0.0588 * L - 0.296 * S - 15.8);
  if (result < 1) {
    stats["readability"] = "Below 1st Grade.";
  } else if (result >= 16) {
    stats["readability"] = "College Junior and above.";
  } else {
    stats["readability"] = `Grade ${result}`;
  }
}

/*
 * Main function for parsing text to get statistics
 */

function parseTextStats(text) {
  let N = text.length;
  let stats = {
    chars: N,
    words: 0,
    letters: 0,
    sentences: 0,
    paragraphs: 0,
    bigrams: 0,
    trigrams: 0,
    quadgrams: 0,
    uniqueWords: 0,
    longestWord: 0,
    mostFrequentWord: 0,
    readability: "na",
  };
  let words = [];
  let bigramsSet = new Set();
  let trigramsSet = new Set();
  let quadgramsSet = new Set();

  for (let i = 0; i < N; ++i) {
    if (isLetter(text[i])) stats["letters"] += 1;

    if (
      (i == 0 && text[i] != " ") ||
      (i != N - 1 && text[i] == " " && isLetter(text[i + 1]))
    ) {
      stats["words"] += 1;
      let index = i == 0 ? i : i + 1;
      let word = getWord(index, N, text);
      words.push(word);
    }

    if (text[i] == "." || text[i] == "!" || text[i] == "?")
      stats["sentences"] += 1;

    if (i != N - 1 && text[i] == "\n" && text[i + 1] == "\t")
      stats["paragraphs"] += 1;
  }

  let nWords = words.length;
  console.log(words);

  setWordStats(words, nWords, stats);

  if (nWords >= 2)
    computeAllGrams(
      words,
      bigramsSet,
      trigramsSet,
      quadgramsSet,
      nWords,
      stats
    );

  if (stats["sentences"] >= 1) setReadability(stats);
  if (stats["sentences"] >= 3) stats["paragraphs"] += 1;

  return stats;
}

export default parseTextStats;
