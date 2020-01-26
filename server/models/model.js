const mongoose = require('mongoose');

const FinanceSchema = new mongoose.Schema({
    name: String,
    amount: Number,
    created_at: Date,
    process: String
})
mongoose.model('finance', FinanceSchema);