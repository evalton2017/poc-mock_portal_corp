import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.model";

@Entity("perfil")
export class Perfil{

    @PrimaryGeneratedColumn()
    id?:number;

    @Column()
    nome?: string;

    @ManyToOne(type => User, user=> user.perfis)
    user?: User;
}
