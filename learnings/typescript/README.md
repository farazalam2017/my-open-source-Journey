## About typescript

### Quick notes

- TypeScript is a superset of JavaScript that adds optional static typing and other features to improve the development.
- It is designed to help catch errors early and improve code maintainability.
- TypeScript is not a replacement for JavaScript, but rather a way to enhance it.
- tsc compiler is used for traspiling ts code into js code.

### Execution of ts code

Mainly carried in these steps:-

1. **Writing ts code**:
2. **ts compiler(tsc)**:
3. **compilation process**:
4. **generated js code**:
5. **js execution**:
6. **runtime environment**:
7. **interaction with DOM**:

### Setting up a ts nodejs application

1. **tsc --version**: to check ts version
2. **npm install -g typescript**:- to install typescript globally
3. **mkdir node-app**

   **cd node-app**

   **npm init -y**

   **npx tsc --init**

4. **change "rootDir" to "./src" and "outDir" to "./dist" in configuration file**
5. **make src and write .ts file**
6. **after writing code "tsc -b" to compile file to js**

### Basic types in js

- **Number**: 1, 2, 3.4, etc.
- **string**: "hello", 'hello', etc.
- **boolean**: true, false
- **array**: [1, 2, 3], ["a", "b", ]
- **object**: {name: "John", age: 30}, etc.
- **null**: null
- **undefined**: undefined
- **symbol**: Symbol("hello")
- **any**: any type, can be anything
- **void**: no return value
- **never**: no return value, used for functions that never return

### Interface

- **interface**: used to define the structure of an object, it allows you to specify the expected properties, their types, and whether they are optional or required.

### Types

type are same as interface but they are more versatile support operation like union(|), intersection(&) , conditional types etc.

### Arrays

- **array**: a collection of values, can be of any type, can be empty or have values.

### Enum

- **enum**: a set of named values, can be used to represent a set of constants.

### Generic

- **generic**: a type that can work with any type, can be used to create reusable functions

### Advance typescript API's

1. **Pick**: allows to construct new types by selecting a subset of properties from a existing type. This is particularly useful when we need to work with only certain field of complex type, enhancing code readability and maintainability.
2. **Partial**:used to create a new type by making all properties of an existing type optional
3. **readonly**:once object of this type is created, its properties cannot be reassigned or changed.It's particularly useful for defining configuration objects, constants, or any other data structure that should not be modified after initialization.
4. **Record **:
5. ****:
6. ****:
7. ****:
8. ****:
9. ****:
10. ****:
11. ****:
