import request from "supertest";
import { initServer } from "../src/server";


describe('Test /play endpoint', () => {
    let server: any;

    beforeEach(() => {
        server = initServer();
    });

    afterEach(() => {
        server.close();
    });

    it('basic validation test', async () => {
        const response = await request(server)
            .post('/play')
            .send({
                player: 0,
                xpos: 1,
                ypos: 2
            });
        if (response.error) {
            console.log('Response Error:', response.error);
        }
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello World!');
    });
});