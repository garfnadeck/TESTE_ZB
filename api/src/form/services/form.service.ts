import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable } from 'rxjs/internal/Observable';
import { from } from 'rxjs/internal/observable/from';
import { Repository } from 'typeorm';

import { FormPostEntity } from '../models/post.entity';
import { FormPost } from '../models/post.interface';

@Injectable()
export class FormService {
    constructor(
        @InjectRepository(FormPostEntity)
        private readonly formPostRepository: Repository<FormPostEntity>
    ){}
    createPost(formPost: FormPost): Observable<FormPost> {
        return from(this. formPostRepository.save(formPost));
    }
}
