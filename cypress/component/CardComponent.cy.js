import { mount } from '@cypress/react';
import ContentCard from "../../src/components/card/index.js";
import React from 'react';

describe('ContentCard', () => {
    it('renders without crashing', () => {
        mount(<ContentCard />);
    });
    const props = {
        title: "Test Title",
        icon: "Test Icon",
        whiteIcon: "Test White Icon",
        link: "/test-link",
    };

    it('renders ThemedImage and p elements', () => {
        mount(<ContentCard {...props} />);
        cy.get('img').should('exist');
        cy.get('p').should('exist');
    });

    it('renders correct title', () => {
        mount(<ContentCard {...props} />);
        cy.get('p').should('contain', props.title);
    });

    it('renders correct link', () => {
        mount(<ContentCard {...props} />);
        cy.get('a').should('have.attr', 'href').and('equal', props.link);
    });
});