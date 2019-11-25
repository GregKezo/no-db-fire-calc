const people = [
  {"id":1,"first_name":"Jehu","last_name":"Bedder","age":39,"income":45000,"expenses":36000,"interest_rate":7},
  {"id":2,"first_name":"Vic","last_name":"Alleway","age":47,"income":56000,"expenses":21000,"interest_rate":6},
  {"id":3,"first_name":"Terrence","last_name":"Casterou","age":23,"income":43000,"expenses":36000,"interest_rate":8},
  {"id":4,"first_name":"Skip","last_name":"Anscombe","age":73,"income":67000,"expenses":36000,"interest_rate":5},
  {"id":5,"first_name":"Lilly","last_name":"Daelman","age":74,"income":66000,"expenses":36000,"interest_rate":4},
  {"id":6,"first_name":"Harcourt","last_name":"Chalfain","age":58,"income":60000,"expenses":25000,"interest_rate":8},
  {"id":7,"first_name":"Adolf","last_name":"Kahn","age":84,"income":67000,"expenses":22000,"interest_rate":7},
  {"id":8,"first_name":"Costa","last_name":"Yemm","age":31,"income":72000,"expenses":30000,"interest_rate":7},
  {"id":9,"first_name":"Noble","last_name":"Barmby","age":53,"income":62000,"expenses":45000,"interest_rate":6},
  {"id":10,"first_name":"Niel","last_name":"Sangwin","age":83,"income":63000,"expenses":30000,"interest_rate":7}
]

let id = 11

const gs = require('gradient-string')

module.exports = {

  getPeople: (req, res) => {
    let result = people
    // console.log(req.body, req.query)
    if(req.query.first_name) {
      result = result.filter( person => {
        return person.first_name.includes(req.query.first_name)
      })
    }
    if(req.query.last_name) {
      result = result.filter( person => {
        return person.last_name.includes(req.query.last_name)
      })
    }
    // console.log(gs.cristal(res))
    res.status(200).send(result)
  },

  addPerson: (req, res) => {
    // console.log(req.body)
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
    // console.log(personObj)
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
    people[index].first_name = new_first_name || people[index].first_name
    people[index].last_name = new_last_name || people[index].last_name
    people[index].age = new_age || people[index].age
    people[index].income = new_income || people[index].income
    people[index].expenses = new_expenses || people[index].expenses
    people[index].interest_rate = new_interest_rate || people[index].interest_rate

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