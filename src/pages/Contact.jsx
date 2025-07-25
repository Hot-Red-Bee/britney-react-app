import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCheckCircle } from "react-icons/fa";
import Confetti from "react-confetti";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("https://formspree.io/f/xdkdgzgb", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          setIsSubmitted(true);
          form.reset();
          setTimeout(() => setIsSubmitted(false), 8000); // Reset after 8s
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-200 px-6 py-16 md:px-24 font-sans relative overflow-hidden">
      {isSubmitted && <Confetti numberOfPieces={150} recycle={false} />}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-purple-400 mb-4 animate-fade-in-up">Contact Me</h1>
        <p className="text-lg text-gray-400 mb-12 animate-fade-in-up delay-100">
          Let’s build something incredible. Whether it’s a collab, freelance gig, or tech talk, I’d love to hear from you.
        </p>

        {isSubmitted ? (
          <div className="flex items-center gap-4 bg-green-700/20 border border-green-400 text-green-300 rounded-xl p-6 text-lg font-medium shadow-lg animate-fade-in-up delay-200 backdrop-blur-sm">
            <FaCheckCircle className="text-green-300 text-2xl" />
            <span>Thank you! Your message has been sent successfully.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-6 max-w-xl animate-fade-in-up delay-200"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="bg-gray-800 text-gray-200 p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="bg-gray-800 text-gray-200 p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="bg-gray-800 text-gray-200 p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-purple-700/40"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="mt-16 space-y-4 animate-fade-in-up delay-300">
          <p className="flex items-center gap-3">
            <FaEnvelope className="text-purple-400" />
            <span className="text-gray-300">baby6bee13@gmail.com</span>
          </p>
          <p className="flex items-center gap-3">
            <FaGithub className="text-purple-400" />
            <a
              href="https://github.com/Hot-Red-Bee"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 underline"
            >
              github.com/Hot-Red-Bee
            </a>
          </p>
          <p className="flex items-center gap-3">
            <FaLinkedin className="text-purple-400" />
            <a
              href="https://www.linkedin.com/in/britney-daramola-336b19358/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 underline"
            >
              linkedin.com/in/britney-daramola-336b19358/
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
