import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api.jsx";
import parse from "html-react-parser";

function CampanhaDetalhada() {
  const { slug } = useParams(); // Pega o slug da URL
  const [nomeCampanha, setNomeCampanha] = useState("Nome da Campanha");
  const [paragrafos, setParagrafos] = useState([]);
  const [imagem, setImagem] = useState();

  useEffect(() => {
    api
      .get(`/campanhas/slug/${slug}`)
      .then((response) => {
        try {
          setNomeCampanha(response.data.nomeCampanha);
        } catch (error) {
          console.error(`Erro ao definir o nome da campanha: ${slug}`, error);
        }

        try {
          setParagrafos(response.data.paragrafos);
        } catch (error) {
          console.error(
            `Erro ao definir os parágrafos da campanha: ${slug}`,
            error,
          );
        }

        try {
          setImagem(response.data.imagemUrl);
        } catch (error) {
          console.error(
            `Erro ao definir as imagens da campanha: ${slug}`,
            error,
          );
        }
      })
      .catch((error) => {
        console.error(`Erro ao buscar dados da campanha ${slug}:`, error);

        let mensagemAmigavel = "Erro ao carregar os dados.";

        if (error.response?.status === 404) {
          mensagemAmigavel += " Campanha não encontrada no banco de dados.";
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
          <h1>{`${nomeCampanha}`}</h1>
          {paragrafos.map((paragrafo, index) => (
            <p key={index}>{parse(paragrafo)}</p>
          ))}
        </section>
        <img src={imagem} />
      </div>
      {/* <p>Aqui será a página da campanha detalhado com o id: {id}</p> */}
    </>
  );
}

export default CampanhaDetalhada;

// No React, para não quebrar a página se algo estiver faltando, você pode fazer:
//  <h1>{nomeCampanha || "Campanha sem nome"}</h1>
// {paragrafos?.length > 0 ? (
//   paragrafos.map((p, index) => <p key={index}>{p}</p>)
// ) : (
//   <p>Nenhum conteúdo disponível.</p>
// )}
