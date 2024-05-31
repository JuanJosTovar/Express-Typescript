import db from '../config/config-db';
import Auth from '../Dto/AuthDto';
import User from '../Dto/UserDto';

class UserRepository {

    static async add(user: User){
        const sql = 'INSERT INTO usuarios (email, nombres, apellidos, telefono, password, edad, ciudad, pais, documento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [user.email, user.nombres, user.apellidos, user.telefono, user.password, user.edad, user.ciudad, user.pais, user.documento];
        return db.execute(sql, values);
    }

    static async login(auth: Auth){
        const sql = 'SELECT password FROM usuarios WHERE email=?';
        const values = [auth.email];
        return db.execute(sql,values)
    }
    
}


export default UserRepository;