
module.exports = {
  
    create : function(req, res){
        var intitule = req.param('intitule');
        var delaia = req.param('delaia');
        var perimetre = req.param('perimetre');
        var responsable = req.param('responsable');
      
         Corrective.create({intitule:intitule, delaia:delaia, perimetre:perimetre, responsable:responsable}, function(err){
             if(err){
                 return res.send(err);
             }
             else{
                 res.redirect('/mesac');
             }
         })
     },

   
     affiche: function(req, res){
            Corrective.find(function(err, ac){
           if(err){
               res.send(err);
           }
           else{
              
               res.render('pages/corrective', {ac: ac});
               
           }
       })
    },


};

