import styles from "./Avatar.module.css";

export function Avatar({ hasBorder = true, src }) {
  return (
    <img
    // se o avatar tiver a hasborder, aplica a boda, caso contrário não.
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}
