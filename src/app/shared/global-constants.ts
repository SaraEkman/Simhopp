export class GlobalConstants {
  public static readonly API_URL = 'http://localhost:3000/api'
  public static readonly API_URL_AUTH = 'http://localhost:3000/api/auth'
  public static readonly API_URL_ADMIN = 'http://localhost:3000/api/admin'
  public static readonly API_URL_NEWS = 'http://localhost:3000/api/news'
  public static readonly API_URL_MEMBERS = 'http://localhost:3000/api/members'
  public static readonly API_URL_CONTACT = 'http://localhost:3000/api/contact'
  public static readonly API_URL_UPLOAD = 'http://localhost:3000/api/upload'
  public static readonly API_URL_UPLOADS = 'http://localhost:3000/api/uploads'
  public static readonly API_URL_UPLOADS_NEWS = 'http://localhost:3000/api/uploads/news'
  public static readonly API_URL_UPLOADS_MEMBERS = 'http://localhost:3000/api/uploads/members'
  public static readonly API_URL_UPLOADS_CONTACT = 'http://localhost:3000/api/uploads/contact'
  public static readonly API_URL_UPLOADS_ADMIN = 'http://localhost:3000/api/uploads/admin'
  public static readonly API_URL_UPLOADS_LOGO = 'http://localhost:3000/api/uploads/logo'
  public static readonly API_URL_UPLOADS_FAVICON = 'http://localhost:3000/api/uploads/favicon'
  public static readonly API_URL_UPLOADS_SLIDER = 'http://localhost:3000/api/uploads/slider'

  //Message
  public static readonly genericError: string = 'Something went wrong. Please try again later.';

  //Regex
  public static nameRegex: string = '^[a-zA-Z0-9 ]*';

  public static emailRegex: string = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';

  public static phoneRegex: string = '^[0-9]{10,10}$*';

  public static passwordRegex: string = '^[a-zA-Z0-9 ]*';

  public static addressRegex: string = '^[a-zA-Z0-9 ]*';

  //variable

  public static error: string = 'error';
}
