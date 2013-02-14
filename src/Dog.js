define(function() {
    var Dog = function(name, breed) {
        this.name   = name;
        this.breed  = breed;
    };

    Dog.prototype.bark = function() {
        return 'WOOF!';
    };

    Dog.prototype.growl = function() {
        return 'grumble grumble grrrrrumble...';
    };

    return Dog;
});