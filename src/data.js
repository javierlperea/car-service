export const cars = [
  {
    id: 0,
    brand: 'Ford',
    model: 'Focus',
    year: '2021',
    patent: 'MLS 459',
    color: 'blue'
  },
  {
    id: 1,
    brand: 'Chevrolet',
    model: 'Onix',
    year: '2018',
    patent: 'XLM 346',
    color: 'black'
  },
  {
    id: 2,
    brand: 'Toyota',
    model: 'Hilux',
    year: '2020',
    patent: 'CHT 937',
    color: 'red'
  }
]

export const services = [
  {
    id: 0,
    service: 'Oil Change',
    description: 'Oils for mechanical, automatic and power steering transmissions.'
  },
  {
    id: 1,
    service: 'Filter Change',
    description: 'Air, oil, fuel and cabin filters.'
  },
  {
    id: 2,
    service: 'Belt Change',
    description: 'Prevents damage to other parts of the engine and even destroying the engine completely and rendering it useless.'
  },
  {
    id: 3,
    service: 'General Review',
    description: 'Revision of air filter, refrigeration, battery, leaks, breaks, ligths, scanner and liquids'
  },
  {
    id: 4,
    service: 'Other',
    description: 'Specific customer requests'
  }
]

export const owner = [
  {
    id: 0,
    name: 'Javier',
    lastName: 'Perea',
    dni: '35934696',
    cars: cars.map(car => car.id === 1)
  },
  {
    id: 0,
    name: 'Matias',
    lastName: 'Reartes',
    dni: '38456945',
    cars: cars.map(car => car.id === 0)
  },
  {
    id: 0,
    name: 'Juan Carlos',
    lastName: 'Corzo',
    dni: '38265789',
    cars: cars.map(car => car.id === 2)
  }
]
