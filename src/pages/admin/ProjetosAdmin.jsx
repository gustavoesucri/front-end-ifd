function ProjetosAdmin() {
  //   const [projetos, setProjetos] = useState([]);
  //   const [selected, setSelected] = useState(null);

  //   useEffect(() => {
  //     api.get("/projetos").then((res) => setProjetos(res.data));
  //   }, []);

  //   const handleSalvar = (formData) => {
  //   if (selected) {
  //     api
  //       .put(`/projetos/${selected.id}`, formData, {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       })
  //       .then(() => {
  //         setSelected(null);
  //         atualizarLista();
  //       });
  //   } else {
  //     api
  //       .post("/projetos", formData, {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       })
  //       .then(atualizarLista);
  //   }
  // };

  //   const atualizarLista = () => {
  //     api.get("/projetos").then((res) => setProjetos(res.data));
  //   };

  //   const handleEditar = (projeto) => {
  //     setSelected(projeto);
  //   };

  //   const handleExcluir = (id) => {
  //     api.delete(`/projetos/${id}`).then(atualizarLista);
  //   };

  return (
    <div>
      <h2>Gerenciar Projetos</h2>
      {/* <ProjetoForm onSubmit={handleSalvar} projeto={selected} />
      <ul>
        {projetos.map((p) => (
          <li key={p.id}>
            {p.nome}
            <button onClick={() => handleEditar(p)}>Editar</button>
            <button onClick={() => handleExcluir(p.id)}>Excluir</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default ProjetosAdmin;
