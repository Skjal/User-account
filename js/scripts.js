$(function() {

  var username, email, password, country, city, postal, avatar;
  var editPwd, editName, editCity, editPostal, editCountry, editEmail;
  var alertCol = '#ffb3b3';
  var avatarImg = $('#avatar-wrapper img');

  $('#username').focus();
  $('#login-user').focus();

  function storeInfo() {
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('country', country);
    localStorage.setItem('city', city);
    localStorage.setItem('postal', postal);
  }

  function editInfo() {
    localStorage.setItem('username', editName);
    localStorage.setItem('email', editEmail);
    localStorage.setItem('password', editPwd);
    localStorage.setItem('country', editCountry);
    localStorage.setItem('city', editCity);
    localStorage.setItem('postal', editPostal);
  }

  // --------------------- EVENT FUNCTIONS

  function loginFunction() {
    var storedPwd = localStorage.getItem('password');
    var storedUser = localStorage.getItem('username');
    var loginPwd = $('#login-password').val();
    var loginUsername = $('#login-user').val();

    if (loginPwd === storedPwd && loginUsername === storedUser) {
      $('#warning').css('opacity', '0');
    } else {
      $('#warning').css('opacity', '1');
      return false;
    }
  }

  function submitFunction() {
    username = $('#username').val();
    email = $('#email').val();
    password = $('#password').val();
    country = $('#country').val();
    city = $('#city').val();
    postal = $('#postal').val();

    if (username.length<4) {
      $('#username').css('background-color', alertCol);
      alert('Minimum of 4 characters!');
      return false;
    } else if (password.length<4) {
      $('#username').removeAttr('style');
      $('#password').css('background-color', alertCol);
      alert('Minimum of 4 characters!');
      return false;
    } else if (country.length<4) {
      $('#password').removeAttr('style');
      $('#country').css('background-color', alertCol);
      alert('Minimum of 4 characters!');
      return false;
    } else if (city.length<2) {
      $('#country').removeAttr('style');
      $('#city').css('background-color', alertCol);
      alert('Minimum of 2 characters!');
      return false;
    } else if (!validator(username,email,password,country,city,postal) && testMail(email) && testPostal(postal)) {
      storeInfo();
    } else {
      $('#city').removeAttr('style');
      alert('Invalid value');
      return false;
    }
  }

  function updateFunction() {
    editName = $('#Username').val();
    editEmail = $('#E-mail').val();
    editPwd = $('#Password').val();
    editCountry = $('#Country').val();
    editCity = $('#City').val();
    editPostal = $('#Postal').val();

    if (editName.length<4) {
      $('#Username').css('background-color', alertCol);
      alert('Minimum of 4 characters!');
      return false;
    } else if (editPwd.length<4) {
      $('#Username').removeAttr('style');
      $('#Password').css('background-color', alertCol);
      alert('Minimum of 4 characters!');
      return false;
    } else if (editCountry.length<4) {
      $('#Password').removeAttr('style');
      $('#Country').css('background-color', alertCol);
      alert('Minimum of 4 characters!');
      return false;
    } else if (editCity.length<2) {
      $('#Country').removeAttr('style');
      $('#City').css('background-color', alertCol);
      alert('Minimum of 2 characters!');
      return false;
    } else if (!validator(editName,editEmail,editPwd,editCountry,editCity,editPostal) && testMail(editEmail) && testPostal(editPostal)) {
      editInfo();
    } else {
      $('#City').removeAttr('style');
      alert('Invalid value');
      return false;
    }
  }

  // --------------------- VALIDATORS

  function validator(a,b,c,d,e,f) {
    var testSymbol = /[\{\}\[\]\<\>\\\/\$\']+/;
    return testSymbol.test(a,b,c,d,e,f);
  }

  function testMail(mail) {
    var regExMail = /^[\w\.]+@[\w]+\.[\w]{2,4}$/;
    return regExMail.test(mail);
  }

  function testPostal(postal) {
    var regExPostal = /^([0-9]{3})\s?([0-9]{2})$/;
    return regExPostal.test(postal);
  }

  // --- POSTAL LIVE UPDATER

  $('#postal, #Postal').on('keyup', function() {
    var getVal = $(this).val();
    var writeVal = getVal.replace(/^([0-9]{3})\s?([0-9]{2})$/g, "$1 $2");
    $(this).val(writeVal);
  });

  // --------------------- LOGIN PAGE

  $('#login-window').on('keydown', function(e) {
    if (e.which === 13) {
      if (loginFunction() === false) {
        return false;
      } else {
        loginFunction();
        window.location.href = "profile.html";
      }
    }
  });

  $('#login-button').on('click', function () {
    if (loginFunction() === false) {
      return false;
    } else {
      loginFunction();
    }
  });

    // --------------------- CREATE AND UPDATE PAGES

  $('#create-window').on('keydown', function(e) {
    if (e.which === 13) {
      if (submitFunction() === false) {
        return false;
      } else {
        submitFunction();
        window.location.href = "login.html";
      }
    }
  });

  $('#submit-button').on('click', function() {
    if (submitFunction() === false) {
      return false;
    } else {
      submitFunction();
    }
  });

  $('#app2').on('keydown', function(e) {
    if (e.which === 13) {
      if (updateFunction() === false) {
        return false;
      } else {
        updateFunction();
        window.location.href = "profile.html";
      }
    }
  });

  $('#save-button').on('click', function() {
    if (updateFunction() === false) {
      return false;
    } else {
      updateFunction();
    }
  });

  avatarImg.on('click', function() {
    avatarImg.removeAttr('style');
    $(this).css('border', 'solid 2px red');
    avatar = $(this).attr('src');
    localStorage.setItem('avatar', avatar);
    $('#username').focus();
  });

  $('.dropdown-menu a').on('click', function() {
    var yes = confirm('Are you sure?');
    if (yes === true) {
      localStorage.clear();
    } else {
      alert('Goood :)');
      return false;
    }
  });
});
