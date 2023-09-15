// Enum for Bimestre
enum Bimestre {
    PRIMEIRO = "PRIMEIRO",
    SEGUNDO = "SEGUNDO",
    TERCEIRO = "TERCEIRO",
    QUARTO = "QUARTO",
  }
  
  // Enum for Disciplina
  enum Disciplina {
    BIOLOGIA = "Biologia",
    ARTES = "Artes",
    GEOGRAFIA = "Geografia",
    SOCIOLOGIA = "Sociologia",
  }
  
  // Interface for Resultado
  export interface Resultado {
    id: string;
    bimestre: Bimestre;
    disciplina: Disciplina;
    nota: number;
    criadoEm: Date;
    atualizadoEm: Date;
  }
  