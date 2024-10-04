const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors()); 
app.use(express.json());

mongoose.connect('mongodb+srv://rajvasanthathani:k1NO23SQH5B95Hc1@vasanth.duhhw.mongodb.net/?retryWrites=true&w=majority&appName=Vasanth', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

const ItemSchema = new mongoose.Schema({
    name: String,
    value: String
});

const Item = mongoose.model('Item', ItemSchema, "hand_picked_card");

app.get('/api/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
