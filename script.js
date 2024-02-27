document.getElementById('fname').addEventListener('blur', function() {
  var nameInput = document.getElementById('fname');
  var name = nameInput.value;

  var uppercaseName = name.toUpperCase();

  nameInput.value = uppercaseName;
});
