const formatDate = (date, showTime = false, locale = 'pt-BR') => {
  try {
      const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        ...(showTime && { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      };
      
      const dateObj = new Date(date);
      return new Intl.DateTimeFormat(locale, options).format(dateObj);
    } catch (e){
      return "data invalida."
    }
  };

  export default formatDate