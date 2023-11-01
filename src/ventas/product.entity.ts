import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, 
    DeleteDateColumn, Entity, PrimaryGeneratedColumn, 
    UpdateDateColumn } from "typeorm";
// declaramos un entidado tabla
@Entity('products',{schema:'ventas'})
// creamos la clase
export class ProductEntity{
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

    // creamos las columnas del producto
    @Column('varchar',{
        name:'title',
        nullable:false,
        comment: 'product title'
    })
    title:string;
    @Column('numeric',{
        name:'price',
        nullable:false,
        comment:'product price'
    })
    price:number;
    @Column('varchar',{
        name:'description',
        nullable:true,
        comment:'product description'
    })
    description:string;
    @Column('varchar',{
        name:'image',
        nullable:false,
        comment:'product image'
    })
    image:string;
@BeforeInsert()
@BeforeUpdate()
// upperCase el un metodo, si el campo es nulo me retorne cualcuiel valor pero si no es nullo que lo convierta en mayuscula
// setTitle para tranformar el titulo en maysculas
async setTitle(){
    if(!this.title){
        return;
    }
    this.title = this.title.toUpperCase();
}

// este es para tranformar todo en minusculas lowerCase
async setDescription(){
    if(!this.description){
        return;
    }
    this.title = this.description.toLowerCase();
}
/*
    @BeforeInsert()
@BeforeUpdate()
// upperCase el un metodo, si el campo es nulo me retorne cualcuiel valor pero si no es nullo que lo convierta en mayuscula
// setTitle para tranformar el titulo en maysculas
async setEmail(){
    if(!this.email){
        return;
    }
    this.title = this.email.toLowerCase().trim();
}
    */
   contraseña
// @BeforeInsert()
// @BeforeUpdate()
// async hashPassword(){
//     if(!this.password){
//         return;
//     }
//     this.password = Bcrypt.hashPassword(this.password,)
    
// }
}