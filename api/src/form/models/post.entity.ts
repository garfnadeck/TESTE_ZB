import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('form_post')
export class FormPostEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ default: ''})
    name: string;

    @Column({ default: ''})
    email: string;
    
    @Column({ default: ''})
    message: string;

    @Column({type: 'timestamp', default:()=>'CURRENT_TIMESTAMP'})
    createdAt: Date;
}