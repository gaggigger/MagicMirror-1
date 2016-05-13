var config = {
    lang: 'en',
    time: {
        timeFormat: 12
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'York,Pennsylvania',
            units: 'imperial',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'en',
            APPID: 'f581e69b118ec3559415b4939e550e33'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'Dont let your dreams be dreams.',
            'JUST DO IT!',
            'The best preparation for tomorrow is doing your best today.',
	    'Nothing is impossible.',
	    'Respect isnt demanded, its earned.',
	    'Dont have dreams, have goals.',
	    'Winners dont make excuses.'
        ],
        afternoon: [
            'Yesterday you said tomorrow.',
            'Dont let your dreams be dreams.',
            'The only time success comes before work is in the dictionary.'
        ],
        evening: [
            'So long and thank you for all the fish.',
            'WUBBA LUBBA DUB DUB',
            '42.'
        ]
    },
    calendar: {
        maximumEntries: 10
    },
    news: {
        feed: 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml'
    }
}
