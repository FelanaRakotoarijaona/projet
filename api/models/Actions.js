/**
 * Corrective.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

 module.exports = {
    
    attributes: {
        intitule: {type : 'string', required: true},
        type: {type: 'string', required: true},     
        origine: {type: 'string', required: true},   
        ddl: {type: 'string', required: true},   
        ncas: {type: 'string'},
        site: {type: 'string', required: true},
        processus: {type: 'string', required: true},
        perimetre: {type: 'string', required: true},
        responsable: {type: 'string', required: true},
        delef: {type: 'string', required: true},
        critere: {type: 'string', required: true},
    },
    datastore: 'default',
  };
  
  