/**
 * GestionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create : function(req, res){
        var matricule = req.param('matricule');
        var departement = req.param('departement');
        var site = req.param('site');
        var nature = req.param('nature');
        var domaine = req.param('domaine');
        var processus = req.param('processus');
        var pole = req.param('pole');
        var traitproj = req.param('traitproj');
        var sujet = req.param('sujet');
        var datevent = req.param('datevent');
        var delai = req.param('delai');
        var statut = req.param('statut');
        var clientcon = req.param('clientcon');
        var causea = req.param('causea');
        var causeb = req.param('causeb');
        var causec = req.param('causec');
        var caused = req.param('caused');
        var causee = req.param('causee');
        var causef = req.param('causef');
      
         Nc.create({matricule:matricule, departement:departement, domaine:domaine, processus:processus,
             pole:pole, traitproj:traitproj, sujet:sujet, datevent:datevent, delai:delai, statut:statut, clientcon:clientcon,
              site:site, nature:nature, causea:causea, causeb:causeb, causec:causec, caused:caused, causee:causee, causef:causef}, function(err){
             if(err){
                 return res.send(err);
             }
             else{
                 res.redirect('/nc');
             }
         })
     },


     affiche: function(req, res){
        Nc.find(function(err, nc){
           if(err){
               res.send(err);
           }
           else{
              
               res.render('hello', {nc: nc});
               
           }
       })
    },

   // tbord: function(req, res){
     //   Nc.find(function(err, nc){
    /* if(err){
               res.send(err);
           }
           else{
              
               res.render('layouts/layout', {nc: nc});
               
           }
       })
    }, 
*/
tbord: async function(req,res){
  var query="SELECT * FROM nc INNER JOIN action on nc.id=action.numnc::integer";

  try {
    let result = await sails.sendNativeQuery(query);
    console.log(result.rows);
    res.render('layouts/layout', {nc: result.rows});
    
  } catch (error) {
    console.log("error");
    res.send(error);
  }
},





    editernc: function(req, res){
        var id = req.param('id');
        Nc.findOne(id, function (err, nc){
          if(err){
            return res.send(err);
          }
          else{
            res.view('pages/editnc', {nc:nc});
          }
        })
      },

      modifier: function(req, res){
        var id = req.param('id');
        var matricule = req.param('matricule');
        var departement = req.param('departement');
        var site = req.param('site');
        var nature = req.param('nature');
        var domaine = req.param('domaine');
        var processus = req.param('processus');
        var pole = req.param('pole');
        var traitproj = req.param('traitproj');
        var sujet = req.param('sujet');
        var datevent = req.param('datevent');
        var delai = req.param('delai');
        var statut = req.param('statut');
        var clientcon = req.param('clientcon');
        Nc.updateOne(id, {matricule:matricule, departement:departement, domaine:domaine, processus:processus,
            pole:pole, traitproj:traitproj, sujet:sujet, datevent:datevent, delai:delai, statut:statut, clientcon:clientcon,
             site:site, nature:nature}, function(err){
          if(err){
            return res.send(err);
          }
          else{
            res.redirect('/aff');
          }
        })
      },

};

