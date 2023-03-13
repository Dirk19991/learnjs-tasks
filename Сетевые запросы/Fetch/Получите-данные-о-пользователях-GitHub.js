async function getUsers(names) {
  const tasks = [];

  for (let name of names) {
    let task = fetch(`https://api.github.com/users/${name}`)
      .then((res) => {
        if (res.status != 200) {
          return null;
        } else {
          return res.json();
        }
      })
      .catch((err) => {
        console.log(err);
      });

    tasks.push(task);
  }

  let results = await Promise.all(tasks);
  console.log(results);
  return results;
}

getUsers(['Dirk19991']);
