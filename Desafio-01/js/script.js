var confirmed = false;

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  
  const validate = () => {
    const $result = $('#result');
    const email = $('#email').val();
    $result.text('');
  
    if (validateEmail(email)) {
      $result.text('E-mail válido');
      $result.css('color', 'white');
      confirmed = true;
    } else {
      $result.text('E-mail inválido');
      $result.css('color', 'white');
      confirmed = false;
    }
    return false;
  }

$('#email').on('input', validate);

 function confirm() {
  if(validate && $('#email').val() != "" && confirmed == true){
    $('#result2').text('E-mail ' + $('#email').val() + ' cadastrado com sucesso!');
    $('#result3').text('Seja bem-vindo(a), ' + $('#name').val() + '!');
    $('#email').val("");
    $('#name').val("");
  }
}
