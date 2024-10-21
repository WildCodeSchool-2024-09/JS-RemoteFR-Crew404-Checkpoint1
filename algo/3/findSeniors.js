


const persons = [
  { name: 'Mary', experience: 2, job: 'web dev' },
  { name: 'Tony', experience: 6, job: 'data analyst' },
  { name: 'John', experience: 2, job: 'data analyst' },
  { name: 'Jane', experience: 6, job: 'web dev' },
  { name: 'Maggie', experience: 2, job: 'web dev' },
  { name: 'Leonardo', experience: 2, job: 'data analyst' },
  { name: 'Carla', experience: 4, job: 'data analyst' },
  { name: 'Mickael', experience: 7, job: 'web dev' },
  { name: 'Penelope', experience: 7, job: 'web dev' },
  { name: 'Homer', experience: 5, job: 'data analyst' },
  { name: 'Leonardo', experience: 2, job: 'data analyst' },
  { name: 'Carla', experience: 4, job: 'web dev' },
  { name: 'Lisa', experience: 3, job: 'web dev' },
  { name: 'Millie', experience: 5, job: 'data analyst' },
  { name: 'Penelope', experience: 7, job: 'web dev' },
];


function findSeniors(persons) {
  const webDevSeniors = [];
  const dataAnalystSeniors = [];

  persons.forEach(person => {
    if (person.experience >= 5 ) {
      if (person.job === 'web dev') {
        webDevSeniors.push(person);
      } else if (person.job === 'data analyst') {
        dataAnalystSeniors.push(person);
      }
    }
  });
  return {
    webDevSeniors, dataAnalystSeniors 
  }; 
}


