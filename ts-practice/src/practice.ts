// let count =0;
// count +=1;
// //count = '갑자기 분위기 문자열'; // 이러면 에러가 납니다.
// const message: string= 'hello world';
// const done: boolean=true;

// const numbers: number[]=[1,2,3];
// const messages: string[]=['hello','world'];

// //messages.push(1); //숫자 넣으려고 하면 안된다.

// let mightBeUndefined: string | undefined = undefined;
// let nullableNumber: number | null = null;

// let color: 'red' | 'orange' | 'yellow' = 'red';
// color ='yellow';
// //color = 'green'; //에러발생

function sum(x: number, y: number): number{
    return x+y;
}
sum(1,2);

function sumArray(numbers: number[]):number{
    return numbers.reduce((acc, current)=>acc+current, 0);
}

const total = sumArray([1,2,3,4,5]);
//타입스크립트를 사용했을 때 참 편리한 점은, 배열의 내장함수를 사용할 때에도 타입 유추가 잘 이루어진다는 것

interface Shape{
    getArea(): number;
}