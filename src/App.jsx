import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/fernandadiasm.png',
      name: 'Fernanda Dias',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Olá pessoal ✨' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio do github. O projeto se chama Feed, ele é bem simples, porque é o meu primeiro projeto feito em React. Ele simula o feed das redes sociais, com funcionalidades de fazer comentários, dar likes e apagar comentários. 🚀' },
      { type: 'link', content: 'github.com/fernandadiasm/feed' }
    ],
    publishedAt: new Date('2023-03-030 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-04-13 15:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}
