"use client";

import Link from "next/link";

const AboutPage = () => {
  return (
    <main className=" bg-[#fffdf5] mx-auto  px-4 py-10 text-gray-800 font-sans">
        <div className="max-w-5xl m-auto  space-y-12 " >

      <section>
        <h1 className="text-4xl font-orangegummy text-yellow-600 mb-4">ABOUT DAMINIH ARTS</h1>
        <p className="text-sm ">
It all started with a T-shirt painting that she made for her sister and who knew that a birthday gift for her sister would give her an amazing venture idea.
“I need to leave my job”, she thought to herself. Part time painting and full time job was not something that was quite enough to quench her thirst for art. And that was the inception of Daminih Arts. 
          <br /><br />
         . Leaving her full time and well paying job was a tough decision to make, but it was necessary so she could find herself. She wanted to do more, she wanted to be more, she wished to spread her wings and fly and not be caged forever. She wanted to paint till her hands couldn't any more. She wanted to paint till her monochromatic dreams become full of colours. She wanted to paint till the whole world recognizes and appreciates her art. 
          <br /><br />
          “I wanted to paint, that’s all. I don’t know how, where and on what”, she said. 
          <br /><br />No wonder she was a fan of the great Van Gogh. She figuratively inherited his craze. 
          <br /><br />She started with t-shirts then also began painting on bags, purses, pouches, walls, wood i. e pretty much everything that could be painted on, and she has never stopped since then. Today she has hundreds of happy customers and many more to come. The journey hasn't been easy at all for her, being all on her own but she found a way to crawl towards her dream through all the obstacles and challenges because she never lost sight of her dream.
          <br /><br />Today Daminih has established herself in T-shirt Painting, Painting Workshops, Wall Paintings and Illustrations.
        </p>

        <blockquote className="mt-4 italic font-orangegummy text-yellow-600 font-medium">
          “Give your dream a chance and see what it gives you back” — Daminih
        </blockquote>
      </section>

      <section>
        <h2 className="text-3xl  font-orangegummy text-yellow-600 mb-3">HANDMADE PRODUCTS</h2>
        <p className="text-sm ">
    Every handmadeproduct is special because it has emotions and love woven into it. People mostly buy our products to gift them to their loved ones or get a special design made for themselves whichis of emotional significance to them such as a pet portrait, a loving person’s portrait as a surprise gift, cutecouplesdesigns for their partner. People also buy our products for special days like mother’sday, women’s day, valentines day and many more emotions get attached with every piece of art. 
          <br /><br />
       There are many in-house designs available or you can get it customized too. You just have to get in touch with us and we are available 24/7. The handmade products reflect the dedication and perseverance of the artist unlike factory made or printed products. There is something magical about these products and if you love and appreciate art, you’ll understand what we’re talking about. 
        </p>

        <ul className="list-disc list-inside mt-4 text-sm">
          <li>Daminih Arts Designs: T-shirts, bags, paintings</li>
          <li>Customized Products: T-shirts, bags, paintings</li>
          <li>Bulk Orders</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-orangegummy text-yellow-600 mb-3">WORKSHOPS</h2>
        <p className="text-sm leading-7">
          Are you a person who is looking to explore something new and creative to break the shackles of your same old daily routine life??
          <br /><br />
         We are here for you. We conduct Painting workshops on regular basis and on different mediums. It’s for people who want to learn painting, doodling and creating their own art. It’s for beginners, artists, non- artists and those who want to get stress out of their lives. It’s even more fun when you attend our workshops to have a weekend getaway with your friends, colleagues or just your partner. You will not justlearn the techniques and skills to create art but also receive tips on how to work out those intricate details and bring out the best expressions in your art. You are free to ask questions and you will get individual attention and feedback for your queries. 
         <br /><br />
         Each workshop is specially configured based on mediums, where you will learn about techniques, materials and tools related to that medium. So get ready to get inspired and kick stress out. Do participatein one of our workshops and explore yourself!
         <br /><br />
         You can also arrange your own paint party with us. We do love to host your team building events, birthday, girl’s night out or family day in. Enjoy 3 hours step by step guided workshop at your home or place of business. 
        </p>

        <ul className="list-disc list-inside mt-4 text-sm">
          <li>Upcoming Workshops</li>
          <li>Personal Paint Parties (Birthday, Office, Girls’ Night Out)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-orangegummy text-yellow-600 mb-3">WALL PAINTINGS</h2>
        <p className="text-sm leading-7">
         Big wall, wooohhh!!! Big space to paint. It’s always exciting to see a big wall and more exciting when you get a chance to paint on it. Plain old painted walls are so boring and dull. Wall paintings are a forgotten art which once used to give royals and kings the feelings of benevolence, calmness, inspiration etc. Your walls can shape your ideas and your thoughts. Wall paintings also set the mood for you and you will just love it when you come back home from a tiring day and see all the beautiful walls and relax, have tea or coffee. The serenity of this experience cannot be explained in words and you should definitely try it to know what it feels like. You can call us if you want to fill your home or work place with memories. You can add a beautiful landscape in your living room or turn your kid’s room intoan animated world. We would love to do it for you.
          <br /><br />
          Experience the royal, calming effect of personalized wall art. Let your walls speak.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-orangegummy text-yellow-600 mb-3">CONTACT US</h2>
        <p className="text-sm leading-7">
          We'd love to hear from you — whether it's a question, custom request, or just some love.
        </p>
        <ul className="mt-3 text-sm space-y-1">
          <li>📧 Email: <a href="mailto:contact@daminiarts.com" className="text-blue-600 underline">contact@daminiarts.com</a></li>
          <li>📱 Phone: <a href="tel:+91XXXXXXXXXX" className="text-blue-600 underline">+91 XXXXXXXXXX</a></li>
          <li>📸 Instagram: <a href="https://instagram.com/daminiharts" className="text-blue-600 underline" target="_blank">Instagram Profile</a></li>
          <li>📘 Facebook: <a href="https://facebook.com/daminiharts" className="text-blue-600 underline" target="_blank">Facebook Page</a></li>
        </ul>

        
      </section>
        </div>
    </main>
  );
};

export default AboutPage;
