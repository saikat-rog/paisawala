import React from "react";
import { ProductCard } from "./ProductCard";

const products = [
  {
    image: "https://images.unsplash.com/photo-1515389432-baf89dcbd707?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Elegant Gold Necklace",
    description: "A stunning 18K gold necklace that adds a touch of sophistication to any outfit. Perfect for special occasions or everyday wear.",
    price: 199.99,
  },
  {
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQm1tYEsmSHAbCZ-zO1bLNnyruQCqEqCTQ5ikX5JGyLJUSfwCEHNSoO6jJpJOcHkFW8HwWyHz8lZMOnTXMSdxyDLKpdDiwrlq-hbIFlJP8xjE3wPftQl1oqYt0",
    title: "Brilliant Diamond Earrings",
    description: "These exquisite diamond earrings sparkle with every movement. Set in white gold, they are the perfect accessory for a night out.",
    price: 299.99,
  },
  {
    image: "https://www.bhindi.com/upload/product/bhindi_NE-2171-02%20_4%20-800-3.jpg",
    title: "Sapphire and Diamond Ring",
    description: "A beautiful sapphire ring adorned with brilliant diamonds. This piece is sure to catch the eye and make a lasting impression.",
    price: 399.99,
  },
  {
    image: "https://media.istockphoto.com/id/1277517088/photo/fancy-designer-antique-golden-bracelets-for-woman-fashion.jpg?s=1024x1024&w=is&k=20&c=n0sFrISNoXP-M8uhw2VdTbKnw9vu_BVnm5EzMYuz5cA=",
    title: "Classic Pearl Bracelet",
    description: "This timeless pearl bracelet is made with genuine freshwater pearls, offering elegance and versatility for any occasion.",
    price: 149.99,
  },
  {
    image: "https://media.istockphoto.com/id/1181619578/photo/close-up-of-diamond-studded-pearl-bangles.jpg?s=1024x1024&w=is&k=20&c=v5qEDR_eyQ6oiyZTv_-tE_RZ6qKmi2WfhNRmc4Qr3Ws=",
    title: "Stunning Ruby Pendant",
    description: "Featuring a vibrant ruby, this pendant is set in sterling silver and hangs beautifully on any chain, making it a must-have piece.",
    price: 249.99,
  },
  {
    image: "https://media.istockphoto.com/id/1441175799/photo/beautiful-golden-bracelets-decorated-with-stones-and-carvings.jpg?s=1024x1024&w=is&k=20&c=7yJgMr7yuZCWFSbFfrSfpkFilaSqqwYboCA-m9Sd2O8=",
    title: "Stylish Silver Cufflinks",
    description: "These sleek silver cufflinks are perfect for the modern gentleman. Their classic design complements any dress shirt.",
    price: 89.99,
  },
];


export default function Home() {
  return (
    <>
      <div className="w-full p-5 flex flex-col justify-center text-xl pb-52">
        <div className="flex flex-col text-center py-3 ">
          Welcome to Paisawala
          <span className="text-sm">A platform for shiny jewels</span>
        </div>
        <div className="flex flex-wrap justify-center items-center min-h-screen gap-4 py-3">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
