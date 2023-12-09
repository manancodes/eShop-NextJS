"use client";

import ProductPage from "./components/Product";
import Navbar from "./components/Navbar/Index";
import Banner from "./components/Banner";
import Tabs from "./components/Tabs";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-6 lg:px-24">
      <Navbar />
      <Banner />
      <ProductPage />
      <Tabs />
    </main>
  );
}
