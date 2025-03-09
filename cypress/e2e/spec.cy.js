describe('Basic Gameplay Tests', () => {

  beforeEach(() => {
    // 1. Launch browser
    // 2. Navigate to url 'http://localhost:5173'
    cy.visit("http://localhost:5173");
})

  
  it('passes', () => {
    cy.visit('http://localhost:5173')
    cy.get('.game h1').should('have.text', 'Tic-Tac-Toe');
  })

  it('Player Moves', () => {
    cy.get('.square').each(($el, index) => {
    cy.wrap($el).click();
    cy.get('.reset').click();
    });
    
  })

  it('Turn Switching', () => {
    cy.get('.game h2').should('have.text', 'Next Player: X');
    cy.get('.square').eq(0).click();
    cy.get('.game h2').should('have.text', 'Next Player: O');
    cy.get('.square').eq(1).click();
    cy.get('.game h2').should('have.text', 'Next Player: X');
  })

  it('Prevent Overwriting Moves', () => {
    cy.get('.square').eq(0).click();
    cy.get('.square').eq(0).click();
    cy.get('.game h2').should('have.text', 'Next Player: O');
  })


})

describe('Winning Conditions', () => {

  beforeEach(() => {
    // 1. Launch browser
    // 2. Navigate to url 'http://localhost:5173'
    cy.visit("http://localhost:5173");
})

  it('Winning by Row', () => {
    cy.get('.square').eq(0).click(); //x
    cy.get('.square').eq(3).click(); //o
    cy.get('.square').eq(1).click(); //x
    cy.get('.square').eq(4).click(); //o
    cy.get('.square').eq(2).click(); //x
    cy.get('.game h2').should('have.text', 'Winner: X');

  })

  it('Winning by Column', () => {
    cy.get('.square').eq(0).click(); //x
    cy.get('.square').eq(1).click(); //o
    cy.get('.square').eq(3).click(); //x
    cy.get('.square').eq(4).click(); //o
    cy.get('.square').eq(6).click(); //x
    cy.get('.game h2').should('have.text', 'Winner: X');
  })

  it('Winning by Diagonal', () => {
    cy.get('.square').eq(0).click(); //x
    cy.get('.square').eq(6).click(); //o
    cy.get('.square').eq(4).click(); //x
    cy.get('.square').eq(7).click(); //o
    cy.get('.square').eq(8).click(); //x
    cy.get('.game h2').should('have.text', 'Winner: X');
  })

  it('Game Should Not Continue After Win', () => {
    cy.get('.square').eq(0).click(); //x
    cy.get('.square').eq(6).click(); //o
    cy.get('.square').eq(4).click(); //x
    cy.get('.square').eq(7).click(); //o
    cy.get('.square').eq(8).click(); //x
    cy.get('.game h2').should('have.text', 'Winner: X');
    cy.get('.square').eq(3).click();
    cy.get('.square').eq(3).should("not.contain", 'O');
  })

})

