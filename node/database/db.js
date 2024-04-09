import {Sequellize} from 'sequelize';

const db = new Sequellize ('app','root','1819',{
    host:'localhost',
    dialect:'mysql'
})

export default db