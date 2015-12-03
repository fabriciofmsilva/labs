describe("Constraint", function() {

  describe('String Length Constraints', function() {

    var string;

    beforeEach(function() {
      string = 'hello';
    });

    it("should return true when string is less or equal than 3 and greater than or equal 8.", function() {
      expect(constraintStringLength(string, 3, 8)).toBe(true);
    });

    it("should return true when string is less or equal than 3.", function() {
      expect(constraintStringLength(string, 3, null)).toBe(true);
    });

    it("should return true when string is greater than or equal 8.", function() {
      expect(constraintStringLength(string, null, 8)).toBe(true);
    });

    it("should throw an error when first argument (value) not be passed.", function() {
      expect(constraintStringLength.bind()).toThrow();
      expect(constraintStringLength.bind()).toThrowError(ReferenceError);
    });

    it("should throw an error when first argument (value) is not a string.", function() {
      expect(constraintStringLength.bind(1, 0, 10)).toThrow();
      expect(constraintStringLength.bind(1, 0, 10)).toThrowError(TypeError);
    });

    it("should throw an error when second param (minimum) is not a number.", function() {
      expect(constraintStringLength.bind(string, '3', 8)).toThrow();
      expect(constraintStringLength.bind(string, '3', 8)).toThrowError(TypeError);
    });

    it("should throw an error when third param (maximum) is not a number.", function() {
      expect(constraintStringLength.bind(string, 3, '8')).toThrow();
      expect(constraintStringLength.bind(string, 3, '8')).toThrowError(TypeError);
    });

  });

});
