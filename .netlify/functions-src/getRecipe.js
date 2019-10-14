import recipes from '../../src/recipes/index';

exports.handler = function(event, context, callback) {
  const path = event.path || null;
  const id = path.split('/').slice(-1)[0];
  const r = recipes.getRecipe(id);

  // const img = require(`../../src/assets/recipes/${r.image}`);
  // console.log(img);

  // const img = require(`../../src/assets/recipes/${r.image}`);
  // console.log('img: ', img);
  // r.img = img;

  return callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=3600', // 60 minutes.
    },
    body: JSON.stringify({ recipe: r }),
  });
};
