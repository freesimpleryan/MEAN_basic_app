var gmtools = require('../controllers/gmtools.server.controller');

module.exports = function(app){
		
	app.get('/gmtools', gmtools.renderAll);
	app.get('/gmtools/map', gmtools.renderMap);
};
