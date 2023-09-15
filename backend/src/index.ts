import express from 'express';
import { Resultado } from '../model/Resultado';
import { v4 as uuidv4 } from 'uuid';  // Importing uuid to generate unique IDs
const app = express();

var resultados: Resultado[] = [];

app.use(express.json());  // Middleware to parse JSON bodies

// Existing Resultado model, Bimestre, and Disciplina enums
// Create
app.post('/resultados', (req, res) => {
  const { bimestre, disciplina, nota } = req.body;
  
  // Validation can be added here

  const newResultado: Resultado = {
    id: uuidv4(),
    bimestre,
    disciplina,
    nota,
    criadoEm: new Date(),
    atualizadoEm: new Date(),
  };

  resultados.push(newResultado);

  res.status(201).json(newResultado);
});

// Read
app.get('/resultados', (req, res) => {
    res.status(200).json(resultados);
});

// Delete
app.delete('/resultados/:id', (req, res) => {
    const { id } = req.params;
  
    const index = resultados.findIndex(resultado => resultado.id === id);
    
    if (index === -1) {
      return res.status(404).json({ error: 'Resultado not found' });
    }
  
    resultados.splice(index, 1);
  
    res.status(204).send();
});

// Update Grade for a discipline within a bimestre
app.put('/resultados/:id', (req, res) => {
    const { id } = req.params;
    const { nota } = req.body;
  
    // Find the Resultado entry by id
    const resultadoToUpdate = resultados.find(resultado => resultado.id === id);
  
    if (!resultadoToUpdate) {
      return res.status(404).json({ error: 'Resultado not found' });
    }
  
    // Update the grade (nota)
    resultadoToUpdate.nota = nota;
    resultadoToUpdate.atualizadoEm = new Date();
  
    res.status(200).json(resultadoToUpdate);
});
  
  

app.listen(3333, ()=>{
    console.log("Running on 3333")
})