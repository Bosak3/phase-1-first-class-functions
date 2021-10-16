// function Monday() {
//     console.log('Go for a five-mile run');
//     console.log('Pump iron');
// }

// function Tuesday(){
//     console.log('Go for a fvie-mile run');
//     console.log('Swim 40 laps');
// }

// function Wednesday(){
//     console.log('Go for a fvie-mile run');
//     console.log('Go for a fvie-mile run');
// }

// function Thursday(){
//     console.log('Go for a fvie-mile run');
//     console.log('Pump iron');
// }

// function Friday(){
//     console.log('Go for a fvie-mile run');
//     console.log('Swim 40 laps');
// }

//The above method is tedous, we can use a function to refactor the code.

// function runFiveMiles() {
//     console.log('Go for a five-mile run');
// }

// function liftWeights() {
//     console.log('Pump iron');
// }

// function swimFortyLaps() {
//     console.log('Swim 40 laps');
// }

// function Monday () {
//     runFiveMiles();
//     liftWeights();
// }

//The code above slims down the a little bit more, we can take it even further
//by creating a function that takes the second workout (after our run) activity as a variable.

//Refactored Monday function

// function Monday(){
//     exerciseRoutine(liftWeights);
// }

// function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
// }

//making the above code more concise by refactoring (shortening syntax by Arrow Function in this case)

// exerciseRoutine(() => {
//     console.log('Stretch! Work that core!');
// });

//Even shorter Arrow function syntax

// exerciseRoutine(() => console.log('Stretch! Work that core!'));

// function morningRoutine(exercise) {
//     let breakfast;

//     if( exercise === liftWeights) {
//         breakfast = 'protein bar';
//     } else if (exercise === swimFortyLaps) {
//         breakfast = 'kale smoothie';
//     } else {
//         breakfast = 'granola';
//     }
// exerciseRoutine(exercise);

// return function () {
//     console.log(`Nom nom nom, this ${breakfast} is delicious!`);
// };

// }

// const afterExercise = morningRoutine(liftWeights);

// afterExercise();

// Function Declaration syntax

// function receivesAFunction(Spy){
//     return Spy();
// }

//Arrow syntax
receivesAFunction = Spy => Spy();

function returnsANamedFunction(){
    return function namedFn () {};
    
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log("My anonymous function");
    }
}

