/**
 * Action.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
 
  attributes: {

    numnc: {type : 'string', required: true},
    causea: {type: 'string'},     
    causeb: {type: 'string'},   
    causec: {type: 'string'},   
    caused: {type: 'string'},   
    causee: {type: 'string'},   
    causef: {type: 'string'},

  },
  datastore:'default',
};

