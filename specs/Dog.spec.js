describe('Dog', [ 'Dog' ],  function() {

    describe('.growl', function() {

        it('growls', function(Dog) {
            expect(new Dog('Roxy', 'Border Collie').growl()).toEqual('grumble grumble grrrrrumble...');
        });

    });

    describe('.bark', function() {

        it('barks', function(Dog) {
            expect(new Dog('Lucy', 'Terrier').bark()).toEqual('WOOF!');
        });

    });

});