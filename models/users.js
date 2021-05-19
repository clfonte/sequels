module.exports = (Sequelize, DataType) => {
    const Users = Sequelize.define('Users', {

        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataType.INTEGER
        },

        name: {
            allowNull: false,
            type: DataType.STRING(150)
        },

        email: {
            allowNull: false,
            type: DataType.STRING(80)
        },

        password: {
            allowNull: false,
            type: DataType.STRING(16)
        },
    })
    return Users;
}