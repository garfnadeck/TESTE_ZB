import { Body, Controller, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { FormPost } from '../models/post.interface';
import { FormService } from '../services/form.service';

@Controller('form')
export class FormController {
    constructor(private formService: FormService){}
    @Post()
    create(@Body() post:FormPost): Observable<FormPost> {
        return this.formService.createPost(post)
    }
}
