export const post = (url, formData) => {
  return new Promise((resolve, reject) => {
      fetch(url, {
          method: "POST",
          body: formData
      }).then(response => {
        resolve(response.json());
      }).catch(err => {
        reject(err);
      })
  })
};

export const get = (url, formData) => {
  return new Promise((resolve, reject) => {
      fetch(url, {
          method: "GET"
      }).then(response => {
        resolve(response.json());
      }).catch(err => {
        reject(err);
      })
  })
};