export class AppConstants {

    public static get baseServidor(): string {
        return "http://localhost:8081/"
    }

    public static get baseLogin(): string {
        return this.baseServidor + "login"
    }

    public static get baseRegister(): string {
        return this.baseServidor + "api/v1/user/register"
    }


}