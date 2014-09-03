// JavaScript Document

//Var's
var ip = '192.168.0.146:8888';//'10.0.0.6:8888';
var campos,values;
var arrDadosCampos = new Array();
var arrDadosValues = new Array();



//Array
var arrDia04 = new Array();
var arrDia05 = new Array();
var arrDia06 = new Array();


var ExternalURL = 'http://'+ip+'/weyth/adm/';
//var ExternalURL = 'http://www.abrafarmafuturetrends.com.br/beta/';
function onDeviceReady()
{   
        arrDia04 = [];
        arrDia05 = [];
        arrDia06 = [];
        //$('#ulDataUser').empty();
        
         $.when(
                    
                $.getJSON(ExternalURL+'agenda/handleSelectRow/dia/1/isApp/true'), 
                
                $.getJSON(ExternalURL+'agenda/handleSelectRow/dia/2/isApp/true'), 
                
                $.getJSON(ExternalURL+'agenda/handleSelectRow/dia/3/isApp/true')

            ).done(function(b, c, d) {  // or ".done"
            
            
                    var dadosB = b[0].mensagem;
                    $.each(dadosB, function(i, index) {
                $('#listDia04').append(
                                 '<a href="#" class="list-group-item" id="'+index.agendaId+'"><span class="badge">'+index.agendaVagas+' vagas </span>'+
                                 //'<input type="checkbox" class="checkbox checkbox-one" id="'+index.agendaId+'" value="'+index.agendaId+'"/>'+
                                 '<strong>Horário:</strong> '+index.agenda_horarioHora+'<br>'+
                                 '<strong>Tema:</strong> '+index.agendaTitulo+'<br>'+
                                 '<strong>Palestrante:</strong> '+index.palestrantesNome+
                                 '</a>');
                         
                         
                         $('#'+index.agendaId).click(function(index)
                         {
                             if(in_array($(this).attr('id'), arrDia04))
                             {
                                
                                 for(var i=0; i< arrDia04.length; i++)
                                 {
                                     if(arrDia04[i] === $(this).attr('id'))
                                     {
                                         
                                         arrDia04.splice(i, 1);
                                         $(this).removeClass('list-group-item-success');
                                     }
                                 }
                                
                             }
                             else
                             {
                                 arrDia04.push($(this).attr('id'));
                                 $(this).addClass('list-group-item-success');
                                  
                             }
                         });
            });


                    var dadosC = c[0].mensagem;
                    $.each(dadosC, function(i, index) {
                $('#listDia05').append(
                                 '<a href="#" class="list-group-item" id="'+index.agendaId+'"><span class="badge">'+index.agendaVagas+' vagas </span>'+
                                 //'<input type="checkbox" class="checkbox checkbox-one" id="'+index.agendaId+'" value="'+index.agendaId+'"/>'+
                                 '<strong>Horário:</strong> '+index.agenda_horarioHora+'<br>'+
                                 '<strong>Tema:</strong> '+index.agendaTitulo+'<br>'+
                                 '<strong>Palestrante:</strong> '+index.palestrantesNome+
                                 '</a>');
                         
                         $('#'+index.agendaId).click(function(index)
                         {
                             if(in_array($(this).attr('id'), arrDia05))
                             {
                                
                                 for(var i=0; i< arrDia05.length; i++)
                                 {
                                     if(arrDia05[i] === $(this).attr('id'))
                                     {
                                         
                                         arrDia05.splice(i, 1);
                                         $(this).removeClass('list-group-item-success');
                                     }
                                 }
                                
                             }
                             else
                             {
                                 arrDia05.push($(this).attr('id'));
                                 $(this).addClass('list-group-item-success');
                                  
                             }
                         });
            });
               
            
                    var dadosD = d[0].mensagem;
                    $.each(dadosD, function(i, index) {
                $('#listDia06').append(
                                 '<a href="#" class="list-group-item" id="'+index.agendaId+'"><span class="badge">'+index.agendaVagas+' vagas </span>'+
                                 //'<input type="checkbox" class="checkbox checkbox-one" id="'+index.agendaId+'" value="'+index.agendaId+'"/>'+
                                 '<strong>Horário:</strong> '+index.agenda_horarioHora+'<br>'+
                                 '<strong>Tema:</strong> '+index.agendaTitulo+'<br>'+
                                 '<strong>Palestrante:</strong> '+index.palestrantesNome+
                                 '</a>');
                         
                         $('#'+index.agendaId).click(function(index)
                         {
                             if(in_array($(this).attr('id'), arrDia06))
                             {
                                
                                 for(var i=0; i< arrDia06.length; i++)
                                 {
                                     if(arrDia06[i] === $(this).attr('id'))
                                     {
                                         
                                         arrDia06.splice(i, 1);
                                         $(this).removeClass('list-group-item-success');
                                     }
                                 }
                                
                             }
                             else
                             {
                                 arrDia06.push($(this).attr('id'));
                                 $(this).addClass('list-group-item-success');
                                  
                             }
                         });
            });
               
               
               //$('input[type="checkbox"]').checkbox();
                /*
                var dadosB = b[0].mensagem;
                var dadosC = c[0].mensagem;
                var dadosD = d[0].mensagem;
                
                
               //DIA
               $.each(dadosB, function(i, index) {
                   $('#agendaAgendaDiaId').append('<option value="'+index.agenda_diaId+'">'+index.agenda_diaNome+'</option>')
               });
               
               //HORARIO
               $.each(dadosC, function(i, index) {
                   $('#agendaAgendaHorarioId').append('<option value="'+index.agenda_horarioId+'">'+index.agenda_horarioHora+'</option>')
               });
               
               //Palestrantes
               $.each(dadosD, function(i, index) {
                   $('#ckkPalestrantes').append(
                                    '<div class="div-baseCkkCasas" id="div-baseConcessao-'+index.palestrantesId+'">'+
                                        '<div class="div-bg_checkBox"><input data-type="palestrantes" type="checkbox" id="'+index.palestrantesId+'" value="'+index.palestrantesId+'"/>'+
                                        '<label class="inputCheckBox" for="'+index.palestrantesId+'">'+index.palestrantesNome+'</label><br></div>'+
                                    '<br><br></div>');
               });
               */
            });

            ///SEND FORM
            $('#send-form').click(function(e){
                
             
            if($('#participantesNome').val() !== ''){
                   
                var postData = $('#contactForm').serializeArray();
                var formURL = ExternalURL+'agendaparticipantes/handleInsert/';
                
                
                $('#div-form').hide('slow');
                $('#div-sleep').show('slow');
                
                $.post(formURL, 
                {
                    formulario:postData,
                    arrDia04:arrDia04,
                    arrDia05:arrDia05,
                    arrDia06:arrDia06
                }, 
                function(data)
                {
                    alert('Success: '+data.mensagem);
                    $('#send-form').addClass('button-blue'); 
                    
                    if(data.mensagem === 'success')
                    {
                        alert('Dados cadastrados com sucesso!');
                        //window.location.reload();
                    }
                    else
                    {
                        alert('Houve um erro ao efetuar o cadastro!');
                        //window.location = path_url+controller+'/novo';
                    }
                    
                }, 'json')
                
               
            }
            else
            {
                alert('Preencher todos os campos!');
            }
            
        });
        
        
}

