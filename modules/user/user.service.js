import {User} from '../../models';

import generatePasswordHash from "../../utils/generatePasswordHash";

class UserService {
    getUsers() {
        return User.find();
    }

    getUserById(id) {
        return User.findById(id);
    }

    createUser(data) {
        const user = new User(data);
        return user.save();
    }

    updateUser({id, email, password}) {
        return (async function fn () {
            let hashedPass;
            await generatePasswordHash(password)
                .then(hash => hashedPass = String(hash))
                .catch(err => console.log(err));

            return User.findOneAndUpdate(
                {_id: id},
                {email: email, password: password},
                {returnOriginal: false}
            );
        })()
    }

    deleteUser(id) {
        return User.findByIdAndRemove(id)
    }
}

export default new UserService();
