/// <reference types="cypress" />

context('Login', () => {
  const baseUrl = "http://localhost:8080/";

  beforeEach(() => {
    localStorage.clear();
    cy.visit('/')
    cy.get('input').clear();
  })

  it('inputs should be enabled', () => {
    cy.get('input').should('be.enabled')
  });

  describe("When use wrong credentials", () => {
    const invalidUsername = "invalid username";
    const invalidPassword = "invalid password";

    it("login fails and does not redirect to task list", () => {
      // fill username
      cy.get("input[type=text]")
        .type(invalidUsername)
        .should("have.value", invalidUsername);
      // // fill password
      cy.get("input[type=password]")
        .type(invalidPassword)
        .should("have.value", invalidPassword);
      // // click login
      cy.get("button").click();
      // // check url location
      cy.url().then((currentUrl) =>
        expect(currentUrl).to.equal(baseUrl)
      );
    });
  });

  describe("When use correct credentials", () => {
    const userName = "registered_user1";
    const password = "111";

    it("login works and redirect to homepage", () => {
      // fill username
      cy.get("input[type=text]")
        .type(userName)
        .should("have.value", userName);

      // fill password
      cy.get("input[type=password]")
        .type(password)
        .should("have.value", password);

      // click login
      cy.get("button").click();

      // wait login request
      cy.wait(1000);

      cy.url().then((currentUrl) =>
        expect(currentUrl).to.equal(`${baseUrl}taskgroup/list`)
      );
    });
  });
});
