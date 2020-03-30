export default class UserCadastroDTO {
  login: string;
  password: string;
  email: string;
  steamID: string;
  constructor(login: string, password: string, email: string, steamID: string) {
    this.login = login;
    this.password = password;
    this.email = email;
    this.steamID = steamID;
  }
}
