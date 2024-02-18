"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection: React.FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [sendButtonClicked, setSendButtonClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSendButtonClicked(true);
    setLoading(true);
    setError(null); // Reset any previous error
    const data = {
      email: (e.target as any).email.value,
      subject: (e.target as any).subject.value,
      message: (e.target as any).message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    } else {
      setError("An error occurred while sending your message.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
    >
      <hr style={{
        marginTop:'3rem', 
        borderStyle: 'inset',
        borderColor: 'rgba(255,125,255,0.2)'
    }} />
      <div className="grid md:grid-cols-2 my-12 md:my-9 py-18 gap-4 relative">
      
      <div className="z-9">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/shatadip" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/shatadip/" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
      {error && <p className="text-red-500">{error}</p>}

        {loading ? (
          <p className="text-yellow-500">Sending...</p>
        ) : emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            [Success] Thank you for reaching out! I will get back to you shortly.
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Please enter your email address"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Subject of the message"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's discuss..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              disabled={sendButtonClicked}
              style={{ cursor: sendButtonClicked ? 'not-allowed' : 'pointer' }}
            >
              Send Message
            </button>
          </form>
        )}
      </div>
      </div>
    </section>
  );
};

export default EmailSection;
