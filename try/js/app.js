document.addEventListener("alpine:init", () => {
  Alpine.data("produk", () => ({
    items: [
      { id: 1, name: "baju satu", img: "baju1.jpg", price: 250000 },
      { id: 2, name: "baju dua", img: "baju2.jpg", price: 280000 },
      { id: 3, name: "baju tiga", img: "baju3.jpg", price: 200000 },
      { id: 4, name: "baju empat", img: "baju4.jpg", price: 190000 },
      { id: 5, name: "baju lima", img: "baju5.jpg", price: 210000 },
    ],
  }));

  Alpine.store('cart', {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // cek ada produk yang sama di cart
      const cartItem = this.item.find((item) => item.id === newItem.id);

      // jika belum ada
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // jika barang sudah ada di cart
        this.items = this.items.map((item) => {
          // jika barang tidak sama/berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            // jika barang sudah ada di cart/sama dengan di cart
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
  });
});

// konversi mata uang ke rp

const rupiah = (number) => {
  const parsedNumber = parseInt(number, 10);
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(parsedNumber);
};