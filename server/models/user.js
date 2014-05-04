module.exports = function(sequelize, DataTypes) {
		return sequelize.define('User', {
				email: {
					type: DataTypes.STRING,
					primaryKey: true,
					allowNull: false,
					unique: true,
					validate:{
						isEmail: true,
					}
				},
				password: {
					type: DataTypes.STRING,
					allowNull: false
				},
                firstName: {
					type: DataTypes.STRING,
					allowNull: false
                },
                lastName: {
					type: DataTypes.STRING,
					allowNull: true
                }
		 });
}