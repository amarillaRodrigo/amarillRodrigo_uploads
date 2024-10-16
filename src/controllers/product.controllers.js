const products = [];

export const createProduct = (req, res) => {
  const { name, description, price } = req.body;
  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;

  const newProduct = {
    id: `${Date.now()}`,
    name,
    description,
    price: parseFloat(price),
    imageUrl,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
};
