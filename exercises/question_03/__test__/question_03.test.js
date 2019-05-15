import netPay from '../netPay';
import {amountDiscount, percentDiscount} from '../netPay'

describe('test question 3', () => {
    describe('net pay', () => {
        it('test return value', () => {
          const number = 95;
          const bill = {
            type: 'customer',
            buy: 100,
            joinDate: 2019
        }
          expect(netPay(bill)).toEqual(number);
        });
    });

    describe('test discount percent', () => {
        it('return percent right', () => {
          const percent = 10;
          const bill = {
            type: 'affiliate',
            buy: 100,
            joinDate: 2019
        }
          expect(percentDiscount(bill.type, bill.buy)).toEqual(percent);
        });
    })

    describe('test amount discount', () => {
      it('return amount right', () => {
        const amount = 45;
        const bill = {
          type: 'customer',
          buy: 990,
          joinDate: 2019
      }
        expect(amountDiscount(bill.type, bill.buy)).toEqual(amount);
      });
  })
})