import {test, expect} from '../fixtures/base-fixtures';

test.describe('API Tests: User Operations', () => {

    let createdUserId: number;

    test('POST /user should create a user and return user_id', async ({userApi}) => {

        const newUser = {
            username: `TestUser_${Date.now()}`,
            age: 25,
            user_type: true
        };

        const response = await userApi.createUser(newUser);

        expect([200, 201]).toContain(response.status());

        const body = await response.json();

        expect(body).toHaveProperty('user_id');
        expect(body).toHaveProperty('username', newUser.username);

        expect(typeof body.user_id).toBe('number');

        createdUserId = body.user_id;
    });

    test('GET /user should return valid user details', async ({userApi}) => {
        expect(createdUserId).toBeDefined();

        const response = await userApi.getUser(createdUserId);
        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body).toHaveProperty('username');
        expect(body).toHaveProperty('age');
        expect(body).toHaveProperty('user_id', createdUserId);

        expect(typeof body.username).toBe('string');
        expect(typeof body.age).toBe('number');

        expect(body.age).toBeGreaterThanOrEqual(1);
        expect(body.age).toBeLessThanOrEqual(100);
    });
});
