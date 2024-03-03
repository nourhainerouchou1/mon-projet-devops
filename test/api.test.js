const request = require('supertest');
const app = require('../app');

describe('API Tests', () => {
    it('should return hello message', async () => { 
        const { expect } = await import('chai');
        const response = await request(app).get('/api/hello');
        expect(response.status).to.equal(200); 
        expect(response.body.message).to.equal('Hello, world!'); 
    });
});
