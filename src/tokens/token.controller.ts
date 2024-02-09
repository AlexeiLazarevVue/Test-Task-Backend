import { Controller, Get } from '@nestjs/common';
import {TokenService} from "./token.service";

@Controller('/auth')
export class TokenController {
    constructor(
        private tokenService: TokenService
    ) {}
    @Get('/token')
    async getToken() {
        const message = await this.tokenService.getToken()

        return message.data
    }
}
