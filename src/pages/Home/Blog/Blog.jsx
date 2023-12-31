import { useState } from "react";
import { Helmet } from "react-helmet";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfDocument from "./PDF";

const Blog = () => {
  const faqData = [
    {
      question:
        "01. What is our aim ?",
      answer:
        "Answer: Our aim is to provide you world class recipes from the best chefs in the world.",
    },
    {
      question: "02. What's our future plan?",
      answer:
        "Answer: We aim to build an online food delivery service through the web.",
    },
    {
      question: "03. Who can join this platform?",
      answer:
        "Answer: Anyone having knowledge or interest in cooking can join this platform",
    },
    {
      question: "04. Is there any hidden charge?",
      answer:
        "Answer: Absolutely there is no hidden charge. This platform is 100% free of cost. Just tell your friends and family about us.That's it.",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 ">
      <Helmet>
        <title>Banglar Cuisine</title>
      </Helmet>
      <h1 className="text-center text-4xl py-5 uppercase font-bold">
        Banglar Cuisine Blog
      </h1>
      <div className="space-y-4 sm:space-y-6 md:space-y-8">
        {faqData.map((item, index) => (
          <QuestionButton key={index} question={item.question}>
            {item.answer}
          </QuestionButton>
        ))}
      </div>
      <div className="text-center mt-4">
        <PDFDownloadLink
          document={<PdfDocument faqData={faqData} />}
          fileName="Banglar_Cuisine_FAQ.pdf"
        >
          {({ blob, url, loading, error }) => (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none"
              disabled={loading}
            >
              {loading ? "Generating PDF..." : "Download PDF"}
            </button>
          )}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

const QuestionButton = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-5 rounded-md border border-solid border-gray-300 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-600">
      <button
        className="flex items-center justify-between w-full py-2 text-left focus:outline-none focus:ring focus:border-blue-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl text- font-semibold sm:text-2xl md:text-3xl">
          {question}
        </h2>
        <svg
          className={`w-6 h-6 transition-transform duration-200 transform ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>

      <p
        className={`my-2 text-sm text-black text-opacity-50 font-bold sm:text-base transition-all duration-500 ${
          isOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </p>
    </div>
  );
};

export default Blog;
