const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
  return layout({
    content: `
      <form method='POST' enctype='multipart/form-data'>
        <input placeholder='Title' name='title'/>
        ${getError(erros, 'title')}
        <input placeholder='Price' name='price'/>
        ${getError(erros, 'price')}
        <input type='file' name='image'/>
        <button>Submit</button>
      </form>
  `
  });
};
