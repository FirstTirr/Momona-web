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
});

// konversi mata uang ke rp

const rupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format('number');
};