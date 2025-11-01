import axios from '../axios';

export const getNavButtonsReq = async() => {
  try {
    const response = await axios.get('/admin/get-nav-buttons',);
    return response;

  } catch (err) {
    return err.response;
  }
};

export const getTextsReq = async() => {
    try {
      const response = await axios.get('/admin/get-texts',);
      return response;
  
    } catch (err) {
      return err.response;
    }
};

export const createNavButtonReq = async(title, index) => {
    try {
      const response = await axios.post('/admin/create-nav-button', {
        title: title,
        index: index
      });
      return response;
  
    } catch (err) {
      return err.response;
    }
};

export const deleteNavButtonReq = async(buttonId) => {
    try {
      const response = await axios.delete('/admin/delete-nav-button', {
        params: {
            buttonId: buttonId
        }
      });
      return response;
  
    } catch (err) {
      return err.response;
    }
};

export const updateNavButtonReq = async(buttonId, title, index) => {
    try {
      const response = await axios.put('/admin/update-nav-button', {
        buttonId: buttonId,
        title: title,
        index: index
      });
      return response;
  
    } catch (err) {
      return err.response;
    }
};

export const updateTextReq = async(textId, title) => {
    try {
      const response = await axios.put('/admin/update-text', {
        textId: textId,
        newText: title,
      });
      return response;
  
    } catch (err) {
      return err.response;
    }
};


