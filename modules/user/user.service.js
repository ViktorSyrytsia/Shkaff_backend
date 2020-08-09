import { AuthenticationError, UserInputError } from 'apollo-server';
import bcrypt from 'bcrypt';

import {User} from '../../models';
import generateToken from "../../utils/createToken";

class UserService {
    getUsers() {
        return User.find();
    }

    getUser(id) {
        return this.getUserByFieldOrThrow('_id', id);
    }

    registerUser(data) {
        const user = new User(data);
        return user.save();
    }

    async getUserByFieldOrThrow(key, param) {
        const checkedUser = await User.findOne({
            [key]: param,
        });

        if (!checkedUser) {
            const USER_WITH_KEY_NOT_FOUND = `User with provided ${[key]} not found`;
            throw new UserInputError(USER_WITH_KEY_NOT_FOUND, {
                errors: {
                    [key]: USER_WITH_KEY_NOT_FOUND,
                },
            });
        }

        return checkedUser;
    }

    async loginUser({email, password}) {
        const user = await this.getUserByFieldOrThrow('email', email)

        if (user.role === 'user') {
            throw new AuthenticationError(`No access!`);
        }

        const match = await bcrypt.compare(
            password,
            user.password,
        );

        if (!match || !user) {
            throw new Error(`Wrong email or password!`);
        }

        const token = await generateToken(user._id, user.email);

        return {
            name: user.name,
            id: user._id,
            role: user.role,
            token,
        };
    }

 /*   async updateUser({id, email, password}) {
        let hashedPass;
        await generatePasswordHash(password)
            .then(hash => hashedPass = String(hash))
            .catch(err => console.log(err));

        return User.findOneAndUpdate(
            {_id: id},
            {email: email, password: password},
            {returnOriginal: false}
        );
    }*/

    deleteUser(id) {
        return User.findByIdAndRemove(id)
    }
}

export default new UserService();
