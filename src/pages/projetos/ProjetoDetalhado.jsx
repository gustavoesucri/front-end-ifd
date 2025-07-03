import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/api.jsx";
import parse from "html-react-parser";

function ProjetoDetalhado() {
  const { slug } = useParams(); // Pega o slug da URL
  const [nomeProjeto, setNomeProjeto] = useState("Nome do Projeto");
  const [paragrafos, setParagrafos] = useState([]);
  const [imagem, setImagem] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/projetos/slug/${slug}`)
      .then((response) => {
        try {
          setNomeProjeto(response.data.nomeProjeto);
        } catch (error) {
          console.error(`Erro ao definir o nome do projeto: ${slug}`, error);
        }

        try {
          setParagrafos(response.data.paragrafos);
        } catch (error) {
          console.error(
            `Erro ao definir os parágrafos do projeto: ${slug}`,
            error,
          );
        }

        try {
          setImagem(response.data.imagemUrl);
        } catch (error) {
          console.error(
            `Erro ao definir as imagens do projeto: ${slug}`,
            error,
          );
        }
      })
      .catch((error) => {
        console.error(`Erro ao buscar dados do projeto ${slug}:`, error);
        let mensagemAmigavel = "Erro ao carregar os dados.";

        if (error.response?.status === 404) {
          mensagemAmigavel += " Projeto não encontrado no banco de dados.";
        }

        setParagrafos([`${mensagemAmigavel}`]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  // Loading com if, antes de renderizar o conteúdo
  if (loading) {
    return <p>Carregando projeto detalhado...</p>;
  }

  return (
    <>
      <div>
        {" "}
        {/*Sem className={styles.home} por enquanto */}
        <section>
          {" "}
          {/*Sem className={styles.home} por enquanto */}
          <h1>{`${nomeProjeto}`}</h1>
          {paragrafos.map((paragrafo, index) => (
            <p key={index}>{parse(paragrafo)}</p> // parse necessário para renderizar tags html no react.
          ))}
        </section>
        <img src={imagem} />
      </div>
      {/* <p>Aqui será a página do projeto detalhado com o slug: {slug}</p> */}
    </>
  );
}

export default ProjetoDetalhado;
