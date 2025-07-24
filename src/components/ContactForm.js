'use client'; 

import { useState } from 'react'; 
import styles from './ContactForm.module.css';

export default function ContactForm() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert(`Obrigado, ${name}! Sua mensagem foi enviada.`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h2 className={styles.title}>Fale Conosco</h2>
          <p className={styles.subtitle}>Envie sua mensagem e retornaremos em breve.</p>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)} 
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)} 
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Enviar Mensagem</button>
          </form>
        </div>
        <div className={styles.infoContainer}>
          <h3>Informações de Contato</h3>
          <p>Av. Antonio da Silva Cunha Bueno, 351<br/>Assis/SP</p>
          <p>(18) 98125-8500</p>
          <p>contato@allurehomeassis.com.br</p>
          <h4>Horários</h4>
          <p>Seg a Sex: 09h às 18h<br/>Sábado: Fechado</p>
        </div>
      </div>
    </section>
  );
}