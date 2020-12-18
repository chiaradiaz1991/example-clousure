# Variable Scope

### Global Scope

Any variable declared outside of a function belongs to the global scope and is accessible from anywhere in the code.

### local Scope

Any variable declared whithin a function is only accessible from that function and any nested functions.

## Clousure - Javascript

A function that has access to private variables.

Is a feature where an inner function has access to the outer function's variables.
A closure has three scope chains (every function has a set of variables that it can access, all the references to these variables are store in a stack):

- variables defined within the curly braces
- access to the variables of outer functions
- has access to all the global variables

