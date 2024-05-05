class User {
    _email: string;
    _nombres: string;
    _apellidos: string;
    _telefono: string;
    _password: string;
    _edad: number;
    _ciudad: string;
    _pais: string;
    _documento:string;
    constructor(
        email: string, nombres: string,
        apellidos: string, telefono: string,
        password: string, edad:number, ciudad: string,
        pais: string, documento: string
    ) {
        this._email = email;
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._telefono = telefono;
        this._password = password;
        this._edad = edad;
        this._ciudad = ciudad;
        this._pais = pais;
        this._documento = documento;
    }
        //Getters
        get email(): string{
            return this._email
        }
    
        get nombres(): string{
            return this._nombres
        }
    
        get apellidos(): string{
            return this._apellidos
        }
    
        get telefono(): string{
            return this._telefono
        }
        get password(): string{
            return this._password
        }
        get edad(): number{
            return this._edad
        }
    
        get ciudad(): string{
            return this._ciudad
        }

        get pais(): string{
            return this._pais
        }

        get documento(): string{
            return this._documento
        }
    
        //Setters
        set email(email:string){
            this._email = email
        }
    
        set nombres(nombres:string){
            this._nombres = nombres
        }
    
        set apellidos(apellidos:string){
            this._apellidos = apellidos
        }
    
        set telefono(telefono:string){
            this._telefono = telefono
        }
    
        set password(password:string){
            this._password = password
        }
    
        set edad(edad:number){
            this._edad = edad
        }
    
        set ciudad(ciudad:string){
            this._ciudad = ciudad
        }

        set pais(pais:string){
            this._pais = pais
        }

        set documento(documento:string){
            this._documento = documento
        }
        
}

export default User;