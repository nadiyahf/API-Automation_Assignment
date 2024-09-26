import request from "supertest";
import { expect } from "chai";

const baseUrl = "https://kasirdemo.vercel.app";

describe("Create Request Login to Get Access Token for Authorization", () => {
    it("Positive - Login Success", async () => {
        const account = {
            "email": "aiynahijab@gmail.com",
            "password": "aiynahijab123@"
        }
        //send request
        const response = await request (baseUrl)
            .post("/login") //endpoint
            .send(account) //request body
        
        expect((await response).status).to.equal(201)
        console.log((await response).body)
    })
})