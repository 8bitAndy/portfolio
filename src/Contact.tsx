import { useCallback, useState, type ChangeEvent, type FormEvent } from "react";
import './Contact.css'
import Modal from './Modal';
import emailjs from '@emailjs/browser';

type FormFields = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type ModalInfo = {
    title: string;
    message: string;
};

const emptyForm: FormFields = { name: '', email: '', subject: '', message: '' };

// Checks text@text.text with no spaces
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
    const [form, setForm] = useState<FormFields>(emptyForm);
    // Null when no modal is showing
    const [modal, setModal] = useState<ModalInfo | null>(null);
    // True while the email is being sent
    const [sending, setSending] = useState(false);

    // Stable so the modal's Esc listener isn't reset on every render
    const closeModal = useCallback(() => setModal(null), []);

    // Update the field that changed
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    // Check every field before "sending"
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const allFilled = Object.values(form).every((value) => value.trim() !== '');
        const emailValid = emailPattern.test(form.email.trim());

        if (!allFilled || !emailValid) {
            setModal({
                title: 'Missing details',
                message: 'Please fill out all fields with a valid email address.',
            });
            return;
        }

        setSending(true);
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: form.name,
                    email: form.email,
                    subject: form.subject,
                    message: form.message,
                },
                { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
            );
            setModal({
                title: 'Email sent!',
                message: 'Thanks for reaching out. I will get back to you soon.',
            });
            setForm(emptyForm);
        } catch {
            setModal({
                title: 'Something went wrong',
                message: 'Your email could not be sent. Please try again later.',
            });
        } finally {
            setSending(false);
        }
    };

    return (
        <section className="contact">
            <h1 className="contact-title">Get in contact</h1>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <label className="contact-field">
                    <span className="contact-label">Name</span>
                    <input
                        className="contact-input"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                    />
                </label>

                <label className="contact-field">
                    <span className="contact-label">Email</span>
                    <input
                        className="contact-input"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </label>

                <label className="contact-field">
                    <span className="contact-label">Email subject</span>
                    <input
                        className="contact-input"
                        name="subject"
                        type="text"
                        value={form.subject}
                        onChange={handleChange}
                    />
                </label>

                <label className="contact-field">
                    <span className="contact-label">Message</span>
                    <textarea
                        className="contact-input contact-textarea"
                        name="message"
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit" className="contact-submit" disabled={sending}>
                    {sending ? 'Sending...' : 'Submit'}
                </button>
            </form>

            {modal && (
                <Modal title={modal.title} message={modal.message} onClose={closeModal} />
            )}
        </section>
    )
}
