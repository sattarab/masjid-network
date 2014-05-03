module.exports = function(sequelize, DataTypes) {
		return sequelize.define('User', {
				username: {
					type: DataTypes.STRING,
					primaryKey: true,
					allowNull: false,
					unique: true,
					validate:{
						isEmail: true,
					}
				}
		 });
}