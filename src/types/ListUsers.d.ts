


 interface Usuario{
    nome:string,
    email:string,
    password:string,
    administrador:string,
    _id:string
}

export interface ListUsers{
    quantidade:number,
    usuarios:Usuario[]
}