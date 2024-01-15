/**
 * This test suite is for the home page of the application.
 * It is by no means a complete test suite, but it is a good starting point.
 */
describe('Page title test', () => {
    /**
     * Test case to check if the home page has the correct title.
     */
    it('should have the correct title', () => {
        // Visit the home page
        cy.visit('http://localhost:3000');

        // Assert that the title of the page is "The Hitchhiker’s Guide to DEVICE42 | Device42"
        cy.title().should('eq', 'The Hitchhiker’s Guide to DEVICE42 | Device42');
    });
});

/**
 * This test suite is for the product documentation pages of the application.
 */
describe('Product Documentation Test', () => {
    // Array of links to test
    const links = [
        { href: '/getstarted/', title: 'The Hitchhiker\'s Guide to Device42 | Device42' },
        { href: '/auto-discovery/', title: 'Autodiscovery | Device42' },
        { href: '/apps/', title: 'Applications | Device42' },
        { href: '/infrastructure-management/', title: 'Infrastructure | Device42' },
        { href: '/reports/', title: 'Reports | Device42' },
        { href: '/integration/', title: 'External Integrations and Migrations | Device42' },
        { href: '/administration/', title: 'Administration | Device42' },
        { href: '/how-to-videos/', title: 'How-to Videos | Device42' },
    ];

    // For each link in the array, a test case is created
    links.forEach((link, index) => {
        /**
         * Test case to check if navigation to a specific page works correctly and the page has the correct title.
         */
        it(`navigates to ${link.href} and verifies title`, () => {
            // Visit the home page
            cy.visit('http://localhost:3000');

            // Click on the link to navigate to the specific page
            // There are two links with the same href (/getstarted/), so the second link is clicked if the index is 0
            if (index === 0) {
                cy.get(`a[href="${link.href}"]`).eq(1).click();
            } else {
                cy.get(`a[href="${link.href}"]`).click();
            }

            // Assert that the title of the page is correct
            cy.title().should('eq', link.title);
        });
    });
});