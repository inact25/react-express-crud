import User from "../models/userModel.js";

const userGetUseCases = (request) => {
    return User.findAll();
}

const userGetByIdUseCases = (request) => {
    return User.findAll({
        where: {
            id: request.params.id
        }
    });
}

const userCreateUsecases = (request) => {
    return User.create(request.body);
}

const userUpdateUseCases = (request) => {
    return User.update(request.body, {
        where: {
            id: request.params.id
        }
    });
}
const userDeleteUseCases = (request) => {
    return User.destroy({
        where: {
            id: request.params.id
        }
    });
}

export {
    userGetUseCases,
    userGetByIdUseCases,
    userCreateUsecases,
    userUpdateUseCases,
    userDeleteUseCases
}
