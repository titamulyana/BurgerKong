const { Item, Category, User, Ingredient } = require("../models/index");
const { sequelize } = require("../models");

class Controller {
  //getitem
  static async getItem(req, res, next) {
    try {
      const item = await Item.findAll({
        include: ["Category", "Ingredient"],
      });
      res.status(200).json({
        data: item,
      });
    } catch (err) {
      next(err);
    }
  }
  //additems
  static async addItem(req, res, next) {
    console.log(req.body);
    try {
      const t = await sequelize.transaction();
      const authorId = +req.user.id;
      const { name, description, price, imgUrl, categoryId, ingredient } = req.body;
      const item = await Item.create(
        {
          name,
          description,
          price,
          imgUrl,
          categoryId,
          authorId,
        },
        { transaction: t }
      );

      const addIngredient = await Ingredient.create(
        {
          name: ingredient,
          itemId: item.id,
        },
        { transaction: t }
      );
      t.commit();
      res.status(201).json({
        message: "success add Item",
        data: item,
        addIngredient,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  //putitem
  static async editItem(req, res, next) {
    try {
      const t = await sequelize.transaction();
      const id = req.params.id;
      const { name, description, price, imgUrl, categoryId, ingredient } = req.body;
      const item = await Item.update(
        {
          name: name,
          description: description,
          price: price,
          imgUrl: imgUrl,
          categoryId: categoryId,
        },
        {
          where: {
            id: id,
          },
        },
        { transaction: t }
      );

      const editIngridient = await Ingredient.update(
        {
          name: ingredient,
        },
        {
          where: {
            itemId: id,
          },
        },
        { transaction: t }
      );
      t.commit()
      res.status(201).json({
        message: "success has edited",
      });
    } catch (err) {
      next(err);
    }
  }
  //deleteItem
  static async delete(req, res, next) {
    try {
      const t = await sequelize.transaction();
      const id = +req.params.id;
      const ingredient = await Ingredient.destroy(
        {
          where: {
            itemId: id,
          },
        },
        { transaction: t }
      );

      const item = await Item.destroy(
        {
          where: {
            id: id,
          },
        },
        { transaction: t }
      );

      t.commit();
      res.status(203).json({
        message: "success delete item" + id,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  //getItemId
  static async findItem(req, res, next) {
    try {
      const id = +req.params.id;
      const item = await Item.findOne({
        where: {
          id,
        },
        include: Category,
      });
      if (!item) {
        throw { name: "notFound" };
      }
      res.status(200).json(item);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
