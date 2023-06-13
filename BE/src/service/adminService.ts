import {User} from "../entity/user";
import {AppDataSource} from "../data-source";
import bcrypt from 'bcrypt'

class AdminService {
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    checkUser = async (user) => {
        let findName = await this.userRepository.find({
            where: [
                {
                    username: user.username
                },
                {
                    name: user.name
                }
            ]
        })
        return findName;
    }

    createUser = async (user) => {
        return this.userRepository.save(user);
    }
}

export default new AdminService();

