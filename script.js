let key = element.attr('name');
let data = false;
if (localStorage[key]) {
  data = JSON.parse(localStorage[key]);
}
if (!data) {
  localStorage[key] = JSON.stringify({});
  data = JSON.parse(localStorage[key]);
}
element.find('input, select').change(on_change);

function on_change(event) {
  let input = $(event.target);
  let key = input.parents('form:first').attr('name');

  let data = JSON.parse(localStorage[key]);

  data[input.attr('name')] = input.val();
  data[input.attr('last-name')] = input.val();

  localStorage[key] = JSON.stringify(data);
}
