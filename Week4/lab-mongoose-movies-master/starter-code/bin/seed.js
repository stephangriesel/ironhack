// A model is a class with which we construct documents. In this case, each document will be a kitten with properties and behaviors as declared in our schema. Let's create a kitten document representing the little guy we just met on the sidewalk outside:

// var silence = new Kitten({ name: 'Silence' });
// console.log(silence.name); // 'Silence'

var newCeleb = {
    name: "Daffy", 
    occupation: "Bleh", 
    catchPhrase: "What what what"
}
Celebrity.create(newCeleb, (err)=> {
})