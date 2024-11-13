const mapWithCb = require('./ex2_tema6');

describe('mapWithCb', () => {
    it('throws an error if first argument is not an array', () => {
        expect(() => mapWithCb(1983, () => {})).toThrow(Error);
        expect(() => mapWithCb("string", () => {})).toThrow(Error);
        expect(() => mapWithCb(null, () => {})).toThrow(Error);
    });
    
    it('throws an error if second argument is not a function', () => {
        expect(() => mapWithCb([20, 1, 1983], [20, 1, 1983])).toThrow(Error);
        expect(() => mapWithCb([20, 1, 1983], 1983)).toThrow(Error);
        expect(() => mapWithCb([20, 1, 1983], null)).toThrow(Error);
    });
 
    it('calls the given function at least once', () => {
    const array = [20, 1, 1983];
    const callback = jest.fn();
    mapWithCb(array, callback);
    expect(callback).toHaveBeenCalled();
    });

    it('calls the given function a number of times equal to the length of the given array', () => {
    const array = [20, 1, 1983];
    const callback = jest.fn();
    mapWithCb(array, callback);
    expect(callback).toHaveBeenCalledTimes(array.length); 
    });
    
    it('calls the given function with any one item from the given array', () => {
    const array = [20, 1, 1983];
    const callback = jest.fn();
    mapWithCb(array, callback);
    expect(callback).toHaveBeenCalledWith(expect.any(Number));
    });

    it('calls the given function a second time with the second item in the given array', () => {
    const array = [20, 1, 1983];
    const callback = jest.fn();
    mapWithCb(array, callback);
    expect(callback).toHaveBeenCalledTimes(3);
    expect(callback).toHaveBeenNthCalledWith(2, array[1]);
    });

    it('calls the given function a final time with the final item in the given array', () => {
    const array = [20, 1, 1983];
    const callback = jest.fn();
    mapWithCb(array, callback);
    expect(callback).toHaveBeenLastCalledWith(array[2]);
    });
});
