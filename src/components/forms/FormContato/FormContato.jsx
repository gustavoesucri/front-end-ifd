import React, { useState } from "react";
import styles from "./FormContato.module.css";
import axios from "axios";

function FormContato({ assuntoParceiro }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assuntoEnum, setAssuntoEnum] = useState("");
  const [assuntoLivre, setAssuntoLivre] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [errors, setErrors] = useState({});

  useState(() => {
    console.log(`assuntoParceiro ${assuntoParceiro}`);
    if (assuntoParceiro === "parceiro") {
      setAssuntoEnum(assuntoParceiro);
    }
  }, []);

  const validarEmail = (email) => {
    return /^\S+@\S+\.\S+$/.test(email);
  };

  const handleNomeChange = (e) => {
    setNome(e.target.value);
    if (errors.nome) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.nome;
        return newErrors;
      });
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.email;
        return newErrors;
      });
    }
  };

  const handleAssuntoEnumChange = (e) => {
    setAssuntoEnum(e.target.value);
    if (errors.assuntoEnum) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.assuntoEnum;
        return newErrors;
      });
    }
  };

  const handleAssuntoLivreChange = (e) => {
    setAssuntoLivre(e.target.value);
    if (errors.assuntoLivre) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.assuntoLivre;
        return newErrors;
      });
    }
  };

  const handleMensagemChange = (e) => {
    setMensagem(e.target.value);
    if (errors.mensagem) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.mensagem;
        return newErrors;
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const novosErros = {};

    // Validações de tamanho primeiro
    if (nome.length > 150)
      novosErros.nome = "O nome deve ter no máximo 150 caracteres.";
    if (email.length > 100)
      novosErros.email = "O email deve ter no máximo 100 caracteres.";
    if (assuntoLivre.length > 69)
      novosErros.assuntoLivre =
        "O assunto personalizado deve ter no máximo 69 caracteres.";
    if (mensagem.length > 5000)
      novosErros.mensagem = "A mensagem deve ter no máximo 5000 caracteres.";

    // Validações de preenchimento
    if (!nome.trim()) novosErros.nome = "Insira um nome.";
    if (!email.trim()) novosErros.email = "Insira um e-mail para contato.";
    else if (!validarEmail(email)) novosErros.email = "Email inválido.";
    if (!assuntoEnum) novosErros.assuntoEnum = "Selecione um assunto.";
    if (assuntoEnum === "geral" && !assuntoLivre.trim())
      novosErros.assuntoLivre = "Especifique o Assunto.";
    if (!mensagem.trim())
      novosErros.mensagem = "Preencha o campo com a sua mensagem.";

    setErrors(novosErros);

    if (Object.keys(novosErros).length > 0) {
      alert("Por favor, preencha corretamente os campos do formulário.");
      return;
    }

    // console.log("Dados do formulário:", {
    //   nome,
    //   email,
    //   assuntoEnum,
    //   assuntoLivre,
    //   mensagem,
    // });

    try {
      const response = await axios.post("http://localhost:3001/contato", {
        // URL_DO_SEU_BACKEND/contato
        name: nome,
        email: email,
        subject: assuntoEnum,
        customSubject: assuntoLivre || undefined,
        message: mensagem,
      });

      alert("Mensagem enviada com sucesso!");

      setNome("");
      setEmail("");
      setAssuntoEnum("");
      setAssuntoLivre("");
      setMensagem("");
      setErrors({});
    } catch (error) {
      alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
      console.error(error);
    }
  };

  return (
    <div className={styles.formularioContainer}>
      <h2>Formulário</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.formGroup}>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={handleNomeChange}
            maxLength={150}
            className={styles.formInput}
          />
          {errors.nome && <small className={styles.error}>{errors.nome}</small>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email para contato:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            maxLength={100}
            className={styles.formInput}
          />
          {errors.email && (
            <small className={styles.error}>{errors.email}</small>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="assuntoEnum">Assunto (Seleção):</label>
          <select
            id="assuntoEnum"
            value={assuntoEnum}
            onChange={handleAssuntoEnumChange}
            className={styles.formInput}
          >
            <option value="" disabled hidden>
              Selecione um assunto
            </option>
            <option value="parceiro">Quero ser um parceiro</option>
            <option value="voluntario">Quero ser um voluntário</option>
            <option value="doacoes">Doações</option>
            <option value="site-problems">Problemas no site</option>
            <option value="geral">Outros</option>
          </select>
          {errors.assuntoEnum && (
            <small className={styles.error}>{errors.assuntoEnum}</small>
          )}
        </div>

        {assuntoEnum === "geral" && (
          <div className={styles.formGroup}>
            <label htmlFor="assuntoLivre">Assunto (Outros):</label>
            <input
              type="text"
              id="assuntoLivre"
              placeholder="Especifique o Assunto aqui"
              value={assuntoLivre}
              onChange={handleAssuntoLivreChange}
              maxLength={69}
              className={styles.formInput}
            />
            {errors.assuntoLivre && (
              <small className={styles.error}>{errors.assuntoLivre}</small>
            )}
          </div>
        )}

        <div className={styles.formGroup}>
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea
            id="mensagem"
            placeholder="Mensagem"
            value={mensagem}
            onChange={handleMensagemChange}
            maxLength={5000}
            className={`${styles.formInput} ${styles.textarea}`}
          />
          {errors.mensagem && (
            <small className={styles.error}>{errors.mensagem}</small>
          )}
        </div>

        <button type="submit" className={styles.submitButton}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default FormContato;
