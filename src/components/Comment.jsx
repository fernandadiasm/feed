import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(prevState => prevState + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://camo.githubusercontent.com/5df9498fb809e092756f6cda6b64746eb4f46ddc1b2d85ee894e844cf8da2da6/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f313031353635333830333739313438373039372f313036323736363435343837343834393330312f536d61727453656c6563745f32303232313233315f3232303433375f547769747465722e6a70673f77696474683d353630266865696768743d353632" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fernanda Dias</strong>
              <time title="13 de Março às 08:17h" dateTime="2023-05-11 08:17:15">
                Cerca de 3h atrás
              </time>
            </div>
            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir<span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
