import { Link } from "react-router-dom";

const WhatsAppAction = () => {
  const whatsAppNumber = "8801820897892";
  const baseUrl = "https://api.whatsapp.com/send/";
  const encodedMessage = "Hi there, is there anyone to assist me?";
  const whatsAppLink = `${baseUrl}?phone=${whatsAppNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;

  return (
    <div className="fixed bottom-[20px] right-[20px] sm:bottom-[30px] sm:right-[40px] 2xl:right-[60px] z-[50]">
      <Link
        to={whatsAppLink}
        className="whatsapp-line relative"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          src="/images/shared/whatsapp.png"
          alt="whatsapp"
          className="w-14 h-14 z-50"
        />
      </Link>
    </div>
  );
};

export default WhatsAppAction;
