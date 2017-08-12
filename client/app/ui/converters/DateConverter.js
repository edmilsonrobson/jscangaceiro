class DateConverter {

  constructor() {
    throw new Error('This class should not be instantiated');
  }

  static dateToString(date) {
    return `${date.getDate()}/${date.getMonth()+1})/${date.getFullYear()}`;
  }

  static stringToDate(string) {
    if(!  /^\d{4}-\d{2}-\d{2}$/.test(string)) {
      throw new Error('String given is not in the format yyyy-mm-dd');
    }
    return new Date(...string.split('-').map((item, index) => item - index % 2));
  }

}
