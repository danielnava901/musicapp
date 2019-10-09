export const post = async (url, formData) => {
  let response = await fetch(url, {
        method: "POST",
        body: formData
    });
  
  let data = await response.json();  
  return data;
};

export const get = async (url, formData) => {
  let response = await fetch(url, {
        method: "GET",
        body: formData
    });
  
  let data = await response.json();  
  return data;
};