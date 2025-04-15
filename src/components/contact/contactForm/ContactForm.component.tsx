import Swal from 'sweetalert2';
import './ContactForm.css';
import { translate } from "../../../lang/utils/TranslationUtils";

export const ContactForm = () => {
    const POPUP_TITLE: string = translate("CONTACT.THANK_YOU");
    const POPUP_MESSAGE: string = translate("CONTACT.MESSAGE_SENT_SUCCESSFULLY");

    const onSubmit = async (event: any) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "fae499eb-251a-4416-aa33-cbbd07f64665");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: POPUP_TITLE,
                text: POPUP_MESSAGE,
                icon: "success"
            });
            event.target.reset();   
        }
      };

    return <>
        <form onSubmit={onSubmit}>
            <h1>{translate("CONTACT.CONTACT_FORM")}</h1>
            <div className="input-box">
                <label className="label">{translate("CONTACT.NAME_AND_SURNAME")}</label>
                <input type="text" className="field" placeholder={translate("CONTACT.NAME_AND_SURNAME_PLACEHOLDER")} name="name" required />
            </div>
            <div className="input-box">
                <label className="label">{translate("CONTACT.EMAIL")}</label>
                <input type="email" className="field" placeholder={translate("CONTACT.EMAIL_PLACEHOLDER")} name="email" required />
            </div>
            <div className="input-box">
                <label className="label">{translate("CONTACT.MESSAGE")}</label>
                <textarea name="message" className="field message" placeholder={translate("CONTACT.MESSAGE_PLACEHOLDER")} required></textarea>
            </div>
            <button type="submit">{translate("CONTACT.SUBMIT_MESSAGE")}</button>
        </form>
    </>
}