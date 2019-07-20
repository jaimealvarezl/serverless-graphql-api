module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("Category", {
        name: DataTypes.STRING,
        updatedAt: DataTypes.INTEGER,
        createdAt: DataTypes.INTEGER,
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        }
    });

    Category.associate = function (models) {
        Category.belongsToMany(models.Locations, {
            through: "CategoryLocation",
            foreignKey: "categoryId"
        });
    };
    return Category;
};
