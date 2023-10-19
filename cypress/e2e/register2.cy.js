describe('Register test', () => {
    context('Register', () => {
        beforeEach(() => {
            cy.visit('http://localhost:3000/signup')
        })

        it('should have link to go /signin inside the form', () => {
            cy.get('h2').contains('Inscription')
            cy.get('a[href="/signin"]').contains('Déjà un compte ?').click()
            // setTimeout(() => {
                    cy.wait(400)
            //     cy.url().should('eq', 'http://localhost:3000/signin')
            // }, 400);
        })

        it('should input username is correctly filled', () => {
            cy.get('input[name="username"]').type('123')
            cy.get('div')
                .contains('Entre 4 et 24 caractères')
                .contains('Doit commencer par une lettre.')
                .contains('Doit comporter au moins une lettre et aucun caractère spécial.')
                .should('exist')
            cy.get('input[name="email"]').type('admin@admin.com')
            cy.get('input[name="tel"]').type('0401020304')
            cy.get('input[name="password"]').type('Admin12!')
            cy.get('input[name="confirmPassword"]').type('Admin12!')
            cy.get('input[name="username"].is-invalid').should('exist')
            cy.get('button[type="submit"]').should('have.attr', 'disabled')
        })

        it('should input email is correctly filled', ()=> {
            cy.get('input[name="username"]').type('123admin')
            cy.get('input[name="email"]').type('admin')
            cy.get('div')
                .contains("L'adresse mail doit avoir le bon format.").should('exist')
            cy.get('input[name="tel"]').type('0401020304')
            cy.get('input[name="password"]').type('Admin12!')
            cy.get('input[name="confirmPassword"]').type('Admin12!')
            cy.get('input[name="email"].is-invalid').should('exist')
            cy.get('button[type="submit"]').should('have.attr','disabled')
        })

        it('should input telephone is correctly filled', ()=> {
            cy.get('input[name="username"]').type('123admin')
            cy.get('input[name="email"]').type('admin@admin.com')
            cy.get('input[name="tel"]').type('0401')
            cy.get('div')
                .contains('le numero de téléphone doit avoir le bon format.')
                .should('exist')
            cy.get('input[name="password"]').type('Admin12!')
            cy.get('input[name="confirmPassword"]').type('Admin12!')
            cy.get('input[name="tel"].is-invalid').should('exist')
            cy.get('button[type="submit"]').should('have.attr','disabled')
        })

        it('should input password is correctly filled', ()=> {
            cy.get('input[name="username"]').type('123admin')
            cy.get('input[name="email"]').type('admin@admin.com')
            cy.get('input[name="tel"]').type('0401020304')
            cy.get('input[name="password"]').type('admin12!')
            cy.get('div')
            .contains('le mot de passe doit contenir au moins 8 caractères.')
            .contains('le mot de passe doit comporter au moins 1 lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.')
            .should('exist')
            cy.get('input[name="confirmPassword"]').type('Admin12!')
            cy.get('input[name="password"].is-invalid').should('exist')
            cy.get('button[type="submit"]').should('have.attr','disabled')
        })

        it('should input confirmPassword is correctly filled', ()=> {
            cy.get('input[name="username"]').type('123admin')
            cy.get('input[name="email"]').type('admin@admin.com')
            cy.get('input[name="tel"]').type('0401020304')
            cy.get('input[name="password"]').type('admin12!')
            cy.get('input[name="confirmPassword"]').type('Admin12!')
            cy.get('div')
            .contains('les mot de passe doivent correspondre.')
            .should('exist')
            cy.get('input[name="confirmPassword"].is-invalid').should('exist')
            cy.get('button[type="submit"]').should('have.attr','disabled')
        })

        it('should successfully register', ()=>{
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="email"]').type('admin@admin.com')
        cy.get('input[name="tel"]').type('0401020304')
        cy.get('input[name="password"]').type('Admin12!')
        cy.get('input[name="confirmPassword"]').type('Admin12!')
        cy.get('button[type="submit"]').eq(0).click()
        cy.url().should('eq', 'http://localhost:3000/account')
      })
    })
})