import { productDocData, solutionGuideData } from "../../src/components/data/dummy-data.js";

/**
 * This test suite is for the dummy data used in the application.
 */
describe('Dummy Data', () => {
    /**
     * Test case to check if the productDocData array has the correct length.
     */
    it('productDocData has the correct length', () => {
        expect(productDocData.length).to.equal(8);
    });

    /**
     * Test case to check if the solutionGuideData array has the correct length.
     */
    it('solutionGuideData has the correct length', () => {
        expect(solutionGuideData.length).to.equal(2);
    });

    /**
     * Test case to check if each item in the productDocData array is an object.
     */
    it('each item in productDocData is an object', () => {
        productDocData.forEach(item => {
            expect(item).to.be.an('object');
        });
    });

    /**
     * Test case to check if each item in the solutionGuideData array is an object.
     */
    it('each item in solutionGuideData is an object', () => {
        solutionGuideData.forEach(item => {
            expect(item).to.be.an('object');
        });
    });

    /**
     * Test case to check if each object in the productDocData array has the required properties.
     */
    it('each object in productDocData has required properties', () => {
        productDocData.forEach(item => {
            expect(item).to.have.all.keys('title', 'icon', 'whiteIcon', 'link');
        });
    });

    /**
     * Test case to check if each object in the solutionGuideData array has the required properties.
     */
    it('each object in solutionGuideData has required properties', () => {
        solutionGuideData.forEach(item => {
            expect(item).to.have.all.keys('title', 'icon', 'whiteIcon', 'link');
        });
    });
});