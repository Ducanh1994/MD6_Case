import {User} from "../enitity/user"
import {AppDataSource} from "../data-source";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import {SECRET} from "../middleware/auth";

class UserService {
    private userRepository;

    constructor() {
        this.userRepository
    }
}