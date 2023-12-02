const express = require('express');
const router = express.Router();

router.get('/candy', (req, res)=>{
    res.send([
        {
            id: '1',
            image: 'https://images.unsplash.com/photo-1548848221-0c2e497ed557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29va2llc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            reviewer: 'Michael',
            rating: '3',
        },
        {
            id: '2',
            image: 'https://images.unsplash.com/photo-1506184341422-6cc152ae474b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29va2llc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            reviewer: 'Michael',
            rating: '5'
        },
        {
            id: '3',
            image: 'https://images.unsplash.com/photo-1622467827417-bbe2237067a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29va2llc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            reviewer: 'Michael',
            rating: '4'
        },
        {
            id: '4',
            image: 'https://images.unsplash.com/photo-1628559087259-8a472928f47a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvb2tpZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            reviewer: 'Michael',
            rating: '5'
        },
    ])
})

router.get('/edibles', (req, res)=>{
    res.send([
        {
            id: '1',
            image: 'https://images.unsplash.com/photo-1548848221-0c2e497ed557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29va2llc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            reviewer: 'Michael',
            rating: '3',
        },
        {
            id: '2',
            image: 'https://images.unsplash.com/photo-1506184341422-6cc152ae474b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29va2llc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            reviewer: 'Michael',
            rating: '1'
        },
        {
            id: '3',
            image: 'https://images.unsplash.com/photo-1622467827417-bbe2237067a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29va2llc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            reviewer: 'Michael',
            rating: '4'
        },
        {
            id: '4',
            image: 'https://images.unsplash.com/photo-1628559087259-8a472928f47a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvb2tpZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            reviewer: 'Michael',
            rating: '5'
        },
    ])
})

router.get('/cereal', (req, res)=>{
    res.send([
        {
            id: '1',
            image: 'https://images.unsplash.com/photo-1548848221-0c2e497ed557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29va2llc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            reviewer: 'Michael',
            rating: '3',
        },
        {
            id: '2',
            image: 'https://images.unsplash.com/photo-1506184341422-6cc152ae474b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29va2llc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            reviewer: 'Michael',
            rating: '5'
        },
        {
            id: '3',
            image: 'https://images.unsplash.com/photo-1622467827417-bbe2237067a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29va2llc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            reviewer: 'Michael',
            rating: '4'
        },
        {
            id: '4',
            image: 'https://images.unsplash.com/photo-1628559087259-8a472928f47a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvb2tpZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            reviewer: 'Michael',
            rating: '5'
        },
    ])
})

router.get('/chips', (req, res)=>{
    res.send([
        {
            id: '1',
            image: 'https://images.unsplash.com/photo-1548848221-0c2e497ed557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29va2llc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            reviewer: 'Michael',
            rating: '3',
        },
        {
            id: '2',
            image: 'https://images.unsplash.com/photo-1506184341422-6cc152ae474b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29va2llc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            reviewer: 'Michael',
            rating: '5'
        },
        {
            id: '3',
            image: 'https://images.unsplash.com/photo-1622467827417-bbe2237067a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29va2llc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            reviewer: 'Michael',
            rating: '4'
        },
        {
            id: '4',
            image: 'https://images.unsplash.com/photo-1628559087259-8a472928f47a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvb2tpZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            reviewer: 'Michael',
            rating: '5'
        },
    ])
})


module.exports = router;
