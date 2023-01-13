export class GlobalConstants {
  //Message
  public static readonly genericError: string =
    'Something went wrong. Please try again later.'

  //Regex
  public static nameRegex: string = '^[a-zA-ZÅÄÖåäö0-9 ]*'

  public static emailRegex: string =
    '^[a-zA-ZÅÄÖåäö0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-ZÅÄÖåäö0-9-]+(?:.[a-zA-ZÅÄÖåäö0-9-]+)*$'

  public static phoneRegex: string = '^[0-9]{10,10}$*'

  public static passwordRegex: string = '^[a-zA-ZÅÄÖåäö0-9 ]*'

  public static addressRegex: string = '^[a-zA-Z0-9 ]*'

  //variable
  public static error: string = 'error'
}
