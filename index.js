import loadData from './exercises/question_01/load';
import storeData from './exercises/question_01/store';
import netPay from './exercises/question_03/netPay';

//Question 01 load data
const text = 'key1=value1;key2=value2\nkeyA=valueA\n...';
console.log(`Q1: Load data ${loadData(text)}`);

const data = [{key1: 'value1',key2: 'value2'}, {keyA: 'valueA'}];
console.log(`Q1: Store data ${storeData(data)}`);

//Question 03 net pay for bill
const bill = {
    type: 'customer',
    bill: 100,
    joinDate: 2019
}
console.log(`Q3: net pay ${netPay(bill)}`);