function handleGetParticipantesMysql(){       
      
       $('#ulDataUser').empty();
        $.getJSON(ExternalURL+'participantes/handleSelect/front/true',function(data){
            
            console.log(data)
               
        }).done(function(data)
        {
           
             if(data.mensagem === 'fail')
                {
                    alert('Nenhum participante disponível!');//Remover os dados do usuario do banco- adm/lib/php/sm_usuarios.php
                }
                else
                {
                     
                     $.each(data.mensagem, function(i, index)
                     {
                         $('#ulDataUser').append('<li data-id="'+index.participantesId+'" data-nome="'+index.participantesNome+'" data-email="'+index.partipantesEmail+'" id="'+index.participantesId+'"><a href="#" >'+index.participantesNome+'</a></li>');
                         
                         
                         $('#'+index.participantesId).click(function()
                         {
                            var id = $(this).attr('data-id');
                            var nome = $(this).attr('data-nome');
                            var email = $(this).attr('data-email');
                            
                            if(confirm('Tem certeza que deseja cadastrar este participante?'))
                            {
                                $.post(ExternalURL+'participantes/handleUpdateFrontEnd/id/'+$(this).attr('id')+'/status/1/front/true', function(data)
                                {
                                    if(data.mensagem === 'success')
                                    {
                                        //$.mobile.changePage( "home.html", { transition: "fade"});
                                        //window.location = "home.html";
                                        //
                                       db.transaction(handleInsertDataAgenda, handleDbAgendaError);

                                        function handleDbAgendaError(tx, result)
                                        {
                                                alert('Houve um Erro!\nInforme o desenvolvedor.');
                                        }

                                        function handleInsertDataAgenda(tx, result)
                                        {
                                            
                                            tx.executeSql("INSERT INTO tb_participantes (participantesId, participantesNome, participantesEmail) VALUES ("+id+", '"+nome+"','"+email+"')");
                                            
                                            window.location = "home.html";
                                        }
                                        
                                    }
                                    else
                                    {
                                        alert('Houve um erro ao ativar o usuário.\nTeste novamente ou informe o desenvolvedor.');
                                    } 
                                     
                                    
                                }, 'json');
                            };
                            
                         });
                     });
                     
                     $('#baseDadosUser').show('slow');
                     $( "#ulDataUser" ).listview( "refresh" );
                     
                }
        }).fail(function()
        {
            console.log('Fail');
        });
}


