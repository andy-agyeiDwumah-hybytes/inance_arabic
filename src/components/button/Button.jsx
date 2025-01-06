export default function Button({ languageText, handleClick, styles }) {
  return (
    <button type="button" onClick={handleClick} className={styles.languageBtn}>
      {languageText}
    </button>
  );
}
