const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Mock database
let users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    password: 'hashedpassword123'
  }
];

let restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    cuisine: "Italian",
    rating: 4.5,
    deliveryTime: 30,
    deliveryFee: 2.99,
    minOrder: 10,
    image: "🍕"
  },
  {
    id: 2,
    name: "Burger Haven",
    cuisine: "American",
    rating: 4.2,
    deliveryTime: 25,
    deliveryFee: 1.99,
    minOrder: 8,
    image: "🍔"
  },
  {
    id: 3,
    name: "Sushi Express",
    cuisine: "Japanese",
    rating: 4.8,
    deliveryTime: 35,
    deliveryFee: 3.99,
    minOrder: 15,
    image: "🍣"
  },
  {
    id: 4,
    name: "Taco Fiesta",
    cuisine: "Mexican",
    rating: 4.3,
    deliveryTime: 20,
    deliveryFee: 1.99,
    minOrder: 10,
    image: "🌮"
  }
];

let menuItems = [
  { id: 1, restaurantId: 1, name: "Margherita Pizza", category: "Pizza", price: 12.99, image: "🍕", description: "Classic cheese and tomato pizza" },
  { id: 2, restaurantId: 1, name: "Pepperoni Pizza", category: "Pizza", price: 14.99, image: "🍕", description: "Loaded with pepperoni" },
  { id: 3, restaurantId: 1, name: "Garlic Bread", category: "Appetizers", price: 4.99, image: "🥖", description: "Crispy garlic bread" },
  
  { id: 4, restaurantId: 2, name: "Classic Burger", category: "Burgers", price: 11.99, image: "🍔", description: "Juicy burger with lettuce and tomato" },
  { id: 5, restaurantId: 2, name: "Cheese Burger", category: "Burgers", price: 10.99, image: "🍔", description: "Burger with melted cheese" },
  { id: 6, restaurantId: 2, name: "French Fries", category: "Sides", price: 3.99, image: "🍟", description: "Crispy golden fries" },
  
  { id: 7, restaurantId: 3, name: "California Roll", category: "Sushi", price: 9.99, image: "🍣", description: "Crab and avocado" },
  { id: 8, restaurantId: 3, name: "Salmon Nigiri", category: "Sushi", price: 12.99, image: "🍣", description: "Fresh salmon nigiri" },
  { id: 9, restaurantId: 3, name: "Miso Soup", category: "Soup", price: 4.99, image: "🍲", description: "Traditional miso soup" },
  
  { id: 10, restaurantId: 4, name: "Beef Tacos", category: "Tacos", price: 8.99, image: "🌮", description: "Three seasoned beef tacos" },
  { id: 11, restaurantId: 4, name: "Chicken Quesadilla", category: "Quesadillas", price: 9.99, image: "🧀", description: "Grilled with cheese and chicken" },
  { id: 12, restaurantId: 4, name: "Guacamole", category: "Sides", price: 3.99, image: "🥑", description: "Fresh guacamole" }
];

let orders = [];
let nextOrderId = 1;

// Routes
app.get('/api/restaurants', (req, res) => {
  res.json(restaurants);
});

app.get('/api/restaurants/:id', (req, res) => {
  const restaurant = restaurants.find(r => r.id === parseInt(req.params.id));
  if (!restaurant) return res.status(404).json({ message: 'Restaurant not found' });
  res.json(restaurant);
});

app.get('/api/menu/:restaurantId', (req, res) => {
  const items = menuItems.filter(item => item.restaurantId === parseInt(req.params.restaurantId));
  res.json(items);
});

app.get('/api/items/:itemId', (req, res) => {
  const item = menuItems.find(i => i.id === parseInt(req.params.itemId));
  if (!item) return res.status(404).json({ message: 'Item not found' });
  res.json(item);
});

// Orders
app.post('/api/orders', (req, res) => {
  const { userId, restaurantId, items, totalPrice, deliveryAddress, paymentMethod } = req.body;
  
  if (!items || items.length === 0) {
    return res.status(400).json({ message: 'Order must contain items' });
  }

  const order = {
    id: nextOrderId++,
    userId,
    restaurantId,
    items,
    totalPrice,
    deliveryAddress,
    paymentMethod,
    status: 'pending',
    createdAt: new Date().toISOString(),
    estimatedDelivery: new Date(Date.now() + 30 * 60000).toISOString()
  };

  orders.push(order);
  res.status(201).json(order);
});

app.get('/api/orders', (req, res) => {
  res.json(orders);
});

app.get('/api/orders/:orderId', (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.orderId));
  if (!order) return res.status(404).json({ message: 'Order not found' });
  res.json(order);
});

app.patch('/api/orders/:orderId', (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.orderId));
  if (!order) return res.status(404).json({ message: 'Order not found' });

  const { status } = req.body;
  if (status) order.status = status;

  res.json(order);
});

// Search & Filter
app.get('/api/search', (req, res) => {
  const { q } = req.query;
  if (!q) return res.json([]);

  const results = restaurants.filter(r =>
    r.name.toLowerCase().includes(q.toLowerCase()) ||
    r.cuisine.toLowerCase().includes(q.toLowerCase())
  );

  res.json(results);
});

// User Registration (mock)
app.post('/api/auth/register', (req, res) => {
  const { name, email, password } = req.body;
  
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields required' });
  }

  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'Email already registered' });
  }

  const user = {
    id: users.length + 1,
    name,
    email,
    password
  };

  users.push(user);
  res.status(201).json({ id: user.id, name: user.name, email: user.email });
});

// User Login (mock)
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' });
  }

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({ 
    id: user.id, 
    name: user.name, 
    email: user.email,
    token: 'mock-jwt-token-' + user.id
  });
});

// Admin Stats
app.get('/api/admin/stats', (req, res) => {
  const stats = {
    totalOrders: orders.length,
    totalRevenue: orders.reduce((sum, o) => sum + o.totalPrice, 0),
    pendingOrders: orders.filter(o => o.status === 'pending').length,
    deliveredOrders: orders.filter(o => o.status === 'delivered').length,
    totalRestaurants: restaurants.length,
    totalMenuItems: menuItems.length
  };
  res.json(stats);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Food Delivery API running' });
});

app.listen(PORT, () => {
  console.log(`✓ Food Delivery Server running on http://localhost:${PORT}`);
  console.log(`✓ Frontend available at http://localhost:${PORT}/index.html`);
});
