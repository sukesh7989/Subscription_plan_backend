const razorpay = require("../utils/razorpay");

const createOrder = async (req, res) => {
  const amount = 49900;

  const options = {
    amount: amount,
    currency: "INR",
    receipt: `receipt_order_${Date.now()}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error("Razorpay Order Error:", error); // this logs the full error
    res.status(500).json({
      message: "Order creation failed",
      error: error.message,
      stack: error.stack, // optional: helpful during debugging
    });
  }
  
};


module.exports =  createOrder;
