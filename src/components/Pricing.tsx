import { useState } from "react";

interface Plans {
  name: string;
  price: string;
  isFirst: boolean;
  isPopular: boolean;
  features: string[];
}
export const Pricing = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prevState) => !prevState);
  };

  const plans: Plans[] = [
    {
      name: "Basic",
      price: !isOn ? "49" : "99",
      isFirst: true,
      isPopular: false,
      features: [
        "Intuitive task creation and tracking",
        "Basic collaboration tools",
        "Deadline reminder functionalities",
        "User friendly interface",
      ],
    },
    {
      name: "Standard",
      price: !isOn ? "99" : "199",
      isFirst: false,
      isPopular: true,
      features: [
        "Intuitive task creation and tracking",
        "Basic collaboration tools",
        "Deadline reminder functionalities",
        "User friendly interface",
      ],
    },
    {
      name: "Premium",
      price: !isOn ? "199" : "299",
      isFirst: false,
      isPopular: false,
      features: [
        "Intuitive task creation and tracking",
        "Basic collaboration tools",
        "Deadline reminder functionalities",
        "User friendly interface",
      ],
    },
  ];

  return (
    <section className="flex flex-col items-center py-16">
      <p className="border-2 border-gray-100 bg-white py-1 px-3 w-fit rounded-[50px]">
        Pricing & Plans
      </p>
      <p className="text-3xl lg:text-4xl font-bold text-center my-5 lg:my-8 px-5">
        Explore and choose the perfect plan for your needs
      </p>
      <div className="flex items-center my-2 lg:my-4">
        <span className="mr-2">Monthly</span>
        <div
          className={`relative inline-flex items-center cursor-pointer bg-gray-200 rounded-full w-12 h-6 border-2 border-gray-300`}
          onClick={handleToggle}
        >
          <input type="checkbox" className="sr-only" checked={isOn} readOnly />
          <span
            className={`transform transition-transform duration-200 ease-in-out ${
              isOn ? "translate-x-[26px]" : "translate-x-0.5"
            } inline-block w-4 h-4 bg-gray-700 rounded-full shadow-md`}
          />
        </div>
        <span className="ml-2">Yearly</span>
      </div>
      <div className="flex max-md:flex-col md:flex-row gap-6 xl:gap-10 px-5 mt-5">
        {plans.map((p) => (
          <div
            key={p.name}
            className="border-2 border-gray-200 bg-white rounded-2xl max-md:w-[calc(100vw-5rem)] flex flex-col"
          >
            <div className="flex flex-col gap-y-1 bg-gray-100 p-3 border-b-2 rounded-t-2xl border-gray-200 relative py-5">
              <p className="font-semibold text-gray-700 xl:text-xl">{p.name}</p>
              {p.isPopular && (
                <p className="border-2 border-gray-200 bg-warm py-1.5 px-3 w-fit rounded-full absolute top-2 right-2 text-sm shadow-sm">
                  Most popular
                </p>
              )}
              <p className="text-3xl xl:text-4xl font-bold mt-1">${p.price}</p>
              <p className="text-gray-600 text-sm">
                per user / {!isOn ? "month" : "year"}
              </p>
            </div>
            <div className="flex flex-col gap-y-3 mb-2 mt-1 p-5">
              {!p.isFirst && (
                <span className="text-xs xl:text-sm text-gray-500">
                  everything included in the previous plan plus...
                </span>
              )}
              {p.features.map((f) => (
                <div key={f} className="flex items-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-white size-6 bg-coral p-1 rounded-full"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <p className="text-sm xl:text-base">{f}</p>
                </div>
              ))}
            </div>
            <div className="px-5 md:px-3 lg:px-5 flex flex-col gap-y-3 mt-auto my-6">
              <button className="border-gray-200 border-[1px] py-2.5 rounded-2xl md:rounded-lg xl:rounded-2xl bg-black text-white shadow-md w-full">
                Start 30 Days Free Trial
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
