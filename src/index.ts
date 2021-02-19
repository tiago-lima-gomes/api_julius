import "reflect-metadata";
import {createConnection} from "typeorm";
import {Usuario} from "./entity/Usuario";

createConnection().then(async connection => {

    console.log("Inserting a new Usuario into the database...");
    const User = new Usuario();
    User.nome = "Tiago";
    User.email = "tiago.lima@tcsindustrial.com";
    await connection.manager.save(User);
    console.log("Saved a new User with id: " + User.id);

    console.log("Loading Users from the database...");
    const Users = await connection.manager.find(Usuario);
    console.log("Loaded Users: ",User);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
