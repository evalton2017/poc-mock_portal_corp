import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Perfil } from "./perfil.model";

@Entity("user")
export class User{

    @PrimaryColumn()
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({length:200})
    nome?: string;

    @Column({length:200})
    password?: string;

    @Column()
    email?: string;

    @Column({nullable: true})
    cpf?: string;

    @OneToMany(type => Perfil, perfis => perfis.user,{cascade:true})
    perfis?: Perfil[];

}