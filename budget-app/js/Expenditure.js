class Expenditure extends Data{
    static counterExpenditure = 0;

    constructor(description,value){
        super(description,value);
        this._id = ++Expenditure.counterExpenditure;
    }

    get id(){
        return this._id;
    }
}