/////////// ----  Agenda ---- //////////////
function getAgenda_success(tx, results){       
       
        var len = results.rows.length;

         if(len ==0){
               
                $.getJSON(ExternalURL+'agenda/handleListar/front/true',function(data){

                        
                        if(data.mensagem == 'fail')
                        {
                                alert('E#003 - Informe o Desenvolvedor');//Remover os dados do usuario do banco- adm/lib/php/sm_usuarios.php
                        }
                        else
                        {

                                db.transaction(handleInsertDataAgenda, handleDbAgendaError);

                                function handleDbAgendaError(tx, result)
                                {
                                        alert('Houve um Erro!\nInforme o desenvolvedor.');
                                }

                                function handleInsertDataAgenda(tx, result)
                                {
                                        
                                        $.each(data.mensagem, function(i, index) { 
                                            
                                            var keyData='';
                                            arrDadosCampos = [];
                                            arrDadosValues = [];
                                            campos = '';
                                            values = '';
                                            
                                            $.each(index, function(key, value)
                                            {
                                                arrDadosCampos.push(key);
                                                arrDadosValues.push('"'+html_entity_decode(value)+'"');
                                                
                                            });
                                            
                                            campos = implode(", ", arrDadosCampos);
                                            values = implode(", ", arrDadosValues);
                                            
                                            //DB Class insert
                                            var dbDataBase = new AntsDB();
                                            dbDataBase.handleInsert({tabela:'tb_agenda', txDb:tx, field:campos, value:values});
                                           
                                         
                                        });
                                        
                                }

                        }
                });

         }
}

