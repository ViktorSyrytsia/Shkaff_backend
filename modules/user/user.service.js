import bcrypt from 'bcrypt';

import {User} from '../../models';
import generatePasswordHash from "../../utils/generatePasswordHash";

class UserService {
    getUsers() {
        return User.find();
    }

    getUserById(id) {
        return User.findById(id);
    }

    registerUser(data) {
        const user = new User(data);
        return user.save();
    }

    async loginUser({email, password}) {
        const user = await User.findOne({email: email});

        const match = await bcrypt.compare(
            password,
            user.password,
        );

        if (match) {
            console.log('GREAT!')
            return {
                status: 'success'
            }
        } else {
            console.log('WTF!')
        }
    }

    async updateUser({id, email, password}) {
        let hashedPass;
        await generatePasswordHash(password)
            .then(hash => hashedPass = String(hash))
            .catch(err => console.log(err));

        return User.findOneAndUpdate(
            {_id: id},
            {email: email, password: password},
            {returnOriginal: false}
        );
    }

    deleteUser(id) {
        return User.findByIdAndRemove(id)
    }
}

export default new UserService();
