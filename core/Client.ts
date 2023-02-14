export default class Client {
    #id: number
    #name: string
    #age: number

    constructor(nome: string, age: number, id: number = 0){
        this.#name = nome 
        this.#age = age
        this.#id = id
    }

    static vazio(){
        return new Client('', 0, )
    }

    get id() {
        return this.#id
    }

    get name() {
        return this.#name
    }
    get age() {
        return this.#age
    }
}