import { mount } from '@cypress/react';
import ContentCard from "../../src/components/card/index.js";
import React from 'react';

/**
 * This test suite is for the ContentCard component.
 */
describe('ContentCard', () => {
    /**
     * Test case to check if the ContentCard component renders without crashing.
     */
    it('renders without crashing', () => {
        mount(<ContentCard />);
    });

    // Test props for the ContentCard component
    const props = {
        title: "Test Title",
        icon: "Test Icon",
        whiteIcon: "Test White Icon",
        link: "/test-link",
    };

    /**
     * Test case to check if the ContentCard component renders the ThemedImage and p elements.
     */
    it('renders ThemedImage and p elements', () => {
        mount(<ContentCard {...props} />);
        cy.get('img').should('exist');
        cy.get('p').should('exist');
    });

    /**
     * Test case to check if the ContentCard component renders the correct title.
     */
    it('renders correct title', () => {
        mount(<ContentCard {...props} />);
        cy.get('p').should('contain', props.title);
    });

    /**
     * Test case to check if the ContentCard component renders the correct link.
     */
    it('renders correct link', () => {
        mount(<ContentCard {...props} />);
        cy.get('a').should('have.attr', 'href').and('equal', props.link);
    });
});