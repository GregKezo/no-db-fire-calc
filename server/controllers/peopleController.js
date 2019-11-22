const people = [
  {"id":1,"first_name":"Jehu","last_name":"Bedder","age":39,"income":44342.73,"expenses":36265.52,"interest_rate":7},
  {"id":2,"first_name":"Vic","last_name":"Alleway","age":47,"income":55958.76,"expenses":20487.20,"interest_rate":6},
  {"id":3,"first_name":"Terrence","last_name":"Casterou","age":82,"income":43208.75,"expenses":35918.15,"interest_rate":8},
  {"id":4,"first_name":"Skip","last_name":"Anscombe","age":73,"income":67016.96,"expenses":35891.48,"interest_rate":5},
  {"id":5,"first_name":"Lilly","last_name":"Daelman","age":74,"income":66856.83,"expenses":25424.89,"interest_rate":4},
  {"id":6,"first_name":"Harcourt","last_name":"Chalfain","age":58,"income":60085.82,"expenses":24337.84,"interest_rate":8},
  {"id":7,"first_name":"Adolf","last_name":"Kahn","age":84,"income":67110.80,"expenses":22072.08,"interest_rate":7},
  {"id":8,"first_name":"Costa","last_name":"Yemm","age":31,"income":72250.51,"expenses":29806.43,"interest_rate":7},
  {"id":9,"first_name":"Noble","last_name":"Barmby","age":53,"income":61869.26,"expenses":44903.18,"interest_rate":6},
  {"id":10,"first_name":"Niel","last_name":"Sangwin","age":83,"income":63338.26,"expenses":29334.06,"interest_rate":7}
]

let id = 11

const gs = require('gradient-string')

module.exports = {

  getPeople: (req, res) => {
    // console.log(gs.cristal(res))
    res.status(200).send(people)
  },

  addPerson: (req, res) => {
    console.log(req.body)
    const { new_first_name, 
      new_last_name, 
      new_age, 
      new_income, 
      new_expenses, 
      new_interest_rate} = req.body
    const personObj = {
      id: id++
      ,first_name: new_first_name
      ,last_name: new_last_name
      ,age: new_age
      ,income: new_income
      ,expenses: new_expenses
      ,interest_rate: new_interest_rate
    }
    console.log(personObj)
    people.push(personObj)
    res.status(201).send(people)
  },

  editPerson: (req, res) => {
    const {id} = req.params;
    const {
          new_first_name, 
          new_last_name, 
          new_age, 
          new_income, 
          new_expenses, 
          new_interest_rate
        } = req.body;
    const index = people.findIndex( ele => ele.id === +id )
    if (index === -1) res.status(404).send('could not find matching person')
    people[index].first_name = new_first_name
    people[index].last_name = new_last_name
    people[index].age = new_age
    people[index].income = new_income
    people[index].expenses = new_expenses
    people[index].interest_rate = new_interest_rate

    res.status(200).send(people)

  },

  deletePerson: (req, res) => {
    const {id} = req.params
    const index = people.findIndex( ele => ele.id === +id)
    people.splice(index,1)
    
    res.status(200).send(people)
  },

  findPerson: (req, res) => {
    //something with the query stuff?
  }



}