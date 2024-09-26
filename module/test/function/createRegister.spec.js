import request from "supertest";
import { baseUrl } from "../../data/config.js";

export async function createRegister(){
    const payload = {
        "name": "AiynaHijab",
        "email": "ainahijab@gmail.com",
        "password": "aiynahijab123@"
    }
    //send request
    const response = await request (baseUrl)
        .post("/register") //endpoint
        .send(payload)  //request body
        .set("Content-Type","application/json")       //header

    return (await response)
}