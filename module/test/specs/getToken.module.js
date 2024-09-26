import request from "supertest";
import { expect } from "chai";
import { createToken } from "../function/createToken.spec.js";

const baseUrl = "https://kasirdemo.vercel.app";

describe("Get Token Scenario", () => {
    let token;
    it("Positive - Success Get Token", async () =>{
        const payload = {
            "username" : "aiynahijab@gmail.com",
            "password" : "aiynahijab123@"
        }
        //send request
        const response = await request (baseUrl)
            .post("/auth") //endpoint
            .send(payload)  //request body
            .set("Content-Type","application/json")       //header

            expect((await response).status).to.equal(200)
            token = (await response).body.token
            //console.log(await token)
    
        })
    
        it("Import token", async () => {
            const token = await createToken()
            console.log(await token)
        })
    
    })