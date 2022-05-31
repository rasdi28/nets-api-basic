import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import {EmployeeService} from './employee.service';
import {Employee} from './employee.entity';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('employee')
@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService){}
 
    @Get('all')
    async getAll():Promise<Employee[]>{
        return await this.employeeService.findAll();
    }

    @Post('add')
    @HttpCode(201)
    createEmployee(@Body() newEmployee:any) {
        this.employeeService.create(newEmployee);
    }

    @Put('update')
    @HttpCode(200)
    updateEmployee(@Body() employeeToupdate:any){
        this.employeeService.update(employeeToupdate);
    }

    @Delete('delete/:id')
    @HttpCode(200)
    deleteEmployee(@Param('id') id){
        this.employeeService.delete(id);
    }
}