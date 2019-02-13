// A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friendsData = require('../data/friends.js');
module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
        console.log("friendsData[0].scores[0]: " + friendsData[0].scores[0]);

    });

    app.post('/api/friends', function (req, res) {
        console.log(req.body);

        var bestMatch = {
            name: "",
            img: "",
            difference: 20
        };

        var newFriend = req.body;
        var newImg = req.body.newImg;
        var newName = req.body.newName;
        var newScores = req.body.scores;

        var friendCalc = 0;

        for (var i = 0; i < friendsData.length; i++) {
            console.log(friendsData[i].friendName);
            friendCalc = 0;
            for (var j = 0; j < friendsData[i].scores.length; j++) {
                friendCalc += Math.abs(friendsData[i].scores[j] - newScores[j]);
                console.log("friendCalc: " + friendCalc);

                if (friendCalc < bestMatch.difference) {
                    bestMatch.name = friendsData[i].friendName;
                    bestMatch.img = friendsData[i].friendImg;
                    bestMatch.difference = friendCalc;
                    console.log("bestMatch.name: " + bestMatch.name);
                    console.log("bestMatch.difference: " + bestMatch.difference);
                }
            }
        }

        friendsData.push(newFriend);
        res.json(bestMatch);

    });

}