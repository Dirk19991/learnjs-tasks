let room = {
  number: 23,
};

let meetup = {
  title: 'Совещание',
  occupiedBy: [{ name: 'Иванов' }, { name: 'Петров' }],
  place: room,
};

room.occupiedBy = meetup;
meetup.self = meetup;

function replacer(key, value) {
  if (key !== '' && value === meetup) {
    return undefined;
  } else {
    return value;
  }
}

console.log(JSON.stringify(meetup, replacer));
