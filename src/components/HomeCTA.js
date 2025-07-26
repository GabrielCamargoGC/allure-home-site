import Link from 'next/link';
import styles from './HomeCTA.module.css';

export default function HomeCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2>Pronto para Transformar seu Ambiente?</h2>
        <p>Clique abaixo para falar com nossos especialistas e solicitar um orçamento sem compromisso.</p>
        <Link href="/contato" className={styles.ctaButton}>
          Fale Conosco Agora
        </Link>
      </div>
    </section>
  );
}