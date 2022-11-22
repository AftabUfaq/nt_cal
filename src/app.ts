#! /usr/bin/env node
import inquirer from 'inquirer'
const { program } = require('commander')
 
 const questions = [
   {
     type: 'number',
     name: 'first_value',
     message: "Enter first value",
   },
   {
     type: 'input',
     name: 'second_value',
     message: "What's your last name",
   },
   {
    type:"list",
    name:"Operator",
    message:"Enter Operator",
    choices:["+","-","*","/","%"]
   }
 ];
 
 function main(){
 inquirer.prompt(questions).then((answers) => {

 })
}
main()
program
    .command('list')
    .description('List all the TODO tasks')
    .action(list)