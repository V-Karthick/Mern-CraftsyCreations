import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import { selectCurrenttoken, selectCurrentUser } from '../state/store';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  
  const token = useSelector(selectCurrenttoken) || localStorage.getItem('token');
  const name = useSelector(selectCurrentUser)
  
  return (
  <div className="h-full overflow-y-auto bg-black text-white">
    
    {/* HERO SECTION */}
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1529690840038-f38da8894ff6?w=1200&auto=format&fit=crop&q=80')",
      }}
    >
      <div className="z-10">
        <Navbar navColor={true} />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center gap-6 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold"
        >
          Welcome <span className="font-d text-yellow-400">{name}!</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Discover Unique Handmade Products
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-sm md:text-lg font-light max-w-2xl"
        >
          Every handmade piece is a reminder that beauty lies in imperfections,
          making each creation one-of-a-kind.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg shadow-lg mt-4"
        >
          <Link to="/products">SHOP NOW</Link>
        </motion.button>
      </div>
    </div>

    {/* ABOUT US SECTION */}
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-6"
      >
        About Us
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-gray-300 leading-relaxed px-6"
      >
        At <span className="font-bold text-yellow-400">Craftsy Creations</span>,
        we believe in the timeless beauty of handmade artistry. Our journey began
        with a shared passion for craftsmanship and a desire to bring unique,
        one-of-a-kind pieces to life.
      </motion.p>
    </section>

    {/* FEATURED PRODUCTS */}
    <section className="py-20 bg-gray-100 text-black">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          Featured Products
        </motion.h2>
        <p className="text-gray-700">
          A sneak peek into our best-selling creations
        </p>
      </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
  {[
    {
      title: "Clay Toys",
      img: "https://media.istockphoto.com/id/1214656431/photo/colorful-indian-handicarft-art.webp?a=1&b=1&s=612x612&w=0&k=20&c=jc0i8D-h6_-X1MwFtY_1qesDOaNEuSfpTYd18EDL9z8=",
    },
    {
      title: "Toy Tea Pots",
      img: "https://media.istockphoto.com/id/1364905810/photo/traditional-indian-colourful-tea-pots-on-display-at-a-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=b7R1lF13W1okrjSh-yt6Kg644LdvUKi6ZP4ssRkvLZ0=",
    },
    {
      title: "Handmade Clay Toys",
      img: "https://images.unsplash.com/photo-1718804713846-088813285daf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhbmQlMjBjcmFmdHN8ZW58MHx8MHx8fDA%3D",
    },
  ].map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: i * 0.3 }}
      viewport={{ once: true }}
      className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl cursor-pointer"
    >
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold capitalize">{item.title}</h3>
        <p className="text-gray-600 text-sm mt-2">
          Beautifully handcrafted {item.title.toLowerCase()} that adds soul to your space.
        </p>
      </div>
    </motion.div>
  ))}
</div>




    </section>

    {/* TESTIMONIALS */}
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-10"
      >
        What Our Customers Say
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        {["Absolutely loved it!", "Such unique craftsmanship.", "Will shop again!"].map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <p className="text-lg italic">“{review}”</p>
            <p className="mt-4 text-yellow-400">- Happy Customer</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* CALL TO ACTION */}
    <section className="py-20 bg-yellow-500 text-black text-center">
      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-6"
      >
        Ready to Explore More?
      </motion.h2>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-black text-yellow-500 px-8 py-3 rounded-lg font-bold"
      >
        <Link to="/products">Browse Collection</Link>
      </motion.button>
    </section>

    {/* FOOTER */}
    <footer className="bg-black text-center p-10 border-t border-gray-700">
      <p className="text-2xl font-bold mb-4 font-qwitcher">Craftsy Creations</p>
      <p className="text-sm text-gray-400">
        KARTHICK | HANS ROHIT | RASHWANTH | AGALYA
      </p>
    </footer>
  </div>
);

}

export default Home;
