import "./SuccessConfirm.css";

export default function SuccessConfirm({ currentPage }) {
  return (
    currentPage === 5 && (
      <div className="final-results">
        <img
          className="final-results__image"
          src="/assets/images/icon-thank-you.svg"
          alt="thank you"
        ></img>
        <h2 className="final-results__title">Thank you!</h2>
        <p className="final-results__description">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    )
  );
}
