
const { expect, test } = require("@jest/globals");
const Employee = require("../lib/employee");

// check if info is inputted correctly
test ("Inputted info is correct", () => {
    const info = new Employee("Bob", "3", "bob@aol.com", "engineer");
    expect(info.name).toBe("Bob");
    expect(info.id).toBe("3");
    expect(info.email).toBe("bob@aol.com");
    expect(info.title).toBe("engineer");

});

// check constructor functions

test("Constructor argument can set name", () => {
    const name = "Ryan";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Constructor argument can set id", () => {
    const testValue = 1;
    const e = new Employee("Ryan", testValue);
    expect(e.id).toBe(testValue);
});

test("Constructor argument can set email", () => {
    const testValue = "Ryan@aol.com";
    const e = new Employee("Ryan", 1, testValue);
    expect(e.email).toBe(testValue);
});

// check get functions

test("getName() function should return name", () => {
    const testValue = "Ryan";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("getId() should return Id", () => {
    const testValue = 1;
    const e = new Employee("Ryan", testValue);
    expect(e.getId()).toBe(testValue);
});

test("getEmail() should return email", () => {
    const testValue = "Ryan@aol.com";
    const e = new Employee("Ryan", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});