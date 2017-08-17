class InvalidDateException extends ApplicationException {
  constructor() {
    super('Date given is not in the format yyyy/mm/dd')

    this.name = this.constructor.name;
  }
}
