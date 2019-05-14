import netPay from '../netPay';

describe('test question 1', () => {
    describe('load data', () => {
        it('test load data', () => {
          const number = 95;
          const bill = {
            type: 'customer',
            bill: 100,
            joinDate: 2019
        }
          expect(netPay(bill)).toEqual(number);
        });
    });

    describe('load data', () => {
        it('test load data', () => {
          const number = 95;
          const bill = {
            type: 'customer',
            bill: 100,
            joinDate: 2019
        }
          expect(netPay(bill)).toEqual(number);
        });
    })
})