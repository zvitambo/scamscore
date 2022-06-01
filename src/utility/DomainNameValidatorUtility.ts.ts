

export const CheckIsValidDomain = (domain: string) => { 
    var re = new RegExp(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/); 
    return domain.match(re);
} 


const IsValidDomain = (domain: string) => {
  return /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/.test(
    domain
  );
}; 