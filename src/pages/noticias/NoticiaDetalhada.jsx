import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api.jsx";
import parse from "html-react-parser";

function NoticiaDetalhada() {
  const { slug } = useParams(); // Pega o slug da URL
  const [nomeNoticia, setNomeNoticia] = useState("Título da Notícia");
  const [paragrafos, setParagrafos] = useState([]);
  const [imagem, setImagem] = useState();

  useEffect(() => {
    api
      .get(`/noticias/slug/${slug}`)
      .then((response) => {
        try {
          setNomeNoticia(response.data.nomeNoticia);
        } catch (error) {
          console.error(`Erro ao definir o título da notícia: ${slug}`, error);
        }

        try {
          setParagrafos(response.data.paragrafos);
        } catch (error) {
          console.error(
            `Erro ao definir os parágrafos da notícia: ${slug}`,
            error,
          );
        }

        try {
          setImagem(response.data.imagemUrl);
        } catch (error) {
          console.error(
            `Erro ao definir as imagens da notícia: ${slug}`,
            error,
          );
        }
      })
      .catch((error) => {
        console.error(`Erro ao buscar dados da notícia ${slug}:`, error);
        let mensagemAmigavel = "Erro ao carregar os dados.";

        if (error.response?.status === 404) {
          mensagemAmigavel += " Notícia não encontrada no banco de dados.";
        }

        setParagrafos([`${mensagemAmigavel}`]);
      });
  }, [slug]);

  return (
    <>
      <div>
        {" "}
        {/*Sem className={styles.home} por enquanto */}
        <section>
          {" "}
          {/*Sem className={styles.home} por enquanto */}
          <h1>{`${nomeNoticia}`}</h1>
          {paragrafos.map((paragrafo, index) => (
            <p key={index}>{parse(paragrafo)}</p>
          ))}
        </section>
        <img src={imagem} />
      </div>
      {/* <p>Aqui será a página da noticia detalhado com o slug: {slug}</p> */}
    </>
  );
}

export default NoticiaDetalhada;

// No React, para não quebrar a página se algo estiver faltando, você pode fazer:
//  <h1>{nomeNoticia || "Noticia sem nome"}</h1>
// {paragrafos?.length > 0 ? (
//   paragrafos.map((p, index) => <p key={index}>{p}</p>)
// ) : (
//   <p>Nenhum conteúdo disponível.</p>
// )}
