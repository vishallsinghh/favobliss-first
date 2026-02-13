import React from "react";

const page = () => {
 const cancellationPolicy = `
  How can I cancel my order?

Free to cancel your order before it has been processed. You get full amount refunded for such a cancellation. Here's how to cancel your order:

Log in to your account and go to My Account

Select the appropriate order from Recent Orders

Click on ‘Cancel Order’ for the items you want to cancel, individually

Select the reason and confirm the cancellation



When can I cancel my order?

By following the same we can refund the full amount you've spent.



Can I cancel only part of my order?

Yes,  you can individually cancel your product, before it goes for processing.



Why do I see a disabled cancel link?

It means your order is already shipped. In this case you can’t cancel your order or product.





How will I get my refund when I cancel an order?

As you cancel your order it will take to 3-4 days to get your amount in to your source account.



Will I get complete refund for the order I’ve cancelled?

You get complete refund.



What should I do if I don’t get my refund on time?

You may raise your query at support@favobliss.com

This is not what I ordered. How do I replace it?

Just initiate for return request from your account section.

Why was my order cancelled?

Due to unavailability of the product.
 `.trim()
  const formatPolicy = (raw: string) => {
    const headings = new Set([
      "FAVOBLISS PRIVACY POLICY",
      "WHAT PERSONAL INFORMATION ABOUT CUSTOMERS DO WE COLLECT?",
      "INFORMATION YOU GIVE US",
      "AUTOMATIC INFORMATION",
      "E-MAIL COMMUNICATIONS",
      "INFORMATION FROM OTHER SOURCES",
      "WHAT ABOUT COOKIES?",
      "DOES FAVOBLISS SHARE THE INFORMATION IT RECEIVES?",
      "HOW SECURE IS INFORMATION ABOUT ME?",
      "WHAT ABOUT THIRD-PARTY ADVERTISERS AND LINKS TO OTHER WEB SITES?",
      "WHAT INFORMATION CAN I ACCESS?",
      "WHAT CHOICES DO I HAVE?",
      "ARE CHILDREN ALLOWED TO USE FAVOBLISS.COM?",
      "NOTICES AND REVISIONS",
      "EXAMPLES OF INFORMATION COLLECTED",
      "INFORMATION YOU GIVE US",
      "AUTOMATIC INFORMATION",
      "INFORMATION YOU CAN ACCESS",
    ]);

    return raw.split("\n").map((line, idx) => {
      const text = line.trim();

      if (!text) return <div key={idx} className="h-3" />;

      // numbered list item
      if (/^\d+\.\s+/.test(text)) {
        return (
          <p key={idx} className="text-sm md:text-base leading-7 text-gray-700">
            {text}
          </p>
        );
      }

      // main headings
      if (headings.has(text.toUpperCase())) {
        return (
          <h2
            key={idx}
            className="mt-6 mb-2 text-lg md:text-xl font-semibold text-gray-900"
          >
            {text}
          </h2>
        );
      }

      // sub headings (simple heuristic)
      if (text.length <= 50 && text === text.toUpperCase()) {
        return (
          <h3
            key={idx}
            className="mt-4 mb-1 text-base font-semibold text-gray-900"
          >
            {text}
          </h3>
        );
      }

      return (
        <p key={idx} className="text-sm md:text-base leading-7 text-gray-700">
          {text}
        </p>
      );
    });
  };

  return (
    <div className="w-full flex flex-col text-center items-center justify-center mb-8">
      <h1 className="text-3xl font-bold mt-10">Favobliss Privacy Policy</h1>

      {/* Added: content container */}
      <div className="w-full max-w-5xl mt-6 px-4">
        <div className="text-left bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="px-5 md:px-8 py-6 max-h-[75vh] overflow-y-auto">
            {formatPolicy(cancellationPolicy)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
