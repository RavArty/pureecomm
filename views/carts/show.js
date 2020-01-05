const layout = require('../layout');

module.exports = ({ items }) => {
  const renderitems = items
    .map(item => {
      return `
      <div>${item.product.title}</div>
    `;
    })
    .join('');

  return layout({
    content: `
        <h1>Cart</h1>
        ${renderitems}
      `
  });
};
