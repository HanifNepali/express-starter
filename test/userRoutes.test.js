const request = require("supertest");
const assert = require("assert");
const app = require("../server");

describe("GET /api/users", () => {
    it("responds with JSON containing a list of users", (done) => {
        request(app)
            .get("/api/users")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/) // Expecting response to be in JSON format
            .expect(200) // Expecting the response status code to be 200
            .end((err, res) => {
                if (err) return done(err);
                assert(Array.isArray(res.body));
                done();
            });
    });
});

describe("GET /api/users/:userId", () => {
    it("should retrieve user details for a valid user ID", (done) => {
        const validUserId = 1;
        request(app)
            .get(`/api/users/${validUserId}`)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                const user = res.body;
                assert.ok(
                    user.hasOwnProperty("id"),
                    'User should have an "id" property'
                );
                assert.ok(
                    user.hasOwnProperty("firstName"),
                    'User should have an "firstName" property'
                );
                assert.ok(
                    user.hasOwnProperty("lastName"),
                    'User should have an "lastName" property'
                );

                done();
            });
    });
});

describe("GET /api/users/:userId", () => {
    it("should return 404 for non-existent user ID", (done) => {
        const invalidUserId = 10000;
        request(app).get(`/api/users/${invalidUserId}`).expect(404, done);
    });
});
