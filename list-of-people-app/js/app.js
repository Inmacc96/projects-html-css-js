const people = [
    new Person('Juan','Pérez'),
    new Person('Carla', 'Lara'),
    new Person('Maria', 'García')
];

function displayPeople(){
    let fullnames = '';
    for(let person of people){
        fullnames += `<li>${person.name1} ${person.lastname}</li>`
    }
    document.getElementById('people').innerHTML = fullnames;
}

function addPerson(){
    const form = document.forms['forma'];
    const name = form['name'];
    const lastname = form['lastname'];
    if(name.value != '' && lastname != ''){
        const person = new Person(name.value,lastname.value);
    people.push(person);
    displayPeople();
    }
    else{
        alert('No information to add')
    }
    
}

function removePerson(){
    if(people.length != 0){
    people.pop();
    displayPeople();
    }
    else{
        alert('No persons on the list')
    }
}