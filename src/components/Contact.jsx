import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import InfiniteText from "./InfiniteText";
import { useTranslation } from "@/app/i18n/client";
import Lottie from "lottie-react";
import { UilEnvelope } from "@iconscout/react-unicons";
import linkedinAnimation from "/public/linkedin-json.json";
import workingAnimation from "/public/working-json.json";
import githubAnimation from "/public/github-json.json";

export const Contact = (props) => {
  const form = useRef();

  const [formState, setFormState] = useState("initial");

  const { t } = useTranslation(props.lng);

  const sendEmail = (e) => {
    e.preventDefault();

    setFormState("loading");

    emailjs
      .sendForm(
        "service_dzb6brc",
        "template_4j54djo",
        form.current,
        "OiM8_PrRocIyaTjH9"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormState("sent");
          setTimeout(() => {
            setFormState("initial");
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <InfiniteText lng={props.lng} />

      <form ref={form} onSubmit={sendEmail}>
        <div className="infos-container">
          <div className="input-block">
            <label>{t("contact.nom")}</label>
            <input
              type="text"
              required
              name="user_name"
              placeholder="ex: Jean Dupont"
            />
          </div>

          <div className="input-block">
            <label>{t("contact.email")}</label>
            <input
              required
              type="email"
              pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
              name="user_email"
              placeholder="jean.dupont@gmail.com"
            />
          </div>
          <div className="input-block">
            <label>{t("contact.message")}</label>
            <textarea rows={5} name="message" placeholder={t("contact.text")} />
          </div>
        </div>

        <button
          type="submit"
          value="Send"
          className="submit"
          style={{ background: formState === "sent" ? "#2ecc40" : "#1d3557" }}
        >
          {formState === "loading" && <span class="loader"></span>}
          {formState === "initial" && t("contact.envoyer")}
          {formState === "sent" && t("contact.envoye")}
        </button>
      </form>

      <div className="links-container">
        <a href="mailto:valere.douille@gmail.com" alt="mail">
          <UilEnvelope className="link mail" />
        </a>

        <a
          href="https://www.linkedin.com/in/val%C3%A8re-douill%C3%A9-78b267a8/"
          target="__blank"
          alt="linkedin"
        >
          <Lottie className="link linkedin" animationData={linkedinAnimation} />
        </a>
        <a href="https://github.com/valeredou" target="__blank">
          <Lottie className="link github" animationData={githubAnimation} />
        </a>
      </div>
    </div>
  );
};
