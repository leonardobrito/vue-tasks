/// <reference types='cypress' />

context('Delete TaskList', () => {
  beforeEach(() => {
    cy.login('registered_user1', '111');
    cy.wait(1000);
  });

  describe('When user click delete', () => {
    it('delete TaskList ', () => {
      const name = `name delete TaskList${Date.now()}`;
      cy.createTaskGroupList(name);
      cy.wait(2000);
      // click to delete taskgroup
      cy.get('li').last().contains('Delete').click();

      cy.wait(2000);

      cy.get('li').should("not.contain", name);
    });
  });
});
