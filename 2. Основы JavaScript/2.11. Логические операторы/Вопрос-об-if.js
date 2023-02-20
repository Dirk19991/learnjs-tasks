if (-1 || 0) alert('first');
// выполнится, блок if вернет -1

if (-1 && 0) alert('second');
// не выполнится, блок if вернет 0

// prettier-ignore
if (null || -1 && 1) alert( 'third' );
// выполнится, блок if вернет 1
