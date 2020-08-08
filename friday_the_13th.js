function fridayThe13ths(year) {
  const MONTHS_IN_A_YEAR = 12;
  let date = new Date;
  let friday13Count = 0;
  date.setFullYear(year);
  for (let i = 0; i < MONTHS_IN_A_YEAR; i++) {
    date.setMonth(i, 13);
    let weekDay = date.toDateString().split(' ')[0];
    if (weekDay === 'Fri') {
      friday13Count++;
    }
  }

  return friday13Count;
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2
