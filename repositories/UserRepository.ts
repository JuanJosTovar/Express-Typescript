import db from '../config/config-db';
import User from '../Dto/UserDto';

class UserRepository {

    static async add(user: User){
        const sql = 'INSERT INTO users2 (email, nombres, apellidos, telefono, password, edad, ciudad, pais, documento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [user.email, user.nombres, user.apellidos, user.telefono, user.password, user.edad, user.ciudad, user.pais, user.documento];
        return db.execute(sql, values);
    }

    static async login(email : string){
        const sql = 'SELECT password FROM users2 WHERE email=?';
        const values = [email];
        return db.execute(sql,values)
    }
}


export default UserRepository;