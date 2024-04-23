class User {
    email: string;
    nombres: string;
    apellidos: string;
    telefono: string;
    password: string;
    edad: number;
    ciudad: string;
    pais: string;
    documento:string;
    constructor(
        email: string, nombres: string,
        apellidos: string, telefono: string,
        password: string, edad:number, ciudad: string,
        pais: string, documento: string
    ) {
        this.email = email;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.password = password;
        this.edad = edad;
        this.ciudad = ciudad;
        this.pais = pais;
        this.documento = documento;
    }
}

export default User;