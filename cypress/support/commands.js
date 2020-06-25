Cypress.Commands.add("login", (username, password) => {
  cy.visit("/");
  cy.get("input[type=text]").clear();
  cy.get("input[type=text]").type(username);
  cy.get("input[type=password]").clear();
  cy.get("input[type=password]").type(password);
  cy.get("button").click();
});

Cypress.Commands.add("createTaskGroupList", (name) => {
  cy.contains('New Taskgroup').click();
  cy.get("input[name='name']").type(name);
  cy.get("input[name='description']").type(`description ${name}`);
  cy.get("select").select('daily');
  cy.contains('Save').click();
});
