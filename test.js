import request from 'supertest';
import app from "./index.js";

var id = "";

describe('User test', function() 
{
    describe('POST /user', function() {
        it("user created", function(done) {
            request(app)
            .post('/user')
            .send({
                firstname: 'John',
                name: 'John',
                email: 'john@example.com'
            }).expect(201, done);
        });
    });

    describe("GET /users", function() {
        it("user get", function(done) {
            request(app)
            .get('/users')
        .expect(200, done);
        });
    });

})