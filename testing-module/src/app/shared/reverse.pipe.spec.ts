import { ReversePipe } from './revsere.pipe';

describe('Reverse pipe', () => {
    it('should reverse a string', () => {
        let reversePipe = new ReversePipe();
        expect(reversePipe.transform('hello')).toEqual('olleh');
    });
});


