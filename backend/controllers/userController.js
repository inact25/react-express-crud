import {generateJson} from "../utils/formater.js";
import {
    userCreateUsecases, userDeleteUseCases,
    userGetByIdUseCases,
    userGetUseCases,
    userUpdateUseCases
} from "../usecases/userUseCases.js";


export const getAllUsers = async (req, res) => {
    try {
        const users = await userGetUseCases(req.body)
        generateJson(res, users, "Get All Users Data")
    } catch (error) {
        generateJson(res, [], error.message)
    }
}

export const getUserById = async (req, res) => {
    try {
        const users = await userGetByIdUseCases(req)
        generateJson(res, users[0], "Get User Data")
    } catch (error) {
        generateJson(res, [], error.message)
    }
}

export const createUser = async (req, res) => {
    try {
        await userCreateUsecases(req)
        generateJson(res, null, "User Created")
    } catch (error) {
        generateJson(res, null, error.message)
    }
}

export const updateUser = async (req, res) => {
    try {
        await userUpdateUseCases(req)
        generateJson(res, null, "User Updated")
    } catch (error) {
        generateJson(res, null, error.message)
    }
}

export const deleteUser = async (req, res) => {
    try {
        await userDeleteUseCases(req)
        generateJson(res, null, "User Deleted")
    } catch (error) {
        generateJson(res, null, error.message)
    }
}
