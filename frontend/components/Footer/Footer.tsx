import css from './Footer.module.css';
export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} Snipped. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Dmytro Hlushchenko</p>
          <p>Contact us:</p>
        </div>
      </div>
    </footer>
  );
}
