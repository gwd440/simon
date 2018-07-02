describe("main3", function() {
    describe("Build Colour Array function", function() {
        it("should build an array containing 20 numbers from 1 to 4", function() {
            var numArray = [ ];         // holds the numbers corresponding to the shape elements
            var i;
            for (i = 1; i <= 20; i++) {
                numArray.push(Math.floor(Math.random() * 4 + 1));
            }
//            expect(numArray).toContain(5);  fail test
            expect(numArray).toContain(1);  
            expect(numArray).toContain(2);  
            expect(numArray).toContain(3);  
            expect(numArray).toContain(4);  
            
        });

    });
});
    