const { test, expect } = require("@jest/globals");
const Employee = require("../lib/employee");
const Manager = require("../lib/manager");

// check functions in lib/manager

test("Constructor argument sets office number", () => {
    const testValue = 201;
    const e = new Manager("Bob", 1, "Bob@gmail.com", testValue, "Manager");
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return 'manager'", () => {
    const testValue = "Manager";
    const e = new Manager("Bob", 1, "Bob@gmail.com", 201, "Manager");
    expect(e.getRole()).toBe(testValue);
});

test("getOffice() should return office number", () => {
    const testValue = 201;
    const e = new Manager("Bob", 1, "Bob@gmail.com", testValue, "Manager");
    expect(e.getOfficeNumber()).toBe(testValue);
});