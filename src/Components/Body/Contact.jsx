import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './../../../FirebaseConfig';

function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    duvidas: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.nome || !formData.email || !formData.duvidas) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    try {
      await addDoc(collection(db, "mensagens"), formData);
      alert('Mensagem enviada com sucesso!');
      setFormData({ nome: '', email: '', telefone: '', duvidas: '' });
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      alert('Ocorreu um erro ao enviar a mensagem.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          marginTop: 4,
        }}
      >
        <Typography variant="h4" align="center">
          Entre em Contato
        </Typography>

        <TextField
          label="Nome Completo"
          variant="outlined"
          fullWidth
          required
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Telefone"
          variant="outlined"
          fullWidth
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
        />
        <TextField
          label="Dúvidas"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={4}
          inputProps={{ maxLength: 200 }}
          name="duvidas"
          value={formData.duvidas}
          onChange={handleChange}
        />

        <Button variant="contained" type="submit">
          Enviar Mensagem
        </Button>
      </Box>
    </Container>
  );
}

export default Contact;
