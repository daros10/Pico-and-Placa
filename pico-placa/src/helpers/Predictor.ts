import { DaysEnum } from '../constants/DaysEnum';
import { MessageEnum } from '../constants/MessageEnum';
import { RangesTimeEnum } from '../constants/RangesTimeEnum';

const ranges: string[][] = [
  [RangesTimeEnum.START_MORNING, RangesTimeEnum.END_MORNING],
  [RangesTimeEnum.START_AFTERNOON, RangesTimeEnum.END_AFTERNOON],
];

export function picoPlacaPredictor(
  plateCode: string,
  datePrediction: Date | null,
  timePrediction: Date | null
): string {
  if (
    plateCode.length < 0 ||
    datePrediction == null ||
    timePrediction == null
  ) {
    return 'Panic Error!';
  }

  const dayOfPrediction: string = datePrediction.toString().split(' ')[0];
  const time: string = timePrediction.toString().split(' ')[4];
  const timeOfPrediction = time.substring(0, 5);

  switch (dayOfPrediction) {
    case DaysEnum.MONDAY: {
      if (
        checkLicensePlateCirculation(
          getLastDigitOfLicensePlate(plateCode),
          '1',
          '2'
        ) &&
        (isInRangePicoPlaca(timeOfPrediction, ranges[0]) ||
          isInRangePicoPlaca(timeOfPrediction, ranges[1]))
      ) {
        return generateResponse(plateCode, time);
      }

      return MessageEnum.SUCCESS;
    }

    case DaysEnum.TUESDAY: {
      if (
        checkLicensePlateCirculation(
          getLastDigitOfLicensePlate(plateCode),
          '3',
          '4'
        ) &&
        (isInRangePicoPlaca(timeOfPrediction, ranges[0]) ||
          isInRangePicoPlaca(timeOfPrediction, ranges[1]))
      ) {
        return generateResponse(plateCode, time);
      }

      return MessageEnum.SUCCESS;
    }

    case DaysEnum.WEDNESDAY: {
      if (
        checkLicensePlateCirculation(
          getLastDigitOfLicensePlate(plateCode),
          '5',
          '6'
        ) &&
        (isInRangePicoPlaca(timeOfPrediction, ranges[0]) ||
          isInRangePicoPlaca(timeOfPrediction, ranges[1]))
      ) {
        return generateResponse(plateCode, time);
      }

      return MessageEnum.SUCCESS;
    }

    case DaysEnum.THURSDAY: {
      if (
        checkLicensePlateCirculation(
          getLastDigitOfLicensePlate(plateCode),
          '7',
          '8'
        ) &&
        (isInRangePicoPlaca(timeOfPrediction, ranges[0]) ||
          isInRangePicoPlaca(timeOfPrediction, ranges[1]))
      ) {
        return generateResponse(plateCode, time);
      }

      return MessageEnum.SUCCESS;
    }

    case DaysEnum.FRIDAY: {
      if (
        checkLicensePlateCirculation(
          getLastDigitOfLicensePlate(plateCode),
          '9',
          '0'
        ) &&
        (isInRangePicoPlaca(timeOfPrediction, ranges[0]) ||
          isInRangePicoPlaca(timeOfPrediction, ranges[1]))
      ) {
        return generateResponse(plateCode, time);
      }

      return MessageEnum.SUCCESS;
    }

    default: {
      return MessageEnum.SUCCESS;
    }
  }
}

function getLastDigitOfLicensePlate(plate: string): string {
  return plate.substring(plate.length - 1);
}

function checkLicensePlateCirculation(
  lastDigitOfPlate: string,
  firstCondition: string,
  secondCondition: string
): boolean {
  if (
    lastDigitOfPlate === firstCondition ||
    lastDigitOfPlate === secondCondition
  ) {
    return true;
  }
  return false;
}

function isInRangePicoPlaca(time: string, range: string[]): boolean {
  if (time >= range[0] && time <= range[1]) {
    return true;
  } else {
    return false;
  }
}

function generateResponse(plateCode: string, time: string): string {
  return `Vehicle with license plate [${plateCode}] ending in [${getLastDigitOfLicensePlate(
    plateCode
  )}] CANNOT circulate at [${time}].`;
}
