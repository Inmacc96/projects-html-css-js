class Person{
    constructor(name1,lastname){
        this._name = name1;
        this._lastname = lastname;
    }

    get name1(){
        return this._name;
    }
    set name1(name1){
        this._name = name1;
    }
    get lastname(){
        return this._lastname;
    }
    set lastname(lastname){
        return this._lastname = lastname;
    }
}