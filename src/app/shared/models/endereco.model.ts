export class Endereco {
 constructor(
    public id?: number,
    public rua?: string,
    public numero: number = 0,
    public bairro?: string,
    public cidade?: string,
    public estado?: string,
    public cep?: string,
    public complemento?: string,
    public residencial?: boolean
 ){}
}
