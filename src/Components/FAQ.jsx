import { useTheme } from "./ThemeProvider";

const FAQ = () => {
  const { toggleTheme, isDarkMode } = useTheme();
    return (
      
        <div className={` hero min-h-screen bg-base-200 text-black ${
          isDarkMode ? "bg-base-100 text-slate-500" : "bg-white text-black"
        } `}>
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img
          src="https://i.ibb.co/M9qWcKp/FAQ.png" 
          className="max-w-xs lg:max-w-sm rounded-lg shadow-2xl "
          alt="FAQ"
        />
        <div className="w-full lg:w-1/2  mr-8">
          <h1 className="text-5xl font-bold pb-8">
            Frequently Asked Questions
          </h1>
          <div className="collapse collapse-arrow bg-rose-100">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
            How do I place an order
            </div>
            <div className="collapse-content">
              <p>
              To place an order, simply browse our product catalog, select the items you want, and click the 'Add' button. Then, proceed to the checkout page, enter your shipping details, and choose a payment method.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-amber-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            Do you offer international shipping?
            </div>
            <div className="collapse-content">
              <p>
              Yes, we offer international shipping to a wide range of destinations. During checkout, you can select your country, and we'll provide shipping options and estimated delivery times.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-cyan-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            What payment methods are accepted?
            </div>
            <div className="collapse-content">
              <p>
              We accept major credit cards, PayPal, and other secure payment methods at checkout. Your payment information is encrypted and protected to ensure a safe transaction.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-lime-200 ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            What is our return policy?
            </div>
            <div className="collapse-content">
              <p>
              Our return policy allows you to return items within 30 days of purchase for a full refund or exchange. Please review our detailed return policy on our website for specific guidelines.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-indigo-100">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            How can I contact customer support?
            </div>
            <div className="collapse-content">
              <p>
              You can reach our dedicated customer support team through email at support@nosupport.com. We're here to assist you with any questions or concerns you may have.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default FAQ;
