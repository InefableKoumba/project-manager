import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import {hash} from "bcryptjs"
import validator from "validator"
import {Response} from "express"

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ){}

  async create(res : Response, createUserDto : CreateUserDto) : Promise<Response> {
    const {email,password,username} = createUserDto;
    // Validate the inputs
    // If any error is found, the function will stop by returning
    // An array containing errors' descriptions
    try {
      this.validateInput(res,username,email,password)
      // 
      await this.checkEmailAndUsername(res,email,username);
      // 
      const user = new User();
      // user.id = uuid();
      user.email = email;
      // Hash the password before saving it
      user.password = await hash(password,7);
      user.username = username;
      
      const createdUser = await this.userRepository.save(user)
      return res.status(201).json(createdUser)

    } catch (error) {
      return res.status(500).json(error.message)
    }
    
  }

  findAll() : Promise<User[]> {
    try {
      return this.userRepository.find();
    } catch (error) {
      throw new Error(error)
    }
    
  }

  async findOne(res: Response,id: string) : Promise<Response>{
    try {
      const user = await this.userRepository.findOne(id);
      if(!user) return res.status(404).json({error: "User not found"})
      return res.status(200).json(user)
    } catch (error) {
      throw new Error(error)
    }
    
  }

  async update(res : Response, id: string, updateUserDto: UpdateUserDto) : Promise<Response> {
    try {
      const {email,password,username, isAdmin} = updateUserDto;

      const user = await this.userRepository.findOne(id);
      if(!user) return res.status(404).json({error: "User not found"})
      user.email = email;
      user.password = password;
      user.isAdmin = isAdmin;
      user.username = username;

      const updatedUser = this.userRepository.save(user);
      return res.status(201).json(updatedUser);

    } catch (err) {
      throw new Error(err);
    }
  }

  async remove(res : Response, id : string) : Promise<Response> {
    try {
      const user = await this.userRepository.findOne(id);
      if(!user) return res.status(404).json({error: "User not found"})
      await this.userRepository.remove(user)
      return res.status(200).json(user)
    } catch (error) {
      throw new Error(error)
    }
  }

  validateInput(res: Response, username: string,email:string, password:string) : Response{
    /*
      This function will make sure that the user has entered
      valide data
    */
    const errors : string[] = [];

    if(!validator.isLength(password,{
      min:6, max:20
    })){
      errors.push(
        "The password must contains at least 6 caracters")
    }
    if(!validator.isEmail(email)){
      errors.push("Incorrect email adress")
    }
    // if(!validator.isBoolean(isAdmin)){
    //   errors.push("The property isAdmin must be a boolean")
    // }
    if(errors.length>0) return res.status(400).json({errors:errors});
  }
  async checkEmailAndUsername(res: Response,email: string, username: string) : Promise<Response>{
    try {
      const userByEmail = await this.userRepository.findOne({email: email});
      const userByUsername = await this.userRepository.findOne({username:username});
      const errors : string[] = []; 
      if(userByUsername) errors.push("Username already taken")
      if(userByEmail) errors.push("Email address already taken")
      if(userByEmail || userByUsername) return res.status(401).json({errors:errors})
    } catch (error) {
      return res.status(501).json(error)
    }
    
  }
}
