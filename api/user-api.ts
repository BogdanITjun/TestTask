import {APIRequestContext, APIResponse} from '@playwright/test';

export interface UserPayload {
    username: string;
    age: number;
    user_type: boolean;
}

export class UserApi {
    private readonly baseUrl = 'https://paydo.com/api/';

    constructor(readonly request: APIRequestContext) {
    }

    async getUser(userId: number): Promise<APIResponse> {
        return await this.request.get(`${this.baseUrl}/user/${userId}`);
    }

    async createUser(payload: UserPayload): Promise<APIResponse> {
        return await this.request.post(`${this.baseUrl}/user`, {
            data: payload,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}