import request from "supertest";
import { expect } from "chai";

const baseUrl = "https://kasirdemo.vercel.app";

describe("Create Request Registration", () => {
    it("Positive - Store Registration Success", async () => {
        const store = {
            "name": "AiynaHijab",
            "email": "ainahijab@gmail.com",
            "password": "aiynahijab123@"
        }
        //send request
        const response = await request (baseUrl)
            .post("/register") //endpoint
            .send("store") //request body
            
        
        expect((await response).status).to.equal(201)
        console.log((await response).body)

    })
})