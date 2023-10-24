import { 
    BeforeInsert, 
    BeforeUpdate, 
    Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn,
 } from "typeorm";

@Entity('rol',{schema:'ventas'})
export class RolEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @CreateDateColumn({
        name:'update_at',
        type:'timestamp',
        default: ()=>'CURRENT_TIMESTAMP',
    })
    createAt:Date;
    @UpdateDateColumn({
        name: 'update_at',
        type:'timestamp',
        default:()=>'CURRENT_TIMESTAMP',
    })
    updateAt:Date;
    @DeleteDateColumn({
        name:'delete_at',
        type:'timestamp',
        nullable:true,
    })
    deleteAt:Date;
    @Column('varchar',{ 
        name:'title',
        nullable:false,
        comment:'rol price',
    })
    title:string;
@Column('number',{
    name:'price',
    nullable:false,
    comment:'rol price'
})
price:number;
@Column('varchar',{
    name:'description',
    nullable:true,
    comment:'rol description'
})
description:string;
@Column('varchar',{
    name:'image',
    nullable:false,
    comment:'rol image'
})
image:string;
@BeforeInsert()
@BeforeUpdate()
async setTitle(){
    if(!this.title){
        return;
    }
    this.title = this.title.toUpperCase();
}
@BeforeInsert()
@BeforeUpdate()
async setDescription(){
    if(!this.description){
        return;
    }
    this.description = this.description.toLowerCase();
}

}