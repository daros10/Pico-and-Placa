import { expect } from 'chai';
import { MessageEnum } from '../constants/MessageEnum';
import { picoPlacaPredictor } from './Predictor';

describe('Prediction unit test', () => {
  it('should throw panic error', () => {
    expect(picoPlacaPredictor('', null, null)).eql('Panic Error!');
  });

  it('should throw a message CANNOT circultate Monday plate ending in 1 at 07:00', () => {
    expect(
      picoPlacaPredictor(
        'ABC-0121',
        new Date('Mon Feb 01 2021 07:00:00 GMT-0500 (hora de Ecuador)'),
        new Date('Mon Feb 01 2021 07:00:00 GMT-0500 (hora de Ecuador)')
      )
    ).eql(
      'Vehicle with license plate [ABC-0121] ending in [1] CANNOT circulate at [07:00:00].'
    );
  });

  it('should throw a message CANNOT circultate Monday plate ending in 2 at 09:30', () => {
    expect(
      picoPlacaPredictor(
        'ABC-0122',
        new Date('Mon Feb 01 2021 09:30:00 GMT-0500 (hora de Ecuador)'),
        new Date('Mon Feb 01 2021 09:30:00 GMT-0500 (hora de Ecuador)')
      )
    ).eql(
      'Vehicle with license plate [ABC-0122] ending in [2] CANNOT circulate at [09:30:00].'
    );
  });

  it('should throw a message all its ok circultate Monday plate ending in 2 at 09:31', () => {
    expect(
      picoPlacaPredictor(
        'ABC-0122',
        new Date('Mon Feb 01 2021 09:31:00 GMT-0500 (hora de Ecuador)'),
        new Date('Mon Feb 01 2021 09:31:00 GMT-0500 (hora de Ecuador)')
      )
    ).eql(MessageEnum.SUCCESS);
  });

  it('should throw a message CANNOT circultate Tuesday plate ending in 3 at 16:00', () => {
    expect(
      picoPlacaPredictor(
        'ABC-0123',
        new Date('Tue Feb 02 2021 16:00:00 GMT-0500 (hora de Ecuador)'),
        new Date('Tue Feb 02 2021 16:00:00 GMT-0500 (hora de Ecuador)')
      )
    ).eql(
      'Vehicle with license plate [ABC-0123] ending in [3] CANNOT circulate at [16:00:00].'
    );
  });

  it('should throw a message CANNOT circultate Tuesday plate ending in 3 at 19:30', () => {
    expect(
      picoPlacaPredictor(
        'ABC-0123',
        new Date('Tue Feb 02 2021 19:30:00 GMT-0500 (hora de Ecuador)'),
        new Date('Tue Feb 02 2021 19:30:00 GMT-0500 (hora de Ecuador)')
      )
    ).eql(
      'Vehicle with license plate [ABC-0123] ending in [3] CANNOT circulate at [19:30:00].'
    );
  });

  it('should throw a message all its ok circultate Tuesday plate ending in 4 at 09:31', () => {
    expect(
      picoPlacaPredictor(
        'ABC-0124',
        new Date('Tue Feb 02 2021 09:31:00 GMT-0500 (hora de Ecuador)'),
        new Date('Tue Feb 02 2021 09:31:00 GMT-0500 (hora de Ecuador)')
      )
    ).eql(MessageEnum.SUCCESS);
  });
});
