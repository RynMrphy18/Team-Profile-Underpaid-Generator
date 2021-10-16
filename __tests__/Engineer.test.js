const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/engineer");

// check functions in lib/engineer.js

test("Constructor function sets GitHub account", () => {
    const testValue = "github";
    const e = new Engineer("Bob", 1, "Bob@gmail.com", testValue, "Engineer");
    expect(e.github).toBe(testValue);
});

test("getRole() function should return 'Engineer'", () => {
    const testValue = "Engineer";
    const e = new Engineer("Bob", 1, "Bob@gmail.com", "github", "Engineer");
    expect(e.getRole()).toBe(testValue);
});

test("getGithub() should return github username", () => {
    const testValue = "github";
    const e = new Engineer("Bob", 1, "Bob@gmail.com", testValue, "Enigneer");
    expect(e.getGithub()).toBe(testValue);
});