import request from "supertest";
import { expect } from "chai";
import { assert } from "chai";

const baseUrl = "https://kasirdemo.vercel.app";

describe("Create User kasirAJa", () =>{
    it('Positive - Success Create User', async () =>{
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFiODRkODBlLTllZWEtNGIwNy1hNGMzLTIzNDcxYWY1OGRiZiIsImNvbXBhbnlJZCI6IjAyNDgzMmM5LTAzYWItNGU1Zi1iNjU1LTBiNzA1ZWVjMDE4MiIsImlhdCI6MTcwODg3MzcwNH0.HBU3NIWeoDZzaBCKb4xiuPGb--hW31ZK3WvbcMBA7aM"
    const cashier1 = {
        "name": "Ananta",
        "email": "ananta@gmail.com",
        "password": "ananta123"
    }
    //send request
    const response = await request (baseUrl)
        .post("/users") //endpoint
        .send(cashier1) //request body
        .set('Authorization',`bearer ${token}`)
    
        expect((await response).status).to.equal(405)
        assert.isNotNull(response, "Response is not null")
        console.log((await response).body)
    })
})