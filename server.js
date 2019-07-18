const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const Ordereditemslist = [
	{
		id: 0,
		name: 'Butter Naan',
		quantity: 2,
		price: 55
	},
	{
		id: 1,
		name: 'Tandoor Roti',
		quantity: 2,
		price: 50
	},
	{
		id: 2,
		name: 'Butter Chicken Masala',
		quantity: 1,
		price: 250
	},
	{
		id: 3,
		name: 'Grilled Paneer',
		quantity: 2,
		price: 150
	}
]

// app.use(bodyParser);
app.use(cors());

app.get('/eajaaz', (req, res) => {
	console.log("Received a Request from Order Summary Page")
	res.json({ Ordereditemslist });
})

app.listen(3000, () => {
	console.log('Server Started Successfully on 5000');
})