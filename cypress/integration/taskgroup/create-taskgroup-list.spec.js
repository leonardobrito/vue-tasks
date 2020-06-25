/// <reference types='cypress' />

context('Create TaskList', () => {
  const baseUrl = "http://localhost:8080/";
  const date = Date.now();
  const name = `name ${date}`;
  const description = `description ${date}`;

  beforeEach(() => {
    cy.login('registered_user1', '111');
  });

  describe('When data is valid', () => {
    it('creates TaskList ', () => {
      // click to open create task dialog
      cy.contains('New Taskgroup').click();
      // // check url location
      cy.url().then((currentUrl) =>
        expect(currentUrl).to.equal(`${baseUrl}taskgroup/new`)
      );

      // fill data
      cy.get("input[name='name']").type(name);
      cy.get("input[name='description']").type(description);
      cy.get("select").select('daily');

      // submit tasklist
      cy.contains('Save').click();
      // check if task was added to list
      cy.get('li').should('contain', name);
    });
  });

  describe("When data is invalid (frequencetype not selected)", () => {
    it("does not create TaskList ", () => {
      const errorName = "errorName";
      const errorDescription = "errorDescription";

      // click to open create task dialog
      cy.contains('New Taskgroup').click();
      // fill data
      cy.get("input[name='name']").type(errorName);
      cy.get("input[name='description']").type(errorDescription);

      // submit tasklist
      cy.contains('Save').click();

      // check if task was added to list
      cy.get('li').should("not.contain", errorName);
    });
  });
});
