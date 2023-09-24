import { useVisibilityToggle } from "../hooks/useVisibilityToggle";
import { useBodyScrollStop } from "../hooks/useBodyScrollStop";

import type { ReactElement } from "react";

function Form({
  formTitle,
  closeForm,
}: {
  formTitle: string;
  closeForm: () => void;
}) {
  return (
    <div className="w-80 rounded-lg p-4 bg-greyYellowGreen">
      <div className="flex items-center justify-between">
        <h1 className="text-p2-d font-inter font-bold">{formTitle}</h1>
        <button
          className="hover:bg-buckwheaT rounded-full p-1"
          onClick={closeForm}
        >
          <img src="/images/closeIcon.png" alt="Close button" />
        </button>
      </div>
      <form
        className="flex flex-col items-center gap-6 w-full mt-4 text-p2-m font-inter font-medium"
        data-netlify="true"
        method="POST"
        action="https://formsubmit.co/prateek@cloudchef.co"
        encType="multipart/form-data"
      >
        <input type="hidden" name="_cc" value="Aloor@cloudchef.co"></input>
        <input type="hidden" name="_captcha" value="false"></input>
        <input type="hidden" name="_subject" value="New form response"></input>
        <input
          type="hidden"
          name="_next"
          value="https://cloudchef.vercel.app/brand"
        ></input>
        <p className="w-full">
          <label htmlFor="name" className="text-p2-m font-inter font-medium">
            Name*
          </label>{" "}
          <br />
          <input
            className="w-full inline-block rounded-4 mt-1 px-3 py-5 h-5 bg-deepWhite border border-solid border-dough"
            type="text"
            name="name"
            placeholder="Type in your name here"
            required
          />
        </p>
        <p className="w-full">
          <label htmlFor="email" className="text-p2-m font-inter font-medium">
            Email*
          </label>{" "}
          <br />
          <input
            type="email"
            name="email"
            className="w-full inline-block rounded-4 mt-1 px-3 py-5 h-5 bg-deepWhite border border-solid border-dough"
            placeholder="Type here"
            required
          />
        </p>
        <p className="w-full">
          <label
            htmlFor="phoneNumber"
            className="text-p2-m font-inter font-medium"
          >
            Phone number*
          </label>{" "}
          <br />
          <input
            type="tel"
            name="phoneNumber"
            className="w-full inline-block rounded-4 mt-1 px-3 py-5 h-5 bg-deepWhite border border-solid border-dough"
            placeholder="Type here"
            required
          />
        </p>
        <p className="w-full">
          <label
            htmlFor="brandName"
            className="text-p2-m font-inter font-medium"
          >
            Brand/Platform Name
            <span
              className="text-p0-m font-medium font-inter"
              style={{ color: "#636363" }}
            >
              (optional)
            </span>
          </label>{" "}
          <br />
          <input
            type="text"
            className="w-full inline-block rounded-4 mt-1 px-3 py-5 h-5 bg-deepWhite border border-solid border-dough"
            placeholder="Type here"
            name="brandName"
          ></input>
        </p>
        <p className="w-full">
          <label htmlFor="message" className="text-p2-m font-inter font-medium">
            Message{" "}
            <span
              className="text-p0-m font-medium font-inter"
              style={{ color: "#636363" }}
            >
              (optional)
            </span>
          </label>{" "}
          <br />
          <input
            type="text"
            className="w-full inline-block rounded-4 mt-1 px-3 py-5 h-5 bg-deepWhite border border-solid border-dough"
            placeholder="Type here"
            name="message"
          ></input>
        </p>
        <button className="w-full text-center rounded-xl bg-deepBlack text-deepWhite px-6 py-3 text-p2-d font-semibold font-inter">
          <input type="submit" value="Submit" className="cursor-pointer" />
        </button>
      </form>
    </div>
  );
}

const ContactUsButton = ({
  buttonCTA,
  formTitle,
  className,
}: {
  buttonCTA: string;
  formTitle: string;
  className?: string;
}): ReactElement => {
  const { isVisible, show, hide } = useVisibilityToggle(false);
  useBodyScrollStop(isVisible);

  return (
    <>
      <button
        className={`bg-deepBlack rounded-xl px-6 py-3 text-p2-m md:text-p2-d font-inter font-semibold text-deepWhite ${className}`}
        onClick={show}
      >
        {buttonCTA}
      </button>
      {isVisible ? (
        <div className="flex fixed inset-0 w-full h-full justify-center items-center bg-deepBlack bg-opacity-75 z-20">
          <Form formTitle={formTitle} closeForm={hide} />
        </div>
      ) : null}
    </>
  );
};

export { ContactUsButton };
