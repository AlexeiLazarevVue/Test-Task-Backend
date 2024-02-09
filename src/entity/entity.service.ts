import { Injectable} from '@nestjs/common';
import {baseApi} from "../axios.interceptors";
import {CreateEntityDto} from "./dto/entity.dto";

@Injectable()
export class EntityService {
    async getEntity(request: any, type: string, id: number) {
        return await baseApi(request.baseDomain, request.token).get(`${type}/${id}`)
    }

    async createEntity(request: any, type: string, dto: CreateEntityDto) {
        return await baseApi(request.baseDomain, request.token).post(type, dto)
    }
}
