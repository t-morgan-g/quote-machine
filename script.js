var text = document.getElementById('text'); 
var author = document.getElementById('author');

var quotes = {
    "quotes": [
        {
            "quote": "The flower that blooms in adversity is the most rare and beautiful of all.",
            "author": "Mulan (1998)"
        },
        {
            "quote": "Ariel, listen to me. The human world is a mess.",
            "author": "The Little Mermaid (1989)"
        },
        {
            "quote": "Sometimes the right path is not the easiest one.",
            "author": "Pocahontas (1995)"
        },
        {
            "quote": "Fairy tales can come true. You gotta make them happen, it all depends on you..",
            "author": "The Princess and the Frog (2009)"
        },
        {
            "quote": "If you can’t say something nice, don’t say nothin’ at all.",
            "author": "Bambi (1942)"
        },
        {
            "quote": "We didn’t set out to be superheroes. But sometimes life doesn’t go the way you planned.",
            "author": "Big Hero 6 (2014)"
        },
        {
            "quote": "The very things that hold you down are going to lift you up.",
            "author": "Dumbo (1941)"
        },
        {
            "quote": "Love is putting someone else’s needs before yours.",
            "author": "Frozen (2013)"
        },
        {
            "quote": "Quasi, take it from an old spectator. Life’s not a spectator sport. If watchin’ is all you’re gonna do, then you\’re gonna watch your life go by without you.",
            "author": "The Hunchback of Notre Dame (1996)"
        },
        {
            "quote": "Don’t spend your time lookin’ around for something you want that can’t be found.",
            "author": "The Jungle Book (1967)"
        },
    ],
    randomQuote: function() {
        // var text = document.getElementById('text'); 
        // var author = document.getElementById('author');
        var index = Math.floor(Math.random() * quotes.quotes.length);

        text.innerHTML = quotes.quotes[index].quote;
        author.innerHTML = "- " + quotes.quotes[index].author;
    },
    tweetQuote: function() {
        var textLink = text.innerHTML; 
        var newTextLink = textLink.replace(" ", "+");

        var authorLink = author.innerHTML; 
        var newAuthorLink = authorLink.replace(" ", "+");
        // document.getElementById("demo").innerHTML = res;       

        var tweet = document.getElementById('twitter-button');
        tweet.setAttribute('href', 'https://twitter.com/intent/tweet?text=' + newTextLink + '+' + newAuthorLink);
        console.log(tweet);
    }
};

window.addEventListener('load', quotes.randomQuote());