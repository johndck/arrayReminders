# Reminder of javascript Array methods

## This simple file keeps a list of commonly used methods on arrays - this is just reference materials to help jog my memory.

# Revisit this daily until it sticks

Topics

## array.foreach(callback function());

This does not return a new array.

It just loops through the array and applies the callback function to each element. It does not return a value or change the original array.

Also note that the foreach method can also be used on a nodelist object, even though it is not array.

A good example would be bringing back a bunch of listitems and being able to loop through to add a new class to the items.

## for of loop through an array

This is a modern way to loop over arrays and avoids the need to set index.

The for of loop goes through each item in the array and executes the code inside the block.

## map() through an array

This loops through the array and applies a call back function to each element. The output is a new array. Map() creates a new array.
