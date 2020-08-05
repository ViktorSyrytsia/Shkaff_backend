import userService from './user.service';

const userQuery = {
    getUsers: () => userService.getUsers(),
    getUserById: (parent, args) => userService.getUserById(args.id),
};

const userMutation = {
    registerUser: (parent, args) => userService.registerUser(args.user),
    loginUser: (parent, args) => userService.loginUser(args.user),
    deleteUser: (parent, args) => userService.deleteUser(args.id),
    updateUser: (parent, args) => userService.updateUser(args),
};

export {userQuery, userMutation};
