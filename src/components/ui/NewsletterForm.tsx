import { useState } from "react";

export const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full gap-4 text-base">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email Here"
        className="self-stretch flex-1 shrink border min-w-60 gap-2 basis-6 p-3 border-black border-solid"
        required
      />
      <button
        type="submit"
        className="self-stretch border gap-2 whitespace-nowrap w-[119px] px-6 py-3 border-black border-solid hover:bg-gray-100 max-md:px-5"
      >
        Join
      </button>
    </form>
  );
};
