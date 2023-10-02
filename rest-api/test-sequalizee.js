const sequelize = new Sequelize('postgres', 'postgres', 'prominent2020', {
  host: 'localhost',
  dialect: 'postgres'
});

const test = async()=>{
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}