/////////// ----  Agenda dia ---- //////////////
function getAgendaDia_success(tx, results){       
       
        var len = results.rows.length;
        
         if(len ==0){
               
                $.getJSON(ExternalURL+'agendadia/handleSelect/front/true',function(data){

                        
                        if(data.mensagem == 'fail')
                        {
                                alert('E#003 - Informe o Desenvolvedor');//Remover os dados do usuario do banco- adm/lib/php/sm_usuarios.php
                        }
                        else
                        {

                                db.transaction(handleInsertDataAgenda, handleDbAgendaError);

                                function handleDbAgendaError(tx, result)
                                {
                                        alert('Houve um Erro!\nInforme o desenvolvedor.');
                                }

                                function handleInsertDataAgenda(tx, result)
                                {
                                        
                                        $.each(data.mensagem, function(i, index) { 
                                            
                                            var keyData='';
                                            arrDadosCampos = [];
                                            arrDadosValues = [];
                                            campos = '';
                                            values = '';
                                            
                                            $.each(index, function(key, value)
                                            {
                                                arrDadosCampos.push(key);
                                                arrDadosValues.push('"'+html_entity_decode(value)+'"');
                                                
                                            });
                                            
                                            campos = implode(", ", arrDadosCampos);
                                            values = implode(", ", arrDadosValues);
                                            
                                            //DB Class insert
                                            var dbDataBase = new AntsDB();
                                            dbDataBase.handleInsert({tabela:'tb_agenda_dia', txDb:tx, field:campos, value:values});
                                           
                                         
                                        });
                                        
                                }

                        }
                });

         }
         else
         {
             console.log('Agenda Dia: '+len);
         }
}

/////////// ----  Agenda horario ---- //////////////
function getAgendaHorario_success(tx, results){       
       
        var len = results.rows.length;


         if(len === 0){
               
                $.getJSON(ExternalURL+'agendahorario/handleSelect/front/true',function(data){

                        
                        if(data.mensagem == 'fail')
                        {
                                alert('E#003 - Informe o Desenvolvedor');//Remover os dados do usuario do banco- adm/lib/php/sm_usuarios.php
                        }
                        else
                        {

                                db.transaction(handleInsertDataAgenda, handleDbAgendaError);

                                function handleDbAgendaError(tx, result)
                                {
                                        alert('Houve um Erro!\nInforme o desenvolvedor.');
                                }

                                function handleInsertDataAgenda(tx, result)
                                {
                                        
                                        $.each(data.mensagem, function(i, index) { 
                                            
                                            var keyData='';
                                            arrDadosCampos = [];
                                            arrDadosValues = [];
                                            campos = '';
                                            values = '';
                                            
                                            $.each(index, function(key, value)
                                            {
                                                arrDadosCampos.push(key);
                                                arrDadosValues.push('"'+html_entity_decode(value)+'"');
                                                
                                            });
                                            
                                            campos = implode(", ", arrDadosCampos);
                                            values = implode(", ", arrDadosValues);
                                            
                                            //DB Class insert
                                            var dbDataBase = new AntsDB();
                                            dbDataBase.handleInsert({tabela:'tb_agenda_horario', txDb:tx, field:campos, value:values});
                                           
                                         
                                        });
                                        
                                }

                        }
                });

         }
         else
         {
             console.log('Agenda Horario: '+len);
         }
}

/////////// ----  Agenda tipo ---- //////////////
function getAgendaTipo_success(tx, results){       
       
        var len = results.rows.length;


         if(len === 0){
               
                $.getJSON(ExternalURL+'agendatipo/handleSelect/front/true',function(data){

                        
                        if(data.mensagem == 'fail')
                        {
                                alert('E#003 - Informe o Desenvolvedor');//Remover os dados do usuario do banco- adm/lib/php/sm_usuarios.php
                        }
                        else
                        {

                                db.transaction(handleInsertDataAgenda, handleDbAgendaError);

                                function handleDbAgendaError(tx, result)
                                {
                                        alert('Houve um Erro!\nInforme o desenvolvedor.');
                                }

                                function handleInsertDataAgenda(tx, result)
                                {
                                        
                                        $.each(data.mensagem, function(i, index) { 
                                            
                                            var keyData='';
                                            arrDadosCampos = [];
                                            arrDadosValues = [];
                                            campos = '';
                                            values = '';
                                            
                                            $.each(index, function(key, value)
                                            {
                                                arrDadosCampos.push(key);
                                                arrDadosValues.push('"'+html_entity_decode(value)+'"');
                                                
                                            });
                                            
                                            campos = implode(", ", arrDadosCampos);
                                            values = implode(", ", arrDadosValues);
                                            
                                            //DB Class insert
                                            var dbDataBase = new AntsDB();
                                            dbDataBase.handleInsert({tabela:'tb_agenda_tipo', txDb:tx, field:campos, value:values});
                                           
                                         
                                        });
                                        
                                }

                        }
                });

         }
         else
         {
             console.log('Agenda Tipo: '+len);
         }
}

/////////// ----  Agenda Palestrantes ---- //////////////
function getAgendaPalestrantes_success(tx, results){       
       
        var len = results.rows.length;


         if(len === 0){
                
                $.getJSON(ExternalURL+'agendapalestrantes/handleSelect/front/true',function(data){

                        
                        if(data.mensagem == 'fail')
                        {
                                alert('E#003 - Informe o Desenvolvedor');//Remover os dados do usuario do banco- adm/lib/php/sm_usuarios.php
                        }
                        else
                        {

                                db.transaction(handleInsertDataAgenda, handleDbAgendaError);

                                function handleDbAgendaError(tx, result)
                                {
                                        alert('Houve um Erro!\nInforme o desenvolvedor.');
                                }

                                function handleInsertDataAgenda(tx, result)
                                {
                                        
                                        $.each(data.mensagem, function(i, index) { 
                                            
                                            var keyData='';
                                            arrDadosCampos = [];
                                            arrDadosValues = [];
                                            campos = '';
                                            values = '';
                                            
                                            $.each(index, function(key, value)
                                            {
                                                arrDadosCampos.push(key);
                                                arrDadosValues.push('"'+html_entity_decode(value)+'"');
                                                
                                            });
                                            
                                            campos = implode(", ", arrDadosCampos);
                                            values = implode(", ", arrDadosValues);
                                            
                                            //DB Class insert
                                            var dbDataBase = new AntsDB();
                                            dbDataBase.handleInsert({tabela:'tb_agenda_palestrantes', txDb:tx, field:campos, value:values});
                                           
                                         
                                        });
                                        
                                }

                        }
                });

         }
         else
         {
             console.log('Agenda Palestrantes: '+len);
         }
}
	
/////////// ----  Palestrantes ---- //////////////
function getPalestrantes_success(tx, results){
	
	 var len = results.rows.length;
	 if(len === 0){
               
                $.getJSON(ExternalURL+'palestrantes/handleSelect/front/true',function(data){

                        
                        if(data.mensagem == 'fail')
                        {
                                alert('E#003 - Informe o Desenvolvedor');//Remover os dados do usuario do banco- adm/lib/php/sm_usuarios.php
                        }
                        else
                        {

                                db.transaction(handleInsertDataAgenda, handleDbAgendaError);

                                function handleDbAgendaError(tx, result)
                                {
                                        alert('Houve um Erro!\nInforme o desenvolvedor.');
                                }

                                function handleInsertDataAgenda(tx, result)
                                {
                                        
                                        $.each(data.mensagem, function(i, index) { 
                                            
                                            var keyData='';
                                            arrDadosCampos = [];
                                            arrDadosValues = [];
                                            campos = '';
                                            values = '';
                                            
                                            $.each(index, function(key, value)
                                            {
                                                arrDadosCampos.push(key);
                                                arrDadosValues.push('"'+html_entity_decode(value)+'"');
                                                
                                            });
                                            
                                            campos = implode(", ", arrDadosCampos);
                                            values = implode(", ", arrDadosValues);
                                            
                                            //DB Class insert
                                            var dbDataBase = new AntsDB();
                                            dbDataBase.handleInsert({tabela:'tb_palestrantes', txDb:tx, field:campos, value:values});
                                           
                                         
                                        });
                                        
                                }

                        }
                });

         }
         else
         {
             console.log('Palestrantes: '+len);
         }
}

//////



///////////Global Methods//////////////
 
function handlerEraseDbTransaction(tx, result)
{
	
	tx.executeSql('DROP TABLE IF EXISTS tb_estudos');
	tx.executeSql('DROP TABLE IF EXISTS tb_estudos_tipo');
	tx.executeSql('DROP TABLE IF EXISTS tb_aulas');
	tx.executeSql('DROP TABLE IF EXISTS tb_usuarios');
	tx.executeSql('DROP TABLE IF EXISTS tb_palestras');
	tx.executeSql('DROP TABLE IF EXISTS tb_mynote');
	tx.executeSql('DROP TABLE IF EXISTS tb_palestras_palestrantes');
	tx.executeSql('DROP TABLE IF EXISTS tb_palestrantes');
	
	
	$.getJSON(ExternalURL+'adm/lib/php/sm_usuarios.php?acao=delete&idUser='+UserId+'&format=json',function(data){
		
		if(data.mensagem == 'fail')
		{
			alert('E#003 - Informe o Desenvolvedor');//Remover os dados do usuario do banco- adm/lib/php/sm_usuarios.php
		}
		else
		{
			window.location = "index.html";
		}
	});
	
	
}





/////////// ----  Get USER ---- //////////////
var dadosUser = new Array();

function handleDadosUserError(tx, results){
    console.log('#Erro Ao selecionar os dados do usuario: js_database.js: linha: 225 ');
}

function handleDadosUserSuccess(tx, results){
	//Verificando dados da tabela: PalestrasDados
		var sql = "select * from tb_participantes";
		tx.executeSql(sql, [], getDataUsuarios);
		
		function getDataUsuarios(tx, results)
		{
			var len = results.rows.length;
			
			for (var i=0; i<len; i++) {
				
				var employee = results.rows.item(i);
				//console.log('Grupo: '+employee.usuariosGrupo);
				dadosUser.push(
                                            employee.participantesId,
                                            employee.participantesNome,
                                            employee.participantesEmail,
                                            employee.participantesCrm,
                                            employee.participantesStatus); 
				
				
			}
			
                       
			handleGiveDataUser(dadosUser);
		}

}

function handleGiveDataUser(array)
{
    
    for(var i =0; i<=dadosUser.lenght; i++)
    {
        $('#ulDataUser').append('<li><a href="#">'+dadosUser[i]+'</a></li>');
    };
    
    $('#baseDadosUser').show('slow');
}



///------------ Alerta ---------
function handleAlert(strAlerta, strMessage, strUrl)
{
	
	
	$("#id-alert").fadeIn('slow').click(
		function()
		{
			$("#id-alert").fadeOut('slow'
			  ,function() {
				// Animation complete.
				if(strUrl !=undefined) window.location = strUrl;
					
			  });
		});
	$("#alert-top-message").html(strAlerta);
	$("#alert-content-message").html(strMessage);
}


///SEND FORM
function handleInsertNewCadastro(){
    
        if(handleInputValidacao()){

        var postData = $('#form-cadastro').serializeArray();
        var formURL = ExternalURL+'participantes/handleInsert/front/true';
        
        
        $.post(formURL, { formulario:postData },
        
            function(data)
            {
                //console.log(postData);
            }
            , 'json').done(function(success)
            {
                if(success.mensagem === 'success')
                {
                    alert('Cadastro realizado com sucesso!');
                    window.location.reload();
                }
                else
                {
                    alert('Houve um erro ao efetuar o cadastro!');
                }

            }, 'json').fail(function(error)
            {
                //console.log(error);

            }, 'json');
        }
        else
        {
            alert('Preencher todos os campos!');
        }

}



function handleInputValidacao(){
    var validate = new AntsValidacao();
    return validate.validaData();
}