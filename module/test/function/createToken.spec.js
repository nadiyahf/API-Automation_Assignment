import request from "supertest";
import { baseUrl } from "../../data/config.js";

export async function createToken(){
    const payload = {
        "username" : "aiynahijab@gmail.com",
        "password" : "aiynahijab123@"
    }
    //send request
    const response = await request (baseUrl)
        .post("/auth") //endpoint
        .send(payload)  //request body
        .set("Content-Type","application/json")       //header

    const token = (await response).body.token
    return token
}