import { Controller, Post, Body, Get, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('Users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('api/v1/user')
export class UserController {

    constructor(private readonly userService: UserService) { }
    @Post()
    @ApiOperation({ summary: "Crear un usuario" })
    create(@Body() userDto: UserDto) {
        return this.userService.create(userDto)
    }

    @Get()
    findAll() {
        return this.userService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(id)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() userDto: UserDto) {
        return this.userService.update(id, userDto)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.userService.delete(id)
    }
}
