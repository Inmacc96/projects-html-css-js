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