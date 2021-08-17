$(() => { $('[data-toggle="tooltip"]').tooltip({ container: 'body' }) });
$(() => { $('[data-toggle="popover"]').popover() });

if ($('#toggleAppSidebar').length) {
  $('#toggleAppSidebar').on('click', (event) => {
    $('.apps--sidebar').toggleClass('d-none');
    $('body').css('overflow', 'hidden');
  });

  $('[data-toggle=apps--sidebar]').on('click', (event) => {
    $('.apps--sidebar').addClass('d-none');
    $('body').css('overflow', '');
  });
}



if ($('#toggleEventsSidebar').length) {
  $('#toggleEventsSidebar').on('click', (event) => {
    $('.events--sidebar').toggleClass('d-none');
    $('body').css('overflow', 'hidden');
  });

  $('[data-toggle=events--sidebar]').on('click', (event) => {
    $('.events--sidebar').addClass('d-none');
    $('body').css('overflow', '');
  });
}

$('.dropdown.notifications ul a.nav-link').click(function (e) {
  e.stopPropagation();
  $(this).tab('show');
});