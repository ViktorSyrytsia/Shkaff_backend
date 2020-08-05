import userService from './user.service';

const userQuery = {
    getUsers: () => userService.getUsers(),
    getUserById: (parent, args) => userService.getUserById(args.id),
};

const userMutation = {
    createUser: (parent, args) => userService.createUser(args),
    deleteUser: (parent, args) => userService.deleteUser(args.id),
    updateUser: (parent, args) => userService.updateUser(args),
};

export {userQuery, userMutation};
