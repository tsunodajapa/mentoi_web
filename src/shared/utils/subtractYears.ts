export default function subtractYears(
  numberOfYearToSubtract: number,
  dateToSubtract = new Date(),
): Date {
  dateToSubtract.setFullYear(
    dateToSubtract.getFullYear() - numberOfYearToSubtract,
  );

  return dateToSubtract;
}
