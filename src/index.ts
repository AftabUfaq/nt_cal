import inquirer from 'inquirer';
import { performCalculation } from './logic/calculate';
import { questions } from './questions';
import AnswerI from './ts/interfaces';
export default function promptQuestions() {
  inquirer.prompt(questions).then((answers: AnswerI) => performCalculation(answers));
}

promptQuestions();