export class GlobalConstants {
//URL
  public static url: string = 'http://localhost:3000'
  // public static url: string = 'https://simhopp-backend.vercel.app'

  //Message
  public static genericError: string =
    'Något gick fel, försök igen senare.'

  public static unauthorized: string = 'Du är inte behörig att besöka denna sida.'

  //Regex
  public static nameRegex: string = '^[a-zA-ZÅÄÖåäö0-9 ]*'

  public static emailRegex: string =
    '^[a-zA-ZÅÄÖåäö0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-ZÅÄÖåäö0-9-]+(?:.[a-zA-ZÅÄÖåäö0-9-]+)*$'

  public static phoneRegex: string = '^[0-9]{10,10}$*'

  public static passwordRegex: string = '^[a-zA-ZÅÄÖåäö0-9 ]*'

  public static addressRegex: string = '^[a-zA-Z0-9 ]*'

  //variable
  public static error: string = 'error'

  public static user: number = 0

  public static admin: number = 1
}
