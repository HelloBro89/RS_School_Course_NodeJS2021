import { Controller, Get, Post, Delete, Param, Body, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const createdUser = await this.usersService.createUser(createUserDto);
    return User.toResponse(createdUser);
  };

  @Get()
  async getAll() {
    const allUsers = await this.usersService.getAll();
    return allUsers;
  };

  @Get(':id')
  async getById(@Param('id') id: string) {
    const userByID = await this.usersService.getById(id);
    return userByID;
  };

  @Put(':id')
  async updateUser(@Body() updateUserDto: UpdateUserDto, @Param('id') id: string) {
    const changedUser = await this.usersService.updateUser(id, updateUserDto);
    return changedUser;
  };

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {

    const deletedUser = await this.usersService.deleteUser(id);
    return deletedUser;
  };

}


