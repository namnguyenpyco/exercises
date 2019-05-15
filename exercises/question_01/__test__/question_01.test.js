import loadData from '../load'
import storeData from '../store'

describe('test question 1', () => {
  describe('load data', () => {
    it('test load data', () => {
      const data = 'key1=value1;key2=value2\nkeyA=valueA\n...'
      const object = [{
        key1: 'value1',
        key2: 'value2',
      }, {
        keyA: 'valueA',
      }];
      expect(loadData(data)).toEqual(object);
    });
  });

  describe('load data', () => {
    it('test load search do not have \n', () => {
      const data = 'key1=value1;key2=value2keyA=valueA...'
      const object = [];
      expect(loadData(data)).toEqual(object);
    });
  });

  describe('load data', () => {
    it('test load search do not have =', () => {
      const data = 'key1value1;key2value2\nkeyAvalueA\n...'
      const object = [{}];
      expect(loadData(data)).toEqual(object);
    });
  });

  describe('store data', () => {
    it('test store data', () => {
      const data2 = 'key1=value1;key2=value2\nkeyA=valueA\n';
      const object2 = [{
        key1: 'value1',
        key2: 'value2',
      }, {
        keyA: 'valueA',
      }]

      expect(storeData(object2)).toEqual(data2);
    });
  })
})

