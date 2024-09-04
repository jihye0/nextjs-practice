let count =0;
count +=1;
//count = '갑자기 분위기 문자열'; // 이러면 에러가 납니다.
const message: string= 'hello world';
const done: boolean=true;

const numbers: number[]=[1,2,3];
const messages: string[]=['hello','world'];

//messages.push(1); //숫자 넣으려고 하면 안된다.

let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;

let color: 'red' | 'orange' | 'yellow' = 'red';
color ='yellow';
//color = 'green'; //에러발생