import {Controller, Get, Param, UseGuards, Request, Post, Body} from '@nestjs/common';
import {EntityService} from "./entity.service";
import {CreateEntityDto} from "./dto/entity.dto";
import {TokenGuard} from "../tokens/token.guard";

@Controller('api')
export class EntityController {
    constructor(
        private entityService: EntityService
    ) {}
    @UseGuards(TokenGuard)
    @Get('/entity/:type/:id')
    async getEntity(@Param('id') id, @Param('type') type, @Request() request) {
        const entity = await this.entityService.getEntity(request, type, id)

        return entity.data
    }

    @UseGuards(TokenGuard)
    @Post('/entity/:type')
    async createEntity(@Body() createEntityDto: CreateEntityDto, @Param('type') type, @Request() request) {
        const entity = await this.entityService.createEntity(request, type, createEntityDto)

        return entity.data
    }
}
