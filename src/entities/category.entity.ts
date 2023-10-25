import { BeforeInsert,BeforeUpdate,Column,CreateDateColumn,UpdateDateColumn,DeleteDateColumn,Entity, 
    PrimaryGeneratedColumn } from "typeorm";

@Entity('categorys',{schema:'ventas'})
export class CategoryEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @CreateDateColumn({
        name:'create_at',
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
        comment:'category title',
    })
    title:string;
    @Column('number',{
        name:'price',
        nullable:false,
        comment:'category price'
    })
    price:number;
    @Column('varchar',{
        name:'description',
        nullable:true,
        comment:'category description'
    })
    description:string;
    @Column('varchar',{
        name:'image',
        nullable:false,
        comment:'category image'
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
    