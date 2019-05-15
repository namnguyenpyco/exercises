import netPay from '../netPay';
import { amountDiscount, percentDiscount } from '../netPay'

describe('test question 3', () => {
  describe('net pay', () => {
    it('net pay for normal user', () => {
      const number = 95;
      const bill = {
        type: 'customer',
        buy: 100,
        joinDate: 2019
      }
      expect(netPay(bill)).toEqual(number);
    });
  });

  describe('net pay', () => {
    it('net pay for groceries', () => {
      const number = 20;
      const bill = {
        type: 'groceries',
        buy: 20,
        joinDate: 2019
      }
      expect(netPay(bill)).toEqual(number);
    });
  });

  describe('net pay', () => {
    it('net pay for employee', () => {
      const number = 70;
      const bill = {
        type: 'employee',
        buy: 100,
        joinDate: 2019
      }
      expect(netPay(bill)).toEqual(number);
    });
  });

  describe('test discount percent', () => {
    it('test discount percent for groceries', () => {
      const percent = 0;
      const bill = {
        type: 'groceries',
        buy: 100,
        joinDate: 2019
      }
      expect(percentDiscount(bill.type, bill.buy)).toEqual(percent);
    });
  })

  describe('test discount percent', () => {
    it('test discount percent for employee', () => {
      const percent = 30;
      const bill = {
        type: 'employee',
        buy: 30,
        joinDate: 2017
      }
      expect(percentDiscount(bill.type, bill.buy)).toEqual(percent);
    });
  })

  describe('test discount percent', () => {
    it('test discount percent for affiliate', () => {
      const percent = 10;
      const bill = {
        type: 'affiliate',
        buy: 30,
        joinDate: 2016
      }
      expect(percentDiscount(bill.type, bill.buy)).toEqual(percent);
    });
  })

  describe('test discount percent', () => {
    it('test discount percent for customer over 2 years', () => {
      const percent = 5;
      const bill = {
        type: 'customer',
        buy: 30,
        joinDate: 2015
      }
      expect(percentDiscount(bill.type, bill.buy)).toEqual(percent);
    });
  })

  describe('test amount discount', () => {
    it('test amout discount for buy > 100', () => {
      const amount = 45;
      const bill = {
        type: 'employee',
        buy: 990,
        joinDate: 2019
      }
      expect(amountDiscount(bill.type, bill.buy)).toEqual(amount);
    });
  })

  describe('test amount discount', () => {
    it('test amout discount for buy < 100', () => {
      const amount = 0;
      const bill = {
        type: 'customer',
        buy: 20,
        joinDate: 2019
      }
      expect(amountDiscount(bill.type, bill.buy)).toEqual(amount);
    });
  })
})