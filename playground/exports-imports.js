// person.js
const Person = {
    name: 'max'
}
const age = 24;
export default Person;// default export -> if import something from this file then 
// that means we are importing person.. we can use any name while importing it.




//------------ utill.js
export const clean = () => { //... some logic
}
export const baseData = 20;
//this module has multiple named exports so while importing them we need to specify their correct names
//here name is defined by export keyword will be used while importing it.






//------------ app.js
import person from './Person.js';//default
import psn from './Person.js';


import { baseData } from './Utill.js';//named imp
import { clean } from './Utill.js';//named imp
import { actualExportedKey as alias } from './Utill.js';//named imp
import * as bundeled from './Utill.js';//named imp -> them use bundeled.exportedkeyname

