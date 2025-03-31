export const formatDate = (dateString) => {
    if (!dateString) return "";
  
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };
  
  export const getYearFromDate = (dateString) => {
    if (!dateString) return "";
  
    const date = new Date(dateString);
    return date.getFullYear(); // Retorna apenas o ano
  };
  