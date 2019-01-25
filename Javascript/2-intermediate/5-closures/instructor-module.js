/** 
 * Creating a small module. A module is a piece of code that is encapsulated 
 * and can be reused quite easily. The pattern used to write the following code 
 * is famously called the module pattern! It's a great way to wrap everything 
 * in an IIFE that contains private data that can not be accessed globally. 
 */

// use IIFEs style
// We don't want to call createInstructor everytime  
var instructorModule = (function createInstructors(){
    var instructors = ["Elie", "Matt", "Tim"];
    return {
        showInstructors: function displayAllInstructors(){
            return instructors;
        },
        addInstructor: function addNewInstructor(instructor){
            instructors.push(instructor)
            return instructors;
        }
    }
})();

var instructorModuleRefactored = (function createInstructors(){
    var instructors = ["Elie", "Matt", "Tim"];
    function displayAllInstructors(){
        return instructors;
    }
    function addNewInstructor(instructor){
        instructors.push(instructor);
        return instructors;
    }
    return {
        showInstructors: displayAllInstructors,
        addInstructor: addNewInstructor
    }
})();