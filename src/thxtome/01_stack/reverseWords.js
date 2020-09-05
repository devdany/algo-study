const reverseOneWord = (string) => {
  let word = string.split("");
  return word.reverse();
};

export const reverseWords = (sentence) => {
  //문장을 단어 단위로 변환
  let words = sentence.split(" ");

  //단어를 뒤집어서 문장으로 연결
  return words
    .map((word) => reverseOneWord(word))
    .reduce((prev, cur) => {
      return prev + `${cur.join()} `;
    }, "")
    .replace(/\,/g, "")
    .substr(0, sentence.length);
};
