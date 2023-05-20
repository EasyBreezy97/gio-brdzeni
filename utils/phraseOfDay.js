import moment from "moment";

export function phraseOfTheDay(phrase) {
  const today = moment();
  if (!localStorage.getItem("phrase")) {
    localStorage.setItem("phrase", JSON.stringify({ time: today, phrase }));
    return phrase
  } else {
    const storagePhrase = JSON.parse(localStorage.getItem("phrase"));
    const storageDate = moment(storagePhrase.time);
    const diffInDays = storageDate.diff(today, "days");
    if (diffInDays !== 0) localStorage.removeItem("phrase");
  }
}
