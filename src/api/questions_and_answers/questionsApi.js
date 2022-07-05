import {
  domQuestions,
  httpRequestsQuestions,
  jsQuestions,
  localStorageQuestions,
  HTMLQuestions,
} from "../../temp_data/questions_and_aswers/questionsData";

// const questionsData = domQuestions
//   .concat(localStorageQuestions)
//   .concat(httpRequestsQuestions);
// const questionsData = localStorageQuestions;
const questionsData = [
  ...jsQuestions,
  ...domQuestions,
  ...localStorageQuestions,
  ...httpRequestsQuestions,
];
// const questionsData = HTMLQuestions;
export function getQuestions() {
  return questionsData;
}
