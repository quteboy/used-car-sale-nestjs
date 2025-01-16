import { Controller, Post, Body } from '@nestjs/common';
import { createUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}

  //post
  @Post('/signup')
  createUser(@Body() body: createUserDto) {
    this.userService.create(body.email, body.password);
    console.log(body);
  }
}
