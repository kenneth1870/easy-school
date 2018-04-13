10.times do
  Professor.create!(first_name: 'Jhon',
               last_name: 'Doe',
               info: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
               schedule: 1)
end
10.times do
  Student.create!(first_name: 'Juan',
               last_name: 'Doe',
               info: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
               grade: 1)
end
