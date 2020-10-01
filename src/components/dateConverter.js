const convertDate = (date) => {
  // example input: 2020-08-02T00:00:00.000Z
  const months = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  };
  const timeless = date.split('T');
  // example timeless: [ '2020-08-02', '00:00:00.000Z' ]
  const dashless = timeless[0].split('-');
  // example dashless: [ '2020', '08', '02' ]
  const result = `${months[dashless[1]]} ${dashless[2][0] === '0' ? dashless[2][1] : dashless[2]}, ${dashless[0]}`;
  // example result: August 2, 2020
  return result;
};

export default convertDate;
