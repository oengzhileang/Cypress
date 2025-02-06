describe("sign up", () => {
  // we include it in our beforeEach function so that it runs before each test
  beforeEach(() => {
    cy.visit("/signup");
  });

  //Test case sign up successfully
  it("Should sign up successfully with valid input", () => {
    cy.get('input[name="email"]').type("test@example.com");
    cy.get('input[name="password"]').type("Password@12345");
    cy.get('input[name="cfpassword"]').type("Password@12345");
    cy.get('button[type="submit"]').click();
  });

  //test case password mismatched
  it("Should show error for mismatched password", () => {
    cy.get('input[name="email"]').type("test@example.com");
    cy.get('input[name="password"]').type("Password@12345");
    cy.get('input[name="cfpassword"]').type("Password@54321");
    cy.get('button[type="submit"]').click();

    //verify error message
    cy.contains("Passwords do not match").should("be.visible");
  });

  //test case email invalid
  it("Should show error for invalid gmail", () => {
    cy.get('input[name="email"]').type("invalidemail");
    cy.get('input[name="password"]').type("Password@12345");
    cy.get('input[name="cfpassword"]').type("Password@12345");
    cy.get('button[type="submit"]').click();

    //verify error message
    cy.contains("Please enter a valid email").should("be.visible");
  });

  //test case empty field
  it("Should show error for empty field", () => {
    cy.get('button[type="submit"]').click();

    //verify error message for empty field
    cy.contains("Email is required").should("be.visible");
    cy.contains("Password is required").should("be.visible");
    cy.contains("Confirm password is required").should("be.visible");
  });
});
