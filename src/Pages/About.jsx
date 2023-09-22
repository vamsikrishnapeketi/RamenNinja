import React from "react";
import { Layout } from "./Layout";

export const About = () => {
  return (
    <>
      <Layout>
        <div className="flex justify-center">
          <div className="p-4 w-full max-w-4xl">
            <span className="italic flex justify-center font-bold">
              About Us
            </span>
            <p className="text-overflow-ellipsis">
              Welcome to RamenNinja.com – Your Ultimate Destination for
              Naruto-Inspired Ramen Delights! At RamenNinja.com, we are
              passionate about two things: ramen and Naruto. Our love for these
              two incredible worlds has led us to create a unique online
              platform where you can experience the magic of Naruto's favorite
              food right at your doorstep.
            </p>
            <span className="italic flex justify-center font-bold">
              Our Story
            </span>
            <p>
              Our journey began with a shared enthusiasm for Naruto, the beloved
              ninja anime and manga series. We couldn't help but be captivated
              by the way Naruto Uzumaki's eyes lit up every time he slurped a
              delicious bowl of ramen at Ichiraku Ramen. That spark of
              inspiration ignited the idea to bring the taste of Naruto's ramen
              adventures to fans around the world.
            </p>
            <span className="italic flex justify-center font-bold">
              What Sets Us Apart?
            </span>
            <p>
              At RamenNinja.com, we pride ourselves on authenticity and quality.
              Every bowl of ramen we serve is a carefully crafted masterpiece,
              designed to transport you straight to the hidden leaf village of
              Konoha. We've scoured the globe for the finest ingredients and
              perfected recipes that capture the essence of Naruto's ramen
              experiences. Whether you're a fan of the classic miso ramen or
              crave the fiery spice of the Hokage's Special, we've got it all.
            </p>
            <span className="italic flex justify-center font-bold">
              Our Commitment
            </span>
            <p>
              <ul className="list-disc">
                <li>
                  We are committed to delivering the most authentic
                  Naruto-inspired ramen dishes that will leave your taste buds
                  singing with delight.
                </li>
                <li>
                  We source only the freshest and finest ingredients to ensure
                  every bowl of ramen is a true masterpiece.
                </li>
                <li>
                  Ordering from us is as easy as ABC. With a few clicks, you can
                  have your favorite Naruto-inspired ramen delivered right to
                  your doorstep.
                </li>
                <li>
                  We take pride in our swift and reliable delivery service. Your
                  ramen will arrive piping hot, just like in the anime.
                </li>
                <li>
                  Your satisfaction is our ultimate goal. If you have any
                  questions or concerns, our friendly customer support team is
                  always here to assist you.
                </li>
              </ul>
            </p>
            <span className="italic flex justify-center font-bold">
              Join the RamenNinja.com Family
            </span>
            <p>
              We invite you to become a part of our RamenNinja.com family and
              embark on a flavorful journey through the world of Naruto-inspired
              ramen. Whether you're a die-hard Naruto fan or simply looking for
              a delicious and satisfying meal, our menu has something for
              everyone. Thank you for choosing RamenNinja.com as your trusted
              source for the best Naruto-inspired ramen dishes. Your support
              fuels our passion, and we look forward to serving you a bowl of
              ramen that will leave you saying, "Believe it!"
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};
