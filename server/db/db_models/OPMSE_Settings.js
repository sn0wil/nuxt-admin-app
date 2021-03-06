/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('OPMSE_Settings', {
		Id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			primaryKey: true
		},
		Sett_Group: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		Sett_Setting: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Sett_Value: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'OPMSE_Settings',
		timestamps: false
	});
};
