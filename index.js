const data = [
  {
    id: 1,
    nm: "dipti",
    surname: "mandani",
    exp: 7,
  },
  {
    id: 2,
    nm: "Khyati",
    surname: "Bhindi",
    exp: 3,
  },
  {
    id: 3,
    nm: "Pinki",
    surname: "Sangwan",
    exp: 10,
  },
];

const d = data.find((d) => {
  return  d.nm== 'dipti';
});
console.log(d);

class employee {
  constructor(empData) {
    // console.log(data);
    this.empData = empData;
    console.log(this.empData);
  }

  getName() {
    return this.empData.nm + this.empData.surname;
  }
  getEmpExp() {
    return this.empData.exp;
  }
  getEmpAddress() {
    return (
      this.empData.city + "," + this.empData.state + "," + this.empData.country
    );
  }
}
const emp = new employee(data);
