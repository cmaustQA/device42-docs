import { mount } from '@cypress/react';
import Footer from "../../src/components/footer/index.js";
import React from 'react';

/**
 * This test suite is for the Footer component.
 */
describe('Footer Component', () => {
    /**
     * Before each test, the Footer component is mounted.
     */
    beforeEach(() => {
        mount(<Footer />);
    });

    /**
     * Test case to check if the Footer component renders without crashing.
     */
    it('renders without crashing', () => {
        cy.get('footer').should('exist');
    });

    /**
     * Test case to check if the Footer component renders the correct number of social links.
     */
    it('renders the correct number of social links', () => {
        cy.get('a').filter((index, link) => {
            return link.href.includes('facebook.com') ||
                link.href.includes('twitter.com') ||
                link.href.includes('linkedin.com') ||
                link.href.includes('feedburner.com') ||
                link.href.includes('youtube.com') ||
                link.href.includes('github.com');
        }).should('have.length', 6);
    });

    /**
     * Test case to check if the Footer component renders the correct number of solutions.
     */
    it('renders the correct number of solutions', () => {
        cy.get('ul').eq(0).find('li').should('have.length', 14);
    });

    /**
     * Test case to check if the Footer component renders the correct number of partners.
     */
    it('renders the correct number of partners', () => {
        cy.get('ul').eq(1).find('li').should('have.length', 2);
    });

    /**
     * Test case to check if the Footer component renders the correct number of quick navigation items.
     */
    it('renders the correct number of quick navigation items', () => {
        cy.get('ul').eq(2).find('li').should('have.length', 7);
    });

    /**
     * Test case to check if the Footer component renders the correct number of compare items.
     */
    it('renders the correct number of compare items', () => {
        cy.get('ul').eq(3).find('li').should('have.length', 10);
    });

    /**
     * Test case to check if the Footer component renders the correct address and contact information.
     */
    it('renders the correct address and contact information', () => {
        cy.contains('600 Saw Mill Road').should('exist');
        cy.contains('West Haven, CT 06516').should('exist');
        cy.contains('1 (844) 424-2422').should('exist');
        cy.contains('1 (203) 409-7242').should('exist');
        cy.contains('info@device42.com').should('exist');
    });
});