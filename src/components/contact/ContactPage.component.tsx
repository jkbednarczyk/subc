import React from "react";
import './ContactPage.css';
import Swal from 'sweetalert2'

export const ContactPage = () => {

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
                title: "Dziękujemy!",
                text: "Wiadomość została wysłana",
                icon: "success"
              });
        }
      };

    return <>
        <section className="contact-info">
            <div>
                Kontakt
            </div>
        </section>
        <section className="contact-form">
            <form onSubmit={onSubmit}>
                <h2>Formularz kontaktowy</h2>
                <div className="input-box">
                    <label>Imię i nazwisko</label>
                    <input type="text" className="field" placeholder="Wpisz imię i nazwisko" name="name" required />
                </div>
                <div className="input-box">
                    <label>Adres e-mail</label>
                    <input type="email" className="field" placeholder="Wpisz adres e-mail" name="email" required />
                </div>
                <div className="input-box">
                    <label>Wiadomość</label>
                    <textarea name="message" className="field message" placeholder="Wpisz swoją wiadomość" required></textarea>
                </div>
                <button type="submit">Wyślij</button>
            </form>
        </section>
    </>
};