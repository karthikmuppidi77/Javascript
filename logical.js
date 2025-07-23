const andResult = 0 && 2;//  0
const orResult = 0 || 2; //2
const andResult2 = '' &&  'Hello'; // ''
const orResult2 = '' ||  'Hello'; // 'Hello'

const andResult3 = '' &&  null; // ''
const orResult3 = 'hello' ||  'null'; //'hello'


const orResult4 = 'hello' || +4-4; //0
const orResult5 = 'hello' && +4-4 ; // 0
const orResult6 = 'hello' &&  undefined; // hello
const orResult7 = null ||  console.log('hello'); // undefined
const orResult8 = 'hello' &&  console.log('hello'); // undefined

