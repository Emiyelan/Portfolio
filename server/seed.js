require('dotenv').config();
const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    name: String,
    title: String,
    email: String,
    phone: String,
    github: String,
    linkedin: String,
    bio: String
});
const Profile = mongoose.model('Profile', ProfileSchema);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(async () => {
        console.log('MongoDB connected for seeding');

        await Profile.deleteMany({}); // Clear existing data

        await Profile.create({
            name: 'Emmanuel Makaringe',
            title: 'Software Engineer',
            email: 'Emakaringe65@gmail.com',
            phone: '067 693 7921',
            github: 'https://github.com/Emiyelan',
            linkedin: 'https://www.linkedin.com/in/emmanuel-makaringe-753033216',
            bio: 'Passionate developer proficient in the MERN stack. I love building web applications that solve real-world problems.'
        });

        console.log('Database seeded!');
        process.exit();
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
