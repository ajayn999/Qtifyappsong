import React, { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./Faqs.css";
const accordianData = [
  {
    id: 1,
    title: "Is QTify free to use?",
    description: "Yes! It is 100% free, and has 0% ads!",
  },

  {
    id: 2,
    title: "Can I download and listen to songs offline?",
    description:
      "Sorry, unfortunately we don't provide the service to download any songs.",
  },
];

const Faqs = () => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  useEffect(() => {});
  return (
    <div className="faqs">
      <div className="faq_title">FAQs</div>

      <div className="accordian">
        {accordianData.map((data) => {
          return (
            <div
              key={data.id}
              className={`${
                clicked === data.id
                  ? "accrodian_box accrodian_box-active"
                  : "accrodian_box"
              }`}
              onClick={() => handleToggle(data.id)}
            >
              <div
                className="accordian_header"
                style={{
                  border:
                    clicked === data.id ? "1px solid black" : "1px solid white",
                }}
              >
                <p className="accordian_title">{data.title}</p>

                <div>
                  {clicked == data.id ? (
                    <FiChevronUp className="icon" />
                  ) : (
                    <FiChevronDown className="icon" />
                  )}
                </div>
              </div>

              <div
                className="description"
                style={{
                  height: clicked === data.id ? "81px" : 0,
                  overflow: "hidden",
                }}
              >
                <p>{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
