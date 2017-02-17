angular.module("app").service("mainSrv", function(){
    this.animals = [
        {
            name: 'Cow',
            id: 1,
            sound: './animalSounds/cow.wav',
            image: './animalPics/cow.png'
        },
        {
            name: 'Seal',
            id: 2,
            sound: './animalSounds/seal.wav',
            image: './animalPics/seal.png'      
            },
            {
            name: 'Rooster',
            id: 3,
            sound: './animalSounds/rooster.wav',
            image: './animalPics/rooster.png'      
        },
        {
            name: 'Elephant',
            id: 4,
            sound: './animalSounds/elephant.wav',
            image: './animalPics/elephant.png'
        },
        {
            name: 'Dog',
            id: 5,
            sound: './animalSounds/dog.wav',
            image: './animalPics/dog.png'
        },
        {
            name: 'Pig',
            id: 6,
            sound: './animalSounds/pig.wav',
            image: './animalPics/pig.png'
        },
        {
            name: 'Monkey',
            id: 7,
            sound: './animalSounds/monkey.wav',
            image: './animalPics/monkey.png'
        },
        {
            name: 'Sheep',
            id: 8,
            sound: './animalSounds/sheep.wav',
            image: './animalPics/sheep.png'
        },
        {
            name: 'Cat',
            id: 9,
            sound: './animalSounds/cat.wav',
            image: './animalPics/cat.png'
        },
        {
            name: 'Mouse',
            id: 10,
            sound: './animalSounds/mouse.wav',
            image: './animalPics/mouse.png'
        },
        {
            name: 'Lion',
            id: 11,
            sound: './animalSounds/lion.wav',
            image: './animalPics/lion.png'
        },
        {
            name: 'Penguin',
            id: 12,
            sound: './animalSounds/penguin.wav',
            image: './animalPics/penguin.png'
        },
        {
            name: 'Zebra',
            id: 13,
            sound: './animalSounds/zebra.wav',
            image: './animalPics/zebra.png'
        },
        {
            name: 'Duck',
            id: 14,
            sound: './animalSounds/duck.wav',
            image: './animalPics/duck.png'
        },
        {
            name: 'Chick',
            id: 15,
            sound: './animalSounds/chick.wav',
            image: './animalPics/chick.png'
        },
        {
            name: 'Donkey',
            id: 16,
            sound: './animalSounds/donkey.wav',
            image: './animalPics/donkey.png'
        }
    ]


    this.getRandom = function (arr){
        var newArr = [];
        
        for(var i=0; i<arr.length; i++){
            var randomNum = Math.floor(Math.random() * 15)
            newArr.splice(randomNum, 0, arr[i])
        }
        return newArr;
    };

});