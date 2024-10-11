// ======== > src/utils/classColors.ts < ========
export const getClassColor = (classe: string): string => {
    switch (classe) {
      case "Tank":
        return "#EF4444"; // Vermelho
      case "DPS":
        return "#F97316"; // Laranja
      case "Mage":
        return "#EAB308"; // Amarelo
      case "Suporte":
        return "#22C55E"; // Verde
      default:
        return "#fff"; // Branco padrão
    }
  };
  