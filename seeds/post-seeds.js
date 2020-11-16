const { Post } = require('../models');

const postdata = [
    {
        title: 'Donec posuere metus vitae ipsum.',
        content: 'Separate my and something soul one i home me bust. You thy its seraphim my only desolate was. Adore the.',
        user_id: 10
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        content: 'There merely presently and censer and bore living, that doubting startled fact nothing farther countenance surcease while violet, quaff that.',
        user_id: 8
    },
    {
        title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        content: 'Though so the in as truly bird sent, lost whom nothing sir seeming shutter i, bird she of a this.',
        user_id: 1
    },
    {
        title: 'Nunc purus.',
        content: 'Truly no all on word lady thereat, straight by still thou thee, hesitating i fancy bust within no or, many.',
        user_id: 4
    },
    {
        title: 'Pellentesque eget nunc.',
        content: 'Form seeming reply craven lenore burden by chamber of, is whose deep balm there tell above token i, door till.',
        user_id: 7
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        content: 'The again of door door of wished lenore, borrow angels in ah its thing, nevernevermore him fast within nevermore doubtless.',
        user_id: 4
    },
    {
        title: 'In hac habitasse platea dictumst.',
        content: 'Visiter each that it into tossed nothing the thereis and, have nightly tell and i be to the many the..',
        user_id: 1
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        content: 'Sad yet that raven nevermore a, and nights such so a no whom, here still your my on other fowl..',
        user_id: 1
    },
    {
        title: 'Duis ac nibh.',
        content: 'One floor morrow merely meaninglittle lonely my whose he. Undaunted or balm had the, presently little oer the radiant than.',
        user_id: 9
    },
    {
        title: 'Curabitur at ipsum ac tellus semper interdum.',
        content: 'The dreams still yore a on wheeled perched nothing bust. And whose gently i entrance. Then came by and sought.',
        user_id: 5
    },
    {
        title: 'In hac habitasse platea dictumst.',
        content: 'That this is divining and of bust he i balm. Still as gileadtell yore some, oer truly my morrow remember.',
        user_id: 3
    },
    {
        title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
        content: 'That the upon angels leave memories on i from name, smiling thy the back whose within to. My this bore.',
        user_id: 10
    },
    {
        title: 'Donec dapibus.',
        content: 'Unbrokenquit and lord of but and my days not, a wondering forgiveness raven lamplight this relevancy quaff shore a, that.',
        user_id: 8
    },
    {
        title: 'Nulla tellus.',
        content: 'For of uncertain nepenthe not here still above, bust at many broken enchanted madam farther. Sorrow merely my for nevermore.He beating not flung seraphim bore farther silken gileadtell bird oer. Muttered grim evilprophet chamber master undaunted raven is, peering.',
        user_id: 3
    },
    {
        title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
        content: '',
        user_id: 3
    },
    {
        title:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
        content: 'Quoth said window soul aptly aptly surely is floor a. Was tapping the pondered this implore. Rare nameless and stronger.',
        user_id: 7
    },
    {
        title: 'In hac habitasse platea dictumst.',
        content: 'Books louder his still thee lore. Into this morrow guessing dared here i is. The i above unhappy by before.',
        user_id: 6
    },
    {
        title: 'Etiam justo.',
        content: 'At agreeing doubtless craven that door but on, nothing there metell so and whether into will the it, some both.',
        user_id: 4
    },
    {
        title: 'Nulla ut erat id mauris vulputate elementum.',
        content: 'Just still for bird uncertain unhappy. Bust radiant devil soul this out nevermore ah came. This beguiling here on more.',
        user_id: 6
    },
    {
        title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        content: 'Raven this gave to thereis there, plutonian grim napping entreating a, on no answer of wore what nevermore plume. Lies.',
        user_id: 7
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;