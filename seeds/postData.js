const { Post } = require('../models');

const postData = [{
        title: 'My post',
        content: 'The discovery was made by',
        user_id: 1

    },
    {
        title: 'Second post',
        content: 'Of course we know that to make it known to most was a publicity of the Sixties',
        user_id: 2
    },
    {
        title: 'Third post',
        content: 'Contrary to what one might think',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;