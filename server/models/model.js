const mongoose = require('mongoose');

const FinanceSchema = new mongoose.Schema({
    name: String,
    balance: Number,
    transactions: Array,
    description:String
})
mongoose.model('Finance', FinanceSchema);