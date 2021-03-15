/**
 * ActionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Corrective = require("../models/Corrective");

module.exports = {

    
    causecreate: function(req, res){
        var numnc = req.param('numnc');
        var causea = req.param('causea');
        var causeb = req.param('causeb');
        var causec = req.param('causec');
        var caused = req.param('caused');
        var causee = req.param('causee');
        var causef = req.param('causef');
      
        Action.create({numnc:numnc, causea:causea, causeb:causeb, causec:causec, caused:caused, causee:causee, causef:causef}, function(err){
          if(err){
            return res.send(err);
          }
          else{
            res.redirect('/add');
          }
        })
      },
  
    afficheact: function(req, res){
        Action.find(function(err, ac){
           if(err){
               res.send(err);
           }
           else{
              
               res.render('pages/action', {ac: ac});
               
           }
       })
    },


    ajoutera: function(req, res){
      var intitule = req.param('intitule');
      var type = req.param('type');
      var origine = req.param('origine');
      var statut = req.param('statut');
      var ddl = req.param('ddl');
      var ncas = req.param('ncas');
      var site = req.param('site');
      var processus = req.param('processus');
      var perimetre = req.param('perimetre');
      var responsable = req.param('responsable');
      var delef = req.param('delef');
      var critere = req.param('critere');
    
      Actions.create({intitule:intitule, type:type, origine:origine, statut:statut, ddl:ddl, site:site, processus:processus, perimetre:perimetre, responsable:responsable, delef:delef, critere:critere, ncas:ncas}, function(err){
        if(err){
          return res.send(err);
        }
        else{
          res.redirect('/mesac');
        }
      })
    },

    showw: function(req, res){
      Actions.find(function(err, ac){
         if(err){
             res.send(err);
         }
         else{
            
             res.render('pages/mesactions', {ac: ac});
             
         }
     })
  },

 
  affiche: function(req, res){
    Actions.find(function(err, ac){
   if(err){
       res.send(err);
   }
   else{
      
       res.render('pages/corrective', {ac: ac});
       
   }
})
},

};

