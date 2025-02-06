describe("My first test", () => {
  it("Does not do much", () => {
    expect(true).to.equal(true);
  });
});
describe("Second test", () => {
  it("Visit kitchen sinks", () => {
    cy.visit("https://example.cypress.io");
  });
});
describe("Third test", () => {
  it("Find the content 'type'", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type");
  });
});
describe("Fourth test", () => {
  it("Click the link 'type'", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
  });
});
