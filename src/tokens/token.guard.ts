import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Request} from "express";


@Injectable()
export class TokenGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        let request = context.switchToHttp().getRequest()
        let { token , baseDomain} = this.parseAuthorizationInfo(request)

        if (!token)
            return false
        console.log('fdfdfdfdfdfdf')

        request.token = token
        request.baseDomain = baseDomain

        return true
    }

    private parseAuthorizationInfo(request: Request) {
        let [baseDomain, token] = request.headers.authorization.split(' ') ?? []

        return {
            token,
            baseDomain
        }
    }
}