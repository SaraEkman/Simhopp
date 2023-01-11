export class User {
  id: number;
  userName: string;
  userEmail: string;
  password: string;

  constructor( userName: string, userEmail: string, password: string) {
    this.id = Number();
    this.userName = userName;
    this.userEmail = userEmail;
    this.password = password;
  }
}
