import React from 'react';
import { mount } from '@cypress/react';
import styles from '../../src/components/icon/icon.module.css';
import Icon from '../../src/components/icon/index.js';

describe('Icon Component', () => {
    it('renders without crashing', () => {
        mount(<Icon fa="fas fa-home" />);
        cy.get(`.${styles.iconStyle}`).should('exist');
    });

    it('renders with correct icon', () => {
        mount(<Icon fa="fas fa-home" />);
        cy.get(`.${styles.iconStyle}`, ).should('exist');
    });

    it('renders with correct size', () => {
        mount(<Icon fa="fas fa-home" sz="2x" />);
        cy.get(`.${styles.iconStyle}`, ).should('exist');
    });

    it('renders with correct class name', () => {
        mount(<Icon fa="fas fa-home" cn="customClassName" />);
        cy.get('.customClassName').should('exist');
    });
});


