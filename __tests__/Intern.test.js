
const { test, expect } = require("@jest/globals");
const Intern = require("../lib/intern");

// check functions in lib/intern

test("Constructor funtion sets school", () => {
    const testValue = "UConn";
    const e = new Intern("Bob", 1, "Bob@gmail.com", testValue, "Intern");
    expect(e.school).toBe(testValue);
});

test("getRole() function should return 'Intern'", () => {
    const testValue = "Intern";
    const e = new Intern("Bob", 1, "Bob@gmail.com", "UConn", "Intern");
    expect(e.getRole()).toBe(testValue);
});

test("getSchool() function should return school", () => {
    const testValue = "UConn";
    const e = new Intern("Bob", 1, "Bob@gmail.com", testValue, "Intern");
    expect(e.getSchool()).toBe(testValue);
});