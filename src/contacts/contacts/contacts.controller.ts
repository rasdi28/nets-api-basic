import { Body, Controller, Delete, Get, Param, Post, Put, Res, UsePipes } from '@nestjs/common';
import { ApiHeader, ApiOkResponse, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { response } from 'express';
import { identity } from 'rxjs';
import { Contact } from '../contact.entity';
import { Resp } from '../resp.entity';
import { ContactsService } from './contacts.service';

@ApiTags('contacts')
@Controller('contacts')
export class ContactsController {

    constructor(private contactsService:ContactsService){}

    @Get()
    index():Promise<Contact[]>{
        return this.contactsService.findAll();
    }

    @Post()
    @ApiResponse({
        status:201,
        description:'Success' 
    })
    async create(@Body() contactData:Contact):Promise<any> {
        return this.contactsService.create(contactData);
    }

    @Put('/update/:id')
    @ApiParam({name:'id'})
    async update(@Param('id') id, @Body() contactData:Contact):Promise<any> {
        contactData.id = Number(id);
        console.log('Update #' +contactData.id)
        return this.contactsService.update(contactData);
    }

    
    @Delete('/delete/:id')
    @ApiParam({name:'id'})
    // @ApiResponse({status:201,description:'OK'})
    @ApiOkResponse({type:Resp})
    async delete(@Param('id') id) : Promise<any>{
        return this.contactsService.delete(id);
    }



}
