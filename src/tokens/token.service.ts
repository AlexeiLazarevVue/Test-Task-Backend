import { Injectable} from '@nestjs/common';
import {genesisApi} from "../axios.interceptors";

@Injectable()
export class TokenService {
    async getToken() {
        return await genesisApi.get('')
    }
}
