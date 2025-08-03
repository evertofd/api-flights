import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from "@nestjs/jwt"
import { UserDto } from 'src/user/dto/user.dto';
@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private readonly jwtService: JwtService) { }
    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findByUsername(username);
        if (!user) return null;

        const isValidPassword = await this.userService.checkPassword(password, user.password)
        if (isValidPassword && user) {
            return user
        }
        return null
    }

    async signIn(user: any) {
        const payload = {
            username: user.username,
            sub: user._id,
        }
        return { access_token: this.jwtService.sign(payload) }
    }

    async singUp(userDto: UserDto) {
        return this.userService.create(userDto)
    }
}
