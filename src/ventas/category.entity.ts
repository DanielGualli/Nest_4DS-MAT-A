import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, 
    DeleteDateColumn, Entity, PrimaryGeneratedColumn, 
    UpdateDateColumn } from "typeorm";

@Entity('categorys',{schema:'ventas'})
export class CategoryEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    // creamos
    @CreateDateColumn({
        name:'create_at',
        type:'timestamp',
        default: ()=>'CURRENT_TIMESTAMP',
    })
    createAt:Date;
    // Actualizar
    @UpdateDateColumn({
        name:'update_at',
        type:'timestamp',
        default: ()=>'CURRENT_TIMESTAMP',
    })
    updateAt:Date;
    // elimación
    @DeleteDateColumn({
        name:'delete_at',
        type:'timestamp',
        nullable:true,
    })
    deleteAt:Date;
    @Column('varchar',{
        name:'name',
        nullable:false,
        comment: 'category name'
    })
    name:string;
    @Column('varchar',{
        name:'description',
        nullable:false,
        comment:'category description'
    })
    description:string;
@BeforeInsert()
@BeforeUpdate()
// upperCase el un metodo, si el campo es nulo me retorne cualcuiel valor pero si no es nullo que lo convierta en mayuscula
// setTitle para tranformar el titulo en maysculas
async setDescription(){
    if(!this.description){
        return;
    }
    this.name = this.description.toString();
}
}