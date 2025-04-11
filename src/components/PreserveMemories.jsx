import React from "react";
import "./PreserveMemories.css";

const PreserveMemories = () => {
  return (
    <section className="preserve-section">
      <div className="preserve-wrapper">
        <img
          src="https://s3-alpha-sig.figma.com/img/3585/7bf9/c59b4f8322673b7feea2b3efbe256353?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MdKAdAixf75zHECSo5buJ7lM4EFadkpdkHgqQ~QmaBmYsvfsYXqxPnHC2l15UkCWeW~ijZeDNXPwAlnhda9Il6BXhq3B1HTPYzPswUM9q5J8EgtzfPQmAkTCr-rp8XiPi7R0~iq19HFk5wnaovCVu6xDsTH0wIO5rQfIxg9KoZWSTT6rRn485ksaj84D8TeDUy7EJ7XWbre-kXrtG~77D50ArHJ590MRsiNyHzFn3j1K9iIqV2~~P6hErCMIK5AnOCujxDsYrIWSchD4Ieu-judnKiF3ngZAUui5Ew2BMF-VBCcfU7wyZThpR5ZOthAZ3UX-vKQJeGuWWcVbmgH92g__"
          alt="Photo Album"
          className="album-image"
        />

        <div className="preserve-text">
          <h2>Preserve <span>Your Memories</span> in Style</h2>
          <p>
            At Stunning Eventz, we go beyond capturing moments by offering
            beautifully designed photo frames and premium photo books.
            Whether it’s a grand wedding, a charming baby shoot, or a
            corporate event, we ensure your memories are preserved in stunning
            physical formats that you can cherish forever.
          </p>
        </div>

        <div className="frame-box">
          <img
            src="https://s3-alpha-sig.figma.com/img/3585/7bf9/c59b4f8322673b7feea2b3efbe256353?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MdKAdAixf75zHECSo5buJ7lM4EFadkpdkHgqQ~QmaBmYsvfsYXqxPnHC2l15UkCWeW~ijZeDNXPwAlnhda9Il6BXhq3B1HTPYzPswUM9q5J8EgtzfPQmAkTCr-rp8XiPi7R0~iq19HFk5wnaovCVu6xDsTH0wIO5rQfIxg9KoZWSTT6rRn485ksaj84D8TeDUy7EJ7XWbre-kXrtG~77D50ArHJ590MRsiNyHzFn3j1K9iIqV2~~P6hErCMIK5AnOCujxDsYrIWSchD4Ieu-judnKiF3ngZAUui5Ew2BMF-VBCcfU7wyZThpR5ZOthAZ3UX-vKQJeGuWWcVbmgH92g__"
            alt="Framed Couple"
            className="framed-image"
          />
          <button className="order-button">Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default PreserveMemories;
