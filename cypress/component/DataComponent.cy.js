import { productDocData, solutionGuideData } from "../../src/components/data/dummy-data.js";

describe('Dummy Data', () => {
    it('productDocData has the correct length', () => {
        expect(productDocData.length).to.equal(8);
    });

    it('solutionGuideData has the correct length', () => {
        expect(solutionGuideData.length).to.equal(2);
    });
    it('each item in productDocData is an object', () => {
        productDocData.forEach(item => {
            expect(item).to.be.an('object');
        });
    });

    it('each item in solutionGuideData is an object', () => {
        solutionGuideData.forEach(item => {
            expect(item).to.be.an('object');
        });
    });

    it('each object in productDocData has required properties', () => {
        productDocData.forEach(item => {
            expect(item).to.have.all.keys('title', 'icon', 'whiteIcon', 'link');
        });
    });

    it('each object in solutionGuideData has required properties', () => {
        solutionGuideData.forEach(item => {
            expect(item).to.have.all.keys('title', 'icon', 'whiteIcon', 'link');
        });
    });
});