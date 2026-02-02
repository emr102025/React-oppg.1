import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/emr102025?tab=repositories"
        target="_blank"
        className={styles.link}
      >
        Check out my Github for more
      </a>
    </footer>
  );
}
