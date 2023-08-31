import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j3k53ml",
        "template_efzcw8i",
        form.current,
        "2tvPg3ksF7tQkzv7I"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "center-center",
            icon: "success",
            title: "Message Sent",
            showConfirmButton: false,
            timer: 1500,
          });
          form.current.reset();
          setMessageSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <h1 className="text-3xl md:text-5xl font-bold text-center overline drop-shadow-2xl mt-16">
        Contact Form
      </h1>
    <div className="max-w-[350px] mx-auto bg-violet-300 p-10 rounded-lg my-10">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-3 drop-shadow-xl text-center"
      >
        <input
          required
          type="text"
          placeholder="Your Name"
          className="input input-bordered input-primary w-full max-w-xs"
          name="from_name"
        />
        <input
          required
          type="text"
          placeholder="E-mail"
          className="input input-bordered input-primary w-full max-w-xs"
          name="from_email"
        />
        <textarea
          required
          className="textarea textarea-primary"
          placeholder="Message"
          name="message"
        ></textarea>
        <button
          className="text-2xl btn btn-primary mt-3"
          type="submit"
          value="Send"
          disabled={messageSent}
        >
          {messageSent ? "Sent" : "Send"}
        </button>
      </form>
    </div>
    </>
  );
};

export default Contact